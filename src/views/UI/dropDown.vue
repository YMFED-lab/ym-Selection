<template>
  <div>
    <v-dropDown :list="list" @selectChange="selectChange"
              :default-props="defaultProps" :select-item="selectItem"></v-dropDown>
  </div>
</template>

<script>
import vDropDown from '../../components/dropdown'
export default {
  name: 'dropDown',
  data () {
    return {
      showSelect: false,
      defaultProps: {
        name: 'myName',
        /* 唯一标识 */
        code: 'myId'
      },
      list: [
        { myId: 1, myName: '下拉选择一' },
        { myId: 2, myName: '下拉选择二' },
        { myId: 3, myName: '下拉选择三' }
      ],
      selectItem: {
        myId: 2, myName: '下拉选择二'
      }
    }
  },
  components: { vDropDown },
  methods: {
    selectChange (val) {
      alert(val[this.defaultProps.name])
    },
    toSelect () {
      this.showSelect = true
    },
    submitSelect (val) {
      alert(val[this.defaultProps.id])
      this.selectItem = val
      this.showSelect = false
    },
    cancelSelect () {
      this.showSelect = false
    }
  }
}
</script>

<style scoped lang="less">
.item{
  /*margin-bottom: 10px;*/
  background-color: #fff;
}
.title{
  height: 45px;
  line-height: 45px;
  padding: 0 15px;
  background-color: #fff;
}
</style>
