<template>
    <el-menu theme="dark" :default-active="activeIndex" class="navbar" mode="horizontal" @select="handleSelect">
        <div class="search">
            <el-input
                    placeholder="搜索内容"
                    icon="search"
                    v-model="input"
                    :on-icon-click="handleIconClick">
            </el-input>
        </div>
        <div class="nav-right">
            <el-menu-item index="1"><nuxt-link to="/" >首页</nuxt-link></el-menu-item>
            <el-menu-item index="2"><nuxt-link to="/start" >新手入门</nuxt-link></el-menu-item>
            <el-menu-item index="3"><nuxt-link to="/api" >API</nuxt-link></el-menu-item>
            <el-menu-item index="4"><nuxt-link to="/about" >关于</nuxt-link></el-menu-item>
            <el-menu-item index="5"><nuxt-link to="/setting" >设置</nuxt-link></el-menu-item>
            <el-menu-item index="6"><nuxt-link to="/signout" >退出</nuxt-link></el-menu-item>
        </div>
    </el-menu>
</template>

<script>
    export default {
        data() {
            return {
                input: '',
                activeIndex: '1',
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            handleIconClick(ev) {
                console.log(ev);
            }
        }
    }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
    @import '~assets/css/mixin';
    .navbar{
        padding: 0 30px;
    }
    .nav-right{
        float: right;
    }
    .search{
        float: left;
        margin-top: 10px;
        width: 300px;
    }
</style>
