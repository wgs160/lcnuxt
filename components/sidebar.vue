<template>
    <div class="sidebar">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                input: '',
            };
        }
    }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
    @import '~assets/css/mixin';

    .sidebar{
        float: right;
        width: 280px;
        margin-left: -300px;
        background-color: #ffffff;
    }
</style>
