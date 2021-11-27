// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
//主题
import './theme/index.css';
//拷贝
import VueClipboard from 'vue-clipboard2'

import Web3 from 'web3'

Vue.config.productionTip = false
Vue.prototype.Web3 = Web3
Vue.use(VueClipboard)

Vue.use(ElementUI, { size: 'small', zIndex: 3000 });
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
