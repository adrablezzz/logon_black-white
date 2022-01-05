<template>
<div id="new">
  <el-row type="flex">
    <el-col :span="3">
      <div class="nav">
        <a href="#">
          <div class="nav-item" :class="{active:currentIndex===index}" v-for="(item,index) in navs" @click="navItemClick(index)">{{item}}</div>
        </a>
      </div>
    </el-col>
    <el-col :span="21">
      <div class="main">
        <hc-md v-motion :initial="{opacity: 0,y: 100,}" :enter="{opacity: 1,y: 0,}" 
               class="markdown-body" v-if="currentIndex===0"></hc-md>
        <js-md v-motion :initial="{opacity: 0,y: 100,}" :enter="{opacity: 1,y: 0,}"
               class="markdown-body" v-if="currentIndex===1"></js-md>
        <vue-md v-motion :initial="{opacity: 0,y: 100,}" :enter="{opacity: 1,y: 0,}" 
               class="markdown-body" v-if="currentIndex===2"></vue-md>
        <http-md v-motion :initial="{opacity: 0,y: 100,}" :enter="{opacity: 1,y: 0,}" 
               class="markdown-body" v-if="currentIndex===3"></http-md>
        <debug-md v-motion :initial="{opacity: 0,y: 100,}" :enter="{opacity: 1,y: 0,}" 
               class="markdown-body" v-if="currentIndex===4"></debug-md>
        
      </div>
    </el-col>
  </el-row>
</div>
</template>

<script>
import HcMd from '@/assets/md/note_html&css.md'
import JsMd from '@/assets/md/note_js.md'
import VueMd from '@/assets/md/note_vue.md'
import HttpMd from '@/assets/md/note_http.md'
import DebugMd from '@/assets/md/note_debug.md'

export default {
  components: {
    HcMd,
    JsMd,
    VueMd,
    HttpMd,
    DebugMd
  },
  name: 'New',
  data() {
    return {
      navs: ['note-html&css','note-js','note-vue','note-http','note-debug'],
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