<template>
    <div class="cf">
        <sidebar>
            <panel>
                <span slot="header">标题</span>
                <span slot="inner">广告</span>
            </panel>
        </sidebar>
        <div class="left-content">
            <panel  innerClass="no-padding">
                <span slot="header">标签</span>
                <div slot="inner" class="cell" v-for="(cell, index) in data.topics">
                    <a class="user_avatar" href="">
                        <img :src="cell.author.avatar_url" :title="cell.author.loginname">
                    </a>
                    <span class="reply_count">
                        <span class="count_of_replies" title="回复数">{{cell.reply_count}}</span>
                        <span class="count_seperator">/</span>
                        <span class="count_of_visits" title="点击数">{{cell.visit_count}}</span>
                    </span>
                    <el-tag v-if="cell.top" class='type' type="success">置顶</el-tag>
                    <el-tag v-if="!cell.top && cell.good" class='type' type="success">精华</el-tag>
                    <el-tag v-if="!cell.top && !cell.good && cell.tab === 'ask'" class='type' type="gray">问答</el-tag>
                    <el-tag v-if="!cell.top && !cell.good && cell.tab === 'share'" class='type' type="gray">分享</el-tag>
                    <span class="last-reply">{{lastReply(cell.last_reply_at)}}</span>
                    <div class="title">
                        <nuxt-link :to="`/topic/${cell.id}`"> {{cell.title}}</nuxt-link>
                    </div>
                </div>
            </panel>
        </div>
    </div>
</template>

<script>
    import moment from 'moment'
    import sidebar from '~components/sidebar.vue'
    import panel from '~components/panel.vue'

    export default {
        async fetch ({store, error}) {
            await store.dispatch('cnode/topics', {error})
        },
        layout: 'cnode',
        data() {
            return {
                activeIndex: '1'
            };
        },
        computed: {
            data () {
                return this.$store.state.cnode.topics
            }
        },
        methods: {
            lastReply(str) {
                return moment(str).fromNow()
            },
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
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
        @include noBreak();
        font-size: 16px;

        a:hover {
            text-decoration: underline;
        }
    }
    .last-reply{
        float: right;
        padding: 0 10px;
    }
    .type{
        float: left;
        margin-top: 3px;
        margin-right: 10px;
    }
</style>
