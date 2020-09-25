<template>
  <div>
    <!-- middleTop接收LoginTop传过来的值 -->
    <login-top middleTop="注册bilibili"></login-top>
  </div>
</template>

<script>
import LoginTop from "@/components/common/LoginTop.vue";
export default {
  components: {
    LoginTop,
  },
};
</script>

<style>
</style>