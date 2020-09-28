import Vue from 'vue'
import App from './App.vue'
import router from './router'

//引入vant
import Vant from 'vant';
import 'vant/lib/index.css'
Vue.use(Vant);

//引入提示
import { Toast } from 'vant';

//引入axios
import http from '../http'

//将http挂载到prototype上
Vue.prototype.$msg = Toast

////将Toast挂载到prototype上
Vue.prototype.$http = http

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
