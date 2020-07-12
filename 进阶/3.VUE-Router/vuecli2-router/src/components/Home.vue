<template>
  <div>
    <h2>首页</h2>
    <p>我是首页，我是首页</p>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      path: "/home/news"
    };
  },
  //当前组件活跃时自动调用
  activated() {
    this.$router.push(this.path);
  },
  //组件内导航守卫
  beforeRouteLeave(to, from, next) {
    this.path = this.$route.path;
    next();
  }
};
</script>

<style scoped>
</style>
