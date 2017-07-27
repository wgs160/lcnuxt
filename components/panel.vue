<template>
    <div class="panel">
        <div :class="headerClass"  class="header">
            <slot name="header"></slot>
        </div>
        <div :class="innerClass" class="inner">
            <slot name="inner"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                input: '',
            };
        },
        props: {
            innerClass: {
                type: String,
                default() {
                    return ''
                }
            },
            headerClass: {
                type: String,
                default() {
                    return ''
                }
            },
        }
    }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
    @import '~assets/css/mixin';

    .panel{
        border-radius: 3px;
        background-color: #ffffff;
        font-size: 14px;
    }

    .header {
        padding: 10px;
        @include border(bottom);
        color: #ffffff;
        background-color: #58B7FF;
    }
    .inner{
        padding: 10px;
    }

    .no-padding {
        padding: 0;
    }

    .topic-detail-header {
        padding: 20px 10px;
        background-color: #ffffff;
    }
</style>
