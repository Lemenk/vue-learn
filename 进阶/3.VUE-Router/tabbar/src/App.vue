<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar/>
  </div>
</template>

<script>
/* 引入组件 */
import MainTabBar from './components/mainTabbar/MainTabBar'

export default {
  name: "App",
  /* 注册组件 */
  components: {
    MainTabBar
  }
};
</script>

<style>
@import url("./assets/css/base");
</style>
