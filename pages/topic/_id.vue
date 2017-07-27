<template>
    <div class="cf">
        <sidebar>
            <panel>
                <span slot="header">标题</span>
                <span slot="inner">广告</span>
            </panel>
        </sidebar>
        <div class="left-content">
            <panel headerClass="topic-detail-header">
                <h1 class="title" slot="header">{{data.title}}</h1>
                <div slot="inner" class="topic_content" v-html="data.content"></div>
            </panel>
        </div>
    </div>
</template>

<script>
    import sidebar from '~components/sidebar.vue'
    import panel from '~components/panel.vue'

    export default {
        async fetch ({store, params, error}) {
            const id = params.id || ''
            await store.dispatch('cnode/topics_detail', {id, error})
        },
        layout: 'cnode',
        head () {
            return {
                title: this.data.title
            }
        },
        computed: {
            data () {
                return this.$store.state.cnode.topicsDetail
            }
        },
        components: {
            sidebar,
            panel
        }
    }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
    .title{
        font-size: 22px;
        font-weight: 700;
        color: #333333;
    }
</style>