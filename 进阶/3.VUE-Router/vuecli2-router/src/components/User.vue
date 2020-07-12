<template>
  <div>
    <h2>用户页面</h2>
    <p>我是用户信息</p>
    <p>我的用户名是{{userId}}</p>
    <p>我的用户名是：{{$route.params.userId}}</p>
  </div>
</template>

<script>
export default {
  name: "User",
  computed: {
    userId() {
      return this.$route.params.userId
    }
  },
};
</script>

<style scoped>
</style>
