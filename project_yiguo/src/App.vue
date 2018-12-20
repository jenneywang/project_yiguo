<template>
	<div>
		<router-view></router-view>
		<!-- tabbar -->
		<div class="tabbar">
			<span class="tabbarList" :style="{backgroundImage: 'url(/img/Home/00_tab/png/' + (tabArr[0] ? 'homeActive.png' : 'home.png') + ')', color: tabArr[0] ? '#14B87C' : '#BFBEBE'}" @click="changeTab(0)">首页</span>
			<span class="tabbarList" :style="{backgroundImage: 'url(/img/Home/00_tab/png/' + (tabArr[1] ? 'categoryActive.png' : 'category.png') + ')', color: tabArr[1] ? '#14B87C' : '#BFBEBE'}" @click="changeTab(1)">分类</span>
			<span class="tabbarList" :style="{backgroundImage: 'url(/img/Home/00_tab/png/' + (tabArr[2] ? 'eatActive.png' : 'eat.png') + ')', color: tabArr[2] ? '#14B87C' : '#BFBEBE'}" @click="changeTab(2)">吃饭吧</span>
			<span class="tabbarList" :style="{backgroundImage: 'url(/img/Home/00_tab/png/' + (tabArr[3] ? 'shoppingcartActive.png' : 'shoppingcart.png') + ')', color: tabArr[3] ? '#14B87C' : '#BFBEBE'}" @click="changeTab(3)">购物车</span>
			<span class="tabbarList" :style="{backgroundImage: 'url(/img/Home/00_tab/png/' + (tabArr[4] ? 'mineActive.png' : 'mine.png') + ')', color: tabArr[4] ? '#14B87C' : '#BFBEBE'}" @click="changeTab(4)">我的</span>
		</div>
	</div>
</template>
<style type="text/css" lang="scss">
	@import './base.scss';
	* {
		padding: 0;
		margin: 0;
		list-style: none;
	}
	.tabbar {
		position: fixed;
		z-index: 100;
		bottom: 0;
		width: 100%;
		height: 55px;
		line-height: 85px;
		text-align: center;
		background-color: white;
		.tabbarList {
			display: inline-block;
			width: 20%;
			height: 55px;
			font-size: 12px;
			text-align: center;
			background-position: center 5px;
			background-repeat: no-repeat;
			background-size: 35%;
			cursor: pointer;
		}
	}	
</style>
<script>
	export default {
		// 绑定数据
		data() {
			return {
				tabArr: [true, false, false, false, false],
				routerArr: ['/home', '/Category', '/Eat', '/cart', '/Mine']
			}
		}, 
		// 定义方法
		methods: {
			changeTab(idx) {
				for(let i = 0; i < this.tabArr.length; i++) {
					if(i == idx) {
						this.tabArr[i] = true;
					} else {
						this.tabArr[i] = false;
					}
				}
				this.$router.push(this.routerArr[idx]);
			}
		}
	}
</script>