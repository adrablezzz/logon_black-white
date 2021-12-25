import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
import { MotionPlugin } from '@vueuse/motion'
Vue.use(MotionPlugin)

// markdown样式
import 'github-markdown-css'
// 代码高亮
import 'highlight.js/styles/github.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
