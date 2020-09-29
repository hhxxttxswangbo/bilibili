<template>
  <div class="userinfo">
    <nav-bar></nav-bar>
    <img src="@/assets/bannerTop_new.png" alt="" class="backImg" />
    <user-detail />
  </div>
</template>

<script>
import NavBar from "@/components/common/NavBar.vue";
import userDetail from "@/components/userComponent/userDetail.vue";
export default {
  components: {
    NavBar,
    userDetail,
  },
};
</script>

<style lang="less">
.userinfo {
  .backImg {
    height: 131px;
    width: 100%;
  }
}
</style>