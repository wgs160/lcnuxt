<template>
    <div id="app">
        <my-nav/>
        <div id="container">
            <nuxt/>
        </div>
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

<style scoped>
    #container {
        margin: 20px auto;
        width: 90%;
        max-width: 1400px;
        min-width: 960px;
    }
</style>
