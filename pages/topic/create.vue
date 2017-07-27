<template>
    <div class="cf">
        <sidebar>
            <panel>
                <span slot="header">md语法参考</span>
                <span slot="inner">编辑器样式没调</span>
            </panel>
        </sidebar>
        <div class="left-content">
            <panel>
                <h1 class="title" slot="header">发布</h1>
                <div class="create" slot="inner">
                    <div class="title-block">
                        <el-input v-model="input" placeholder="标题字数 10 字以上"></el-input>
                    </div>
                    <textarea id="mdEditor"></textarea>
                    <el-button @click.native="submit" type="primary">提交</el-button>
                </div>
            </panel>
        </div>
    </div>
</template>

<script>
    import sidebar from '~components/sidebar.vue'
    import panel from '~components/panel.vue'
    import 'simplemde/dist/simplemde.min.css'

    export default {
        layout: 'cnode',
        data() {
            return {
                input: ''
            }
        },
        mounted() {
            this.simplemde = this.$$SimpleMDE({
                element: document.getElementById("mdEditor")
            })
        },
        methods: {
            submit(str) {
            }
        },
        components: {
            sidebar,
            panel
        }
    }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
    @import '~assets/css/mixin';

    .create{
    }
    .title-block{
        margin-bottom: rem(10px);
    }
</style>