<template>
  <div>
    <h2>个人档案</h2>
    <p>这是我的个人信息</p>
    <p>{{$route.query.name}}</p>
    <p>{{$route.query.age}}</p>
    <p>{{$route.query.sex}}</p>
  </div>
</template>

<script>
export default {
  name: "Profile"
};
</script>

<style scoped>
</style>
