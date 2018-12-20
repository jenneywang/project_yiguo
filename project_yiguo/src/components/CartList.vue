<template>
	<div class="clist">
		<div class="pic">
			<span class="dot" :style="{backgroundImage: 'url(/img/cart/' + (data.CommodityTag ? 'check1png.png' : 'check2png.png') + ')'}" @click="choosed(data)"></span>
			<img :src="data.SmallPic">
		</div>
		<div class="content">
			<div class="top">
				<div class="cname">{{data.CommodityName}}</div>
				<div class="delete" @click="delMsg(data)"></div>
			</div>
			<div class="bottom">
				<span class="price">￥{{data.SellPrice.toFixed(2)}}</span>
				<span class="oldPrice" v-show="data.SellPrice != data.OriginalPrice">{{data.OriginalPrice}}</span>
				<div class="ope">
					<div class="cut" @click="cutNum(data)" :style="{backgroundImage: 'url(/img/cart/' + (data.State > 1 ? 'cut2png.png' : 'cut1png.png') + ')'}"></div>
					<div class="num">{{data.State}}</div>
					<div class="add" @click="addNum(data)"></div>
				</div>
			</div>
		</div>
	</div>
</template>
<style type="text/css" lang="scss" scoped>
	.clist {
		display: flex;
		height: 100px;
		padding-top: 8px;
		border-top: 1px solid #ddd;
		background-color: #fff;
		margin-bottom: 10px;
		.pic {
			width: 150px;
			padding-top: 3px;
			position: relative;
			img {
				display: flex;
				width: 55%;
				margin-left: 40px;
			}
			$width: 18px;
			.dot {
				position: absolute;
				left: 10px;
				top: 38px; 
				width: $width;
				height: $width;
				background: url("/img/cart/check2png.png") no-repeat center center;
				background-size: $width $width;
				cursor: pointer;
			}
		}
		.content {
			flex: 1;
			.top {
				position: relative;
				height: 32px;
				margin-bottom: 35px;
				.cname {
					width: 70%;
					font-size: 13px;
				}
				.delete {
					position: absolute;
					top: 10px;
					right: 15px;
					width: 15px;
					height: 15px;
					background: url("/img/cart/delpng.png") no-repeat;
					background-size: contain;
					cursor: pointer;
				}
			}
			.bottom {
				height: 20px;
				line-height: 20px;
				position: relative;
				.price {
					margin-right: 10px;
					color: red;
					font-size: 13px;
				}
				.oldPrice {
					color: #ddd;
					text-decoration: line-through;
					font-size: 12px;
				}
				$height: 18px;
				.ope {
					position: absolute;
					right: 15px;
					bottom: 0px;
					height: $height;
					display: flex;
					.cut {
						width: $height;
						height: $height;
						border: 1px solid #ccc;
						border-right: none;
						border-radius: 2px;
						background: url("/img/cart/cut1png.png") no-repeat center;
						background-size: 60%;
						cursor: pointer;
					}
					.add {
						width: $height;
						height: $height;
						border: 1px solid #ccc;
						border-left: none;
						border-radius: 2px;
						background: url("/img/cart/add2png.png") no-repeat center;
						background-size: 60%;
						cursor: pointer;
					}
					.num {
						width: 2*$height;
						height: $height;
						line-height: $height;
						border: 1px solid #ccc;
						text-align: center;
						font-size: 12px;
					}
				}
			}
		}
	}
</style>
<script type="text/javascript">
	export default {
		props: ['data'],
		data() {
			return {
				// data
			}
		},
		methods: {
			cutNum(data) {
				this.$store.commit('cutNum', data);
			},
			addNum(data) {
				this.$store.commit('addNum', data);
				if(data.CommodityTag) {
					this.$store.commit('chooseDot', data);
				}
			},
			delMsg(data) {
				data.checked = false;
				this.$store.commit('delMsg', data);
			},
			choosed(data) {
				this.$store.commit('chooseDot', data);
				//true表示取消勾选
			}
		}
	}
</script>