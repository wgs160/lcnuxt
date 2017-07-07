<template>
    <div id="app">
        <my-nav/>
        <nuxt/>
        <my-footer/>
    </div>
</template>

<script>
    import MyFooter from '~components/footer.vue'
    import MyNav from '~components/nav.vue'

    export default {
        components: {
            MyFooter,
            MyNav
        }
    }
</script>

<style>
</style>
