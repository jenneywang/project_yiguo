// 引入模块
import Vue from 'vue';
import Vuex, { Store } from 'vuex';
// 第一步 安装vuex
Vue.use(Vuex);

// 第二步 创建store并传递各个模块
export default new Store({
	// 数据
	state: {
		cartList: [],
		search: '',
		OtherCategoryCode: '',
		listData: ''
	},
	// 同步消息
	mutations: {
		// 更新search的方法
		updateSearch(state, value) {
			state.search = value;
		},
		obtainData(state, val) {
			state.OtherCategoryCode = val;
		},
		// 订阅消息
		updateCart(state, value) {
			for(let i = 0; i < state.cartList.length; i++) {
				if(state.cartList[i].CommodityId === value.CommodityId) {
					state.cartList[i].State += 1;
					return;
				}
			}
			value.CommodityTag = false;
			state.cartList.push(value);
		},
		cutNum(state, value) {
			for(let i = 0; i < state.cartList.length; i++) {
				if(state.cartList[i].CommodityId === value.CommodityId) {
					if(state.cartList[i].State <= 1) {
						return;
					}
					state.cartList[i].State -= 1;
					return;
				}
			}
		},
		addNum(state, value) {
			for(let i = 0; i < state.cartList.length; i++) {
				if(state.cartList[i].CommodityId === value.CommodityId) {
					state.cartList[i].State += 1;
					return;
				}
			}
		},
		delMsg(state, value) {
			for(let i = 0; i < state.cartList.length; i++) {
				if(state.cartList[i].CommodityId === value.CommodityId) {
					state.cartList[i].State = 1;
					state.cartList.splice(i, 1);
					return;
				}
			}
		},
		chooseDot(state, value) {
			for(let i = 0; i < state.cartList.length; i++) {
				if(state.cartList[i].CommodityId === value.CommodityId) {
					state.cartList[i].CommodityTag = !state.cartList[i].CommodityTag;
					return;
				}
			}
		},
		chooseAll(state,value) {
			for(let i = 0; i < state.cartList.length; i++) {
				state.cartList[i].CommodityTag = !value;
			}
		}
	},
	//订阅异步
	actions: {
		hqData(state, val) {
			state.listData = val;
		}
	}
})

