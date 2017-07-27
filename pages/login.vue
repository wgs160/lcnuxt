<template>
    <div class="login">
        <panel class="panel">
            <span slot="header">登录</span>
            <span slot="inner">
                <el-input v-model="input" placeholder="请输入token"></el-input>
                <div class="btns">
                    <el-button @click.native="login" type="primary">登录</el-button>
                </div>
                <p class="tip">提示：在cnode登录后的设置里最下面</p>
            </span>
        </panel>
    </div>
</template>

<script>
    import debounce from 'lodash/debounce'
    import panel from '~components/panel.vue'

    export default {
        data() {
            return {
                loading: false,
                input: ''
            };
        },
        methods: {
            login: debounce(async function () {
                if (!this.v()) {
                    return false;
                }
                this.$loading();
                const post = this.$$queryString.stringify({
                    accesstoken: this.input.trim()
                })
                const response = await this.$$axios.post('/api/cnode/accesstoken', post, {
                    headers: {
                        'content-Type': 'application/x-www-form-urlencoded'
                    }
                })
                const res = response.data
                if (res.success) {
                    this.$message({
                        message: '登录成功，即将跳转首页',
                        type: 'success',
                        onClose() {
                            location.href = '/'
                        }
                    });
                } else if (!res.success) {
                    this.$message({
                        message: '登录成功，即将跳转首页',
                        type: 'error'
                    });
                }
                console.log(res);
            }, 1000, {
                'leading': true, //超时前调用
                'trailing': false // 超时后调用
            }),
            // 验证
            v() {
                if (!this.input) {
                    this.$message({
                        showClose: true,
                        message: '不能为空',
                        type: 'error'
                    });
                    return false
                }
                return true
            }
        },
        components: {
            panel
        }
    }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
    @import '~assets/css/mixin';
    .login{
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        width: 350px;
        height: 300px;
        background-color: #f8f8f8;
    }
    .panel {

    }

    .btns{
        margin: rem(60px) 0;
        text-align: center;
    }

    .tip{
        text-align: center;
        color: #666;
    }
</style>
