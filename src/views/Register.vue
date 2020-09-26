<template>
  <div>
    <!-- middleTop接收LoginTop传过来的值，由于是个字符串不加冒号 -->
    <!-- @inputChange="(content) => (name = content)"接收LoginText里的content赋值给name -->
    <login-top middleTop="注册bilibili"></login-top>
    <login-text
      label="姓名"
      style="margin: 15px 0"
      placeholder="请输入姓名"
      rule="^.{6,16}$"
      @inputChange="(content) => (name = content)"
    ></login-text>
    <login-text
      label="账号"
      placeholder="请输入账号"
      rule="^.{6,16}$"
      @inputChange="(content) => (username = content)"
    ></login-text>
    <login-text
      label="密码"
      placeholder="请输入密码"
      type="password"
      rule="^.{6,16}$"
      @inputChange="(content) => (password = content)"
    ></login-text>
    <login-btn btntext="注册" @registerSubmit="registerSubmit"></login-btn>
  </div>
</template>

<script>
import LoginTop from "@/components/common/LoginTop.vue";
import LoginText from "@/components/common/LoginText.vue";
import LoginBtn from "@/components/common/LoginBtn.vue";
export default {
  data() {
    return {
      name: "",
      username: "",
      password: "",
    };
  },
  components: {
    LoginTop,
    LoginText,
    LoginBtn,
  },
  methods: {
    registerSubmit() {
      // console.log("按钮点击了");
      //正则通过才发送网络请求
      if (this.name && this.username && this.password) {
        // console.log('正则全都校验成功');
        //post请求后面跟一个对象
        this.$http
          .post("/register", {
            name: this.name,
            username: this.username,
            password: this.password,
          })
          .then((response) => {});
      }
    },
  },
};
</script>

<style>
</style>