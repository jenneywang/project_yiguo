// main.js文件——项目入口、配置文件

// 导入vue模块
import Vue from 'vue'
// 引入路由文件
import router from './router/router.js';
// 引入store文件
import store from './store/store';
// 引入APP组件（主组件、项目入口组件）
import App from './App.vue';
// 导入axios模块
import axios from 'axios';
// 导入mint-ui框架
import Mint from 'mint-ui';
// 安装mint-ui
Vue.use(Mint);
// 引入全局样式
import 'mint-ui/lib/style.css';

Vue.config.productionTip = false;

// 安装axios
Vue.prototype.$http = axios;

new Vue({
// step6：注册路由
  router,
// 第三步：注册store
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
