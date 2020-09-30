<template>
  <div>
    <!-- middleTop接收LoginTop传过来的值，由于是个字符串不加冒号 -->
    <!-- @inputChange="(content) => (name = content)"接收LoginText里的content赋值给name -->
    <login-top middleTop="登录bilibili">
      <div
        slot="right"
        style="font-size: 12px"
        @click="$router.push('/register')"
      >
        切换到注册
      </div>
    </login-top>
    <login-text
      label="账号"
      placeholder="请输入账号"
      style="margin: 15px 0"
      rule="^.{6,16}$"
      @inputChange="(content) => (model.username = content)"
    ></login-text>
    <login-text
      label="密码"
      placeholder="请输入密码"
      type="password"
      rule="^.{6,16}$"
      @inputChange="(content) => (model.password = content)"
    ></login-text>
    <login-btn btntext="登录" @registerSubmit="registerSubmit"></login-btn>
  </div>
</template>

<script>
import LoginTop from "@/components/common/LoginTop.vue";
import LoginText from "@/components/common/LoginText.vue";
import LoginBtn from "@/components/common/LoginBtn.vue";
export default {
  data() {
    return {
      model: {
        username: "",
        password: "",
      },
    };
  },
  components: {
    LoginTop,
    LoginText,
    LoginBtn,
  },
  methods: {
    //async使异步数据转换为同步数据:函数之前使用async,发送请求之前使用await
    async registerSubmit() {
      // console.log("按钮点击了");
      //正则通过才发送网络请求
      if (this.model.username && this.model.password) {
        // console.log('正则全都校验成功');
        //post请求后面跟一个对象
        const res = await this.$http.post("/login", this.model);
        //弹出注册成功或者失败的消息
        this.$msg.fail(res.data.msg);
        if (res.data.code == 301 || res.data.code == 302) {
          return;
        }
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("id", res.data.id);
        setTimeout(() => {
          this.$router.push("/userinfo");
        }, 1000);
      } else {
        //弹出格式不正确，请重新输入
        this.$msg.fail("格式不正确，请重新输入");
      }
    },
  },
};
</script>

<style>
</style>