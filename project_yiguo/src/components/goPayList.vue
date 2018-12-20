<template>
	<div  v-if="!data.CommodityTag" class="clist">
		<div class="pic">
			<img :src="data.SmallPic">
		</div>
		<div class="content">
			<div class="top">
				<div class="cname">{{data.CommodityName}}</div>
			</div>
			<div class="bottom">
				<span class="price">￥{{data.SellPrice.toFixed(2)}}</span>
				<div class="ope">
					<div class="num">数量 {{data.State}}</div>
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
				$height: 18px;
				.ope {
					position: absolute;
					right: 15px;
					bottom: 0px;
					height: $height;
					display: flex;
					.num {
						width: 2*$height;
						height: $height;
						line-height: $height;
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
		}
	}
</script>