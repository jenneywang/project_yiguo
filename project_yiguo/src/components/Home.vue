<!-- Home组件 -->
<!-- 模板 -->
<template>
	<div>
		<!-- header -->
		<header class="header">
			<router-link class="header_cityList" tag="div" :to="'/city'">
				<span>深圳</span>
				<span class="arrow">
					<span class="arrow green"></span>
				</span>
			</router-link>
			<div class="header_search">
				<input type="text" placeholder="请输入商品名称" />
			</div>
			<div class="header_scan">扫一扫</div>
		</header>
		<!-- banner -->
		<mt-swipe class="banner" id="banner" :auto="2000">
			<mt-swipe-item><img id="banner_img" src="/img/Home/01_banner/banner01.jpg" alt="" /></mt-swipe-item>
			<mt-swipe-item><img src="/img/Home/01_banner/banner02.jpg" alt="" /></mt-swipe-item>
			<mt-swipe-item><img src="/img/Home/01_banner/banner03.jpg" alt="" /></mt-swipe-item>
			<mt-swipe-item><img src="/img/Home/01_banner/banner04.jpg" alt="" /></mt-swipe-item>
			<mt-swipe-item><img src="/img/Home/01_banner/banner05.jpg" alt="" /></mt-swipe-item>
		</mt-swipe>
		<div class="banner_bg">		
			<img src="/img/Home/01_banner/banner_bg.gif" alt="" />			
		</div>
		<!-- 百万红包，抢先开卖 -->
		<div class="banwan" style="height: 200px">
			<ul>
				<li>
					<img src="/img/Home/01_banner/classify01.png" alt="">
					<h3>买二付一</h3>
				</li>
				<li>
					<img src="/img/Home/01_banner/classify02.png" alt="">
					<h3>原籍礼盒</h3>
				</li>
				<li>
					<img src="/img/Home/01_banner/classify03.png" alt="">
					<h3>会员福利</h3>
				</li>
				<li>
					<img src="/img/Home/01_banner/classify04.png" alt="">
					<h3>银行活动</h3>
				</li>
				<li>
					<img src="/img/Home/01_banner/classify05.png" alt="">
					<h3>新鲜水果</h3>
				</li>
				<li>
					<img src="/img/Home/01_banner/classify06.png" alt="">
					<h3>精选肉类</h3>
				</li>
				<li>
					<img src="/img/Home/01_banner/classify07.png" alt="">
					<h3>海鲜水产</h3>
				</li>
				<li>
					<img src="/img/Home/01_banner/classify08.png" alt="">
					<h3>食品饮料</h3>
				</li>
			</ul>
		</div>
		<!-- 易果快讯 -->
		<div class="kuaixun">
			<img src="/img/Home/01_banner/news.png" alt="">
			<span>易果会员说明</span>
		</div>	
		<!-- 先锋开卖，超值预售 -->
		<div class="xianfeng">
			<img class="left" src="/img/Home/01_banner/left.jpg" alt="" />
			<img class="right" src="/img/Home/01_banner/right.jpg" alt="" />
		</div>
		<!-- 分类产品展示 -->
		<div class="classify">
			<img class="pic_tit" src="/img/Home/02_classify/01_qxkc.jpg" alt="">
			<ul class="product_list">
				<Item v-for="(item, index) in jinkou_fruit" :key="index" :data="item"></Item>
			</ul>
		</div>
	</div>	
</template>
<!-- 样式 -->
<style type="text/css" lang="scss">
	@import '../base.scss';
	html {
		padding-top: 50px;
		background-color: #F4F4F4;
	}
	.header {
		position: fixed;
		z-index: 100;
		top: 0;
		width: 100%;
		height: 50px;
		line-height: 50px;
		background-color: $activeColor;
		color: white;
		box-sizing: border-box;
		display: flex;
		text-align: center;
		.header_cityList {
			flex: 2;
			.arrow {
				@include arrow(8px, #fff);
				position: relative;
				top: 0px;
				left: 5px;
				.green {
					position: absolute;
					top: -10px;
					left: -8px;
					border-top-color: $activeColor;
				}
			}			
		}
		.header_search {
			flex: 6;
			input {
				background: rgba(255,255,255,.2);
				border-radius: 20px;
				border: none;
				outline: none;
				height: 30px;
				width: 100%;
				padding-left: 10px;
				box-sizing: border-box;
			}
		}
		.header_scan {
			flex: 2;
		}
	} 
	.banner {
		margin-top: 50px;
		img {
			width: 100%;
			display: block;
		}
	}
	.banner_bg {
		width: 100%;
		img{
			width: 100%;
			display: block;
		}
	}
	.banwan ul {
		width: 100%;
		height: 200px;
		background-color: #FFFFFF;
		li {
			list-style: none;
			float: left;
			width: 25%;
			text-align: center;
			margin-top: 15px;
			img {
				width: 60%;
				display: block;
				margin: 0 auto;
			}
			h3 {
				font-weight: normal;
				font-size: 12px;
			}
		}
	}
	.kuaixun {
		border-top: 1px solid $normalColor;
		background-color: #FFFFFF;
		width: 100%;
		height: 40px;
		img {
			float: left;
			height: 18px;
			margin: 12px 10px;
			padding-right: 10px;
			border-right: 1px solid $normalColor;
			line-height: 40px;
		}
		span {
			display: inline-block;
			font-size: 12px;
			line-height: 40px;
		}
	}
	.xianfeng {
		width: 100%;
		height: 140px;
		padding-bottom:100%;
		padding: 10px 0 5px;
		position: relative;
		img.left {
			position: absolute;
			left: 0;
			width: 50%;
		}
		img.right {
			position: absolute;
			right: 0;
			width: 50%;
		}
	}
	.classify {
		background-color: white;
		height: 420px;
		padding-bottom: 50px;
		img.pic_tit {
			width: 100%;
		}
		ul.product_list {
			width: 100%;
		}
	}
</style>
<!-- 交互 -->
<script>
	// 导入jQuery
	import $ from 'jquery';
	// 引入组件
	import Item from './Item.vue';
	// import City from './City.vue';
	export default {
		components: { Item },
		data() {
		return {
				// 预定义数据
				jinkou_fruit: [],
				guochan_fruit: [],
				vegetables: [],
				seafood: [],
				eggs: [],
				number: []
			}
		},
		// 组件创建完成时候，请求数据
		created() {
			// 请求数据
			this.$http
				.get('/json/products.json')
				// 监听返回
				.then(({ data }) => {
					// 存储数据
					this.jinkou_fruit = data.jinkou_fruit;
					this.guochan_fruit = data.guochan_fruit;
					this.vegetables = data.vegetables;
					this.seafood = data.seafood;
					this.eggs = data.eggs;
					this.number = data.number;
					// console.log(data);
					// console.log(this);
				})
		},
		mounted (){
			// 计算图片高度，不能直接获取高度，第一次加载后高度为0，所以需要借助宽度与图片比例进行计算
			let bannerWidth = $("#banner_img").width();
			let bannerHeight = 652 * bannerWidth / 1125;
			//  给父元素设置高度
			$("#banner")[0].style.height = bannerHeight + "px";
		}
	}
</script>


