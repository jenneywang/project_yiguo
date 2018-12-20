<template>
	<div class="cart">
		<div class="header">
			<span @click="goBack"></span>
			<h2>结算</h2>
		</div>
		<div class="headere"></div>
		<div class="choosed">
			<div class="list">
				<goPayList v-for="(item, index) in $store.state.cartList" :key="index" :data="item"></goPayList>
			</div>
		</div>
		<div class="settlement">
			<div class="goPay">确认支付 ￥{{delMoney}}</div>
		</div>
	</div>
</template>
<style type="text/css" lang="scss" scoped>
	.cart {
		padding-bottom: 105px;
		background-color: #F4F4F4;
		.header {
			position: fixed;
			left: 0;
			top: 0;
			width: 100%;
			height: 40px;
			line-height: 40px;
			background-color: #fff;
			text-align: center;
			h2 {
				width: 100%;
				height: 40px;
				color: #000;
				font-weight: normal;
				font-size: 14px;
			}
			span {
				position: absolute;
				left: 14px;
				top: 13px;
				width: 8px;
				height: 13px;
				background: url("/img/cart/goback.png") no-repeat center center;
				background-size: contain;
				cursor: pointer;
			}
		}
		.headere {
			width: 100%;
			height: 40px;
		}
		.settlement {
			position: fixed;
			bottom: 0px;
			left: 0;
			width: 100%;
			height: 50px;
			line-height: 50px;
			padding-bottom: 55px;
			background-color: #fff;
			font-size: 13px;
			.goPay {
				width: 100%;
				text-align: center;
				background-color: red;
				font-size: 16px;
				color: #fff;
				cursor: pointer;
			}
		}
	}
</style>
<script type="text/javascript">
	//引入组件并注册
	import goPayList from './goPayList.vue';
	export default {
		components: { goPayList },
		data() {
			return {}
		},
		computed: {
			delMoney() {
				let money = 0;
				for(let i = 0; i < this.$store.state.cartList.length; i++) {
					if(!this.$store.state.cartList[i].CommodityTag) {
						// console.log(this.$store.state.cartList[i].CommodityTag);
						money += this.$store.state.cartList[i].SellPrice * this.$store.state.cartList[i].State;
					}
				}
				money = money.toFixed(2);
				return money;
			}
		},
		methods: {
			goBack() {
				history.go(-1);
			}
		}
	}
</script>