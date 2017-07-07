<template>
    <div class="container">
        <el-row :gutter="20">
            <el-col :span="20">
                <div class="cell" v-for="(cell, index) in data.topics">
                    <a class="user_avatar" href="">
                        <img :src="cell.author.avatar_url" :title="cell.author.loginname">
                    </a>
                    <span class="reply_count">
                        <span class="count_of_replies" title="回复数">{{cell.reply_count}}
                        </span>
                        <span class="count_seperator">/</span>
                        <span class="count_of_visits" title="点击数">{{cell.visit_count}}
                        </span>
                    </span>
                    <span class="last-reply">
                        {{lastReply(cell.last_reply_at)}}
                    </span>
                    <div class="title">
                        <a  href="">
                            {{cell.title}}
                        </a>
                    </div>
                </div>
            </el-col>
            <el-col :span="4">
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import moment from 'moment'

    export default {
        async fetch ({store, error}) {
            await store.dispatch('cnode/topics', {error})
        },
        data() {
            return {
                activeIndex: '1',
            };
        },
        computed: {
            data () {
                return this.$store.state.cnode.data
            }
        },
        methods: {
            lastReply(str) {
                return moment(str).fromNow()
            },
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
    @import '~assets/css/mixin';

    .container {
        padding: 0 20px;
        margin: 15px auto 0;
    }
    .cell{
        padding: 10px;
        overflow: hidden;
        height: 50px;
        line-height: 30px;;
        border-bottom:1px solid #dddddd;

        &:hover {
            transition: background-color 200ms;
            background-color: #E5E9F2;
        }
    }
    .user_avatar{
        float: left;
        overflow: hidden;
        img{
            width: 30px;
            height: 30px;
        }
    }
    .reply_count{
        float: left;
        width: 100px;
        text-align: center;
    }
    .title{
        @include noBreak()

        a:hover {
            text-decoration: underline;
        }
    }
    .last-reply{
        float: right;
    }
</style>
