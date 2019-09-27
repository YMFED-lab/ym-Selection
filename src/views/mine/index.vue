<template>
  <div class="mainPage">
    这是个人中心页
    <footerBar></footerBar>
  </div>
</template>

<script>
import footerBar from '../../components/footerBar'
export default {
  name: 'mine',
  components: { footerBar },
  data () {
    return {}
  },
  methods: {
    toUrl (item) {
      this.$router.push({
        path: item.url
      })
    }
  }
}
</script>
<style scoped lang="less">
.mainPage{
  padding-bottom:1.1rem;
}
.list{
  width: 100%;
  background-color: #fff;
  font-size: 0.32rem;
  .listItem{
    width: 100%;
    padding: 0 0.3rem;
    height: 0.9rem;
    line-height: 0.9rem;
    border-bottom: 0.01rem solid #eee;
  }
}
</style>
