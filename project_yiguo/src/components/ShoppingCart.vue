<template>
	<div class="cart">
		<div class="header">
			<h2>购物车</h2>
		</div>
		<div class="headere"></div>
		<div class="empty" v-show="!$store.state.cartList.length">
			<div class="icon"></div>
			<p>购物车空空的，快去逛逛吧！</p>
			<div class="btn"><a href="#/home">去逛逛</a></div>
		</div>
		<div class="choosed">
			<div class="list">
				<CartList v-for="(item, index) in $store.state.cartList" :key="index" :data="item"></CartList>
			</div>
		</div>
		<div class="guess">
			<div class="top">
				<h2>猜你喜欢</h2>
			</div>
			<ul class="content">
				<li v-for="(item,index) in guessList" :key="index">
					<div class="pic"><img :src="'/img/cart/' + item.SmallPic.slice(item.SmallPic.lastIndexOf('/') + 1)"></div>
					<div class="cname">{{item.CommodityName}}</div>
					<div class="other">
						<span class="price">￥{{item.SellPrice}}</span>
						<span class="addCart" @click="addToCart(item)"><img src="/img/cart/add.png"></span>
					</div>
				</li>
			</ul>
		</div>
		<div class="settlement" v-show="$store.state.cartList.length">
			<div class="choosed">
				<span class="dot" :style="{backgroundImage: 'url(/img/cart/' + (allIsChoosed ? 'check1png.png' : 'check2png.png') + ')'}" @click="allChoosed(allIsChoosed)"></span><span>全选</span>
			</div>
			<div class="sum">合计(不含运费)： ￥{{delMoney}}</div>
			<div class="goPay" @click="isPay">去结算（{{delNum}}）</div>
		</div>
	</div>
</template>
<style type="text/css" lang="scss" scoped>
	.cart {
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
		}
		.headere {
			width: 100%;
			height: 40px;
		}
		.empty {
			padding: 25px 0;
			border-top: 1px solid #ddd;
			background-color: #fff;
			.icon {
				height: 180px;
				background: url("/img/cart/img_nogoods@3x.png") no-repeat center center;
				background-size: 30%;
			}
			p {
				padding-bottom: 15px;
				text-align: center;
				font-size: 12px;
				color: #808080;
			}
			$height: 40px;
			.btn {
				height: $height;
				line-height: $height;
				text-align: center;
				a {
					display: inline-block;
					width: 130px;
					height: 35px;
					line-height: 35px;
					border: 1px solid #11b57c;
					border-radius: 5px;
					color: #11b57c;
					text-decoration: none;
				}
			}
		}
		.guess {
			padding: 0 10px 105px 10px;
			border-top: 1px solid #ddd;
			background-color: #fff;
			color: #333;
			.top {
				display: flex;
				justify-content: center;
				height: 30px;
				line-height: 30px;
				padding: 10px 0;
				text-align: center;
				&:before, &:after {
					content: "";
					display: inline-block;
					width: 40px;
					height: 30px;
					background: url("/img/cart/decoration-left3xpng.png") no-repeat center center;
					background-size: 50%;
				}
				&:after {
					background-image: url("/img/cart/decoration-right3xpng.png");
				}
				h2 {
					font-size: 14px;
					font-weight: normal;
				}
			}
			.content {
				width: 100%;
				overflow: hidden;
				li {
					float: left;
					width: 50%;
					height: 230px;
					padding: 10px 15px;
					box-sizing: border-box;
					.pic {
						text-align: center;
						img {
							width:95%;
						}
					}
					.cname {
						width: 90%;
						height: 40px;
						line-height: 20px;
						font-size: 13px;
						display: -webkit-box;
						-webkit-box-orient:vertical;
						-webkit-line-clamp:2;
						text-overflow: ellipsis;
						overflow: hidden;
					}
					.other {
						height: 20px;
						line-height: 20px;
						font-size: 13px;
						color: red;
						.addCart {
							float: right;
							width: 20px;
							height: 20px;
							cursor: pointer;
							img {
								display: block;
								width: 100%;
							}
						}
					}
				}
			}
		}
		.settlement {
			position: fixed;
			bottom: 55px;
			left: 0;
			width: 100%;
			height: 50px;
			line-height: 50px;
			background-color: #fff;
			font-size: 13px;
			.choosed {
				float: left;
				width: 25%;
				$width: 18px;
				.dot {
					display: inline-block;
					width: $width;
					height: $width;
					margin-right: 5px;
					margin-left: 8px;
					vertical-align: middle;
					background: url("/img/cart/check2png.png") no-repeat center center;
					background-size: $width $width;
					cursor: pointer;
				}
			}
			.sum {
				float: left;
				width: 45%;
				text-align: center;
			}
			.goPay {
				float: left;
				width: 30%;
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
	import CartList from './CartList.vue';
	export default {
		components: { CartList },
		data() {
			return {
				guessList: [],
				allIsChoosed: false
			}
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
			},
			delNum() {
				let num = 0;
				for(let i = 0; i < this.$store.state.cartList.length; i++) {
					if(!this.$store.state.cartList[i].CommodityTag) {
						num += this.$store.state.cartList[i].State;
					}
				}
				return num;
			}
		},
		created() {
			this.$http.get(`/data/guessRecomment.json`)
			.then(({data}) => {
				this.guessList = data.Data.CommodityList;
				// console.log(this.guessList);
			})
		},
		updated() {
			for(let i = 0; i < this.$store.state.cartList.length; i++) {
				if(this.$store.state.cartList[i].CommodityTag) {
					this.allIsChoosed = true;
					return;
				}
			}
			this.allIsChoosed = false;
		},
		methods: {
			addToCart(item) {
				this.$store.commit('updateCart', item);
			},
			allChoosed(value) {
				this.$store.commit('chooseAll', value);
				this.allIsChoosed = !this.allIsChoosed;
			},
			isPay() {
				if(this.delMoney > 0) {
					this.$router.push('/goPay');
				}
			}
		}
	}
</script>