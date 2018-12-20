// 导入vue模块
import Vue from 'vue';
// 导入路由模块
import VueRouter from 'vue-router';
// 引入Home组件     step3：定义页面组件，或者直接import导入组件
import Home from '../components/Home.vue';
import ShoppingCart from '../components/ShoppingCart.vue';
import goPay from '../components/goPay.vue';
import Category from '../components/Category.vue';
import Eat from '../components/Eat.vue';
import Mine from '../components/Mine.vue';
import City from '../components/City.vue';
import Register from '../components/Register.vue';
import Login from '../components/Login.vue';
// step1：安装路由模块
Vue.use(VueRouter);

// step4/5：配置路由规则、实例化路由
export default new VueRouter({
	routes: [
		{ path: '/', redirect: '/home' },
		{ path: '/home', component: Home },
		{ path: '/cart', component: ShoppingCart },
		{ path: '/goPay', component: goPay },
		{ path: '/Category', component: Category },
		{ path: '/Eat', component: Eat },
		{ path: '/Mine', component: Mine },
		{ path: '/city', component: City },
		{ path: '/register', component: Register },
		{ path: '/login', component: Login }
	]
})
