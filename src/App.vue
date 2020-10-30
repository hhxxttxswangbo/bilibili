<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepalive == true"
    /></keep-alive>
    <router-view v-if="!$route.meta.keepalive == true"> </router-view>
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #f4f4f4;
}

p {
  margin: 0;
  padding: 0;
}
</style>
