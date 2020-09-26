<template>
  <div>
    <!-- v-model双向绑定 -->
    <van-field
      v-model="content"
      :label="label"
      :type="type"
      :placeholder="placeholder"
      :rule="rule"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: "",
    };
  },
  props: ["label", "type", "placeholder", "rule"],
  methods: {
    handlerulg() {
      //RegExp将字符串转换为真正的正则
      const rue = new RegExp(this.rule);
      if (rue.test(this.content)) {
        // console.log("正则校验成功了");
        //发送事件
        this.$emit("inputChange", this.content);
      }
    },
  },
  //watch监听data的数据
  watch: {
    content() {
      //输入框内容改变时，调用handlerulg
      this.handlerulg();
    },
  },
};
</script>

<style>
</style>