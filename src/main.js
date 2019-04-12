// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import VueResource from 'vue-resource'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import  VueAwesomeSwiper from 'vue-awesome-swiper'
import  'swiper/dist/css/swiper.css'

Vue.use(VueResource)
Vue.use(ElementUI)
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false
Vue.prototype.rootUrl = '/emall/'
Vue.http.options.emulateHTTP = true
Vue.http.options.emulateJSON = true
Vue.http.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  }
})