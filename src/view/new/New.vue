<template>
<div id="new">
  <el-row type="flex">
    <el-col :span="3">
      <div class="nav">
        <div class="nav-item" :class="{active:currentIndex===index}" v-for="(item,index) in navs" @click="navItemClick(index)">{{item}}</div>
      </div>
    </el-col>
    <el-col :span="21">
      <div class="main">
        <ms-md class="markdown-body" v-show="currentIndex===0"></ms-md>
        <div v-show="currentIndex===1">待更新</div>
        <uni-md class="markdown-body" v-show="currentIndex===2"></uni-md>
        <div v-show="currentIndex===3">待更新</div>
      </div>
    </el-col>
  </el-row>
</div>
</template>

<script>
import MsMd from '@/components/md/前端面试笔记.md'
import UniMd from '@/components/md/note_uniApp.md'
export default {
  components: {
    MsMd,
    UniMd,
  },
  name: 'New',
  data() {
    return {
      navs: ['前端面试笔记','vue笔记','uniapp笔记','Debug'],
      currentIndex: 0
    }
  },
  methods: {
    navItemClick(index) {
      console.log(index)
      this.currentIndex = index
    }
  }
}
</script>

<style lang="scss" scoped>
.nav,.main {
  height: 100vh;
}
.nav {
  background-color: #FAFAFA;
  .nav-item {
    line-height: 40px;
    padding-left: 20px;
  }
  .nav-item:hover,.active {
    background-color: #fff;
  }
}
.main {
  overflow-x: hidden;
}
</style>