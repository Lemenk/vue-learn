<template>
  <div id="app">
    <!-- 1.router-link方式 -->
    <router-link to="/home" tag="button">首页</router-link>
    <router-link to="/about">关于</router-link>

    <!-- 在这里使用了v-bind指令，用于绑定userId属性。简写为 : -->
    <router-link :to="'/user/'+userId">用户1</router-link>
    <!-- :to="`/user/${userId}`"，用es6的模板字符串语法写起来更方便 -->
    <router-link :to="`/user/${userId}`">用户2</router-link>
    <router-link
      :to="{
      path:'/profile',
      query:{name: '张三',age: '18', sex: '男'}
    }"
    >档案</router-link>

    <!-- 2.代码跳转方式 -->
    <!-- <button @click="linkToHome">首页</button>
    <button @click="linkToAbout">关于我</button>-->
    <!-- <button @click="linkToUser">我的</button>
    <button @click="linkToProfile">档案</button>-->

    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      userId: "zhangsan"
    };
  },
  methods: {
    linkToHome() {
      this.$router.push("/home");
    },
    linkToAbout() {
      this.$router.push("/about");
    },
    linkToUser() {
      this.$router.push("/user/" + this.userId);
    },
    linkToProfile() {
      this.$router.push({
        path: "/profile",
        query: {
          name: "李四",
          age: "20",
          sex: "女"
        }
      });
    }
  }
};
</script>

<style>
</style>
