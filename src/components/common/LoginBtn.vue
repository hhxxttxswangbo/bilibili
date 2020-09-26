<template>
  <div class="btnparent" @click="registerClick">
    <div class="loginbtn">{{ btntext }}</div>
  </div>
</template>

<script>
export default {
  props: ["btntext"],
  methods: {
    registerClick() {
      //网络请求写在父组件中,要发送事件
      this.$emit("registerSubmit");
    },
  },
};
</script>

<style>
.btnparent {
  padding: 15px 10px;
}

.loginbtn {
  height: 45px;
  font-size: 16px;
  background-color: #ff9db5;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 22.5px;
}
</style>