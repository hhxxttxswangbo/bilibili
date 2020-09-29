<template>
  <div class="navbar">
    <div class="logo">
      <img src="@/assets/logo.png" alt="" />
    </div>
    <div>
      <p>
        请输入内容
        <van-icon class="ipt-icon" name="search" />
      </p>
    </div>
    <div>
      <img src="@/assets/default_img.jpg" alt="" />
      <p>下载App</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.navbar {
  height: 45px;
  background-color: white;
  display: flex;

  .logo {
    display: flex;
    justify-content: center;
    width: 110px;
    img {
      width: 80px;
    }
  }
  div:nth-child(2) {
    //中间输入框自适应
    flex: 1;
    display: flex;
    align-items: center;
    p {
      font-size: 12px;
      line-height: 26px;
      background-color: #f4f4f4;
      height: 23px;
      position: relative;
      padding-left: 30px;
      width: 90%;
      border-radius: 10px;
      color: #aaa;
      .ipt-icon {
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translate(0, -50%);
        color: #aaa;
      }
    }
  }

  div:nth-child(3) {
    // 下载App与头像一行显示
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 24px;
      height: 24px;
    }
    p {
      padding: 5px 10px;
      margin: 0 8px;
      background-color: #fb7299;
      color: white;
      border-radius: 4px;
      font-size: 13px;
    }
  }
}
</style>