<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
@import './assets/css/reset.less';
@import './assets/css/common.less';
#app {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  font-size:0.32rem;
}
.iconfont {
  font-size: 0.32rem;
}
</style>
