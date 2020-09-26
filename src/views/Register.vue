<template>
  <div>
    <!-- middleTop接收LoginTop传过来的值，由于是个字符串不加冒号 -->
    <login-top middleTop="注册bilibili"></login-top>
    <login-text
      label="姓名"
      style="margin: 15px 0"
      placeholder="请输入姓名"
      rule="^.{6,16}$"
    ></login-text>
    <login-text
      label="账号"
      placeholder="请输入账号"
      rule="^.{6,16}$"
    ></login-text>
    <login-text
      label="密码"
      placeholder="请输入密码"
      type="password"
      rule="^.{6,16}$"
    ></login-text>
  </div>
</template>

<script>
import LoginTop from "@/components/common/LoginTop.vue";
import LoginText from "@/components/common/LoginText.vue";
export default {
  components: {
    LoginTop,
    LoginText,
  },
};
</script>

<style>
</style>