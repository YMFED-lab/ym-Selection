<template>
  <div class="mainPage">
    <div class="list">
      <div class="listItem" v-for="(item,index) in list" :key="index" @click="toUrl(item)">{{item.name}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      list: [
        {name: 'actionSheet', url: '/actionSheet'},
        {name: 'dropDown', url: '/dropDown'}
      ]
    }
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
  font-size: 0.32rem;
  .listItem{
    width: 100%;
    padding: 0 0.3rem;
    height: 0.9rem;
    line-height: 0.9rem;
    // border-bottom: 0.01rem solid #eee;
    margin-bottom: 10px;
    background-color: #fff;
  }
}
</style>
