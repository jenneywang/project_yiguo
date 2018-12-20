<template>
<div>
	<div>
		<div class="dineListBox" v-for="(item, index) in newArr" :key='index'>
			<div class="bagBox">
				<img :src="item.PictureUrl">
				<span  :class="item.OtherCategoryCode">{{item.OtherCategoryName}}</span>
				<p>{{item.Hint}}{{msg}}</p>
			</div>
			<p class="title">{{item.EfruitArticleTitle}}</p>
			<div class="dineTime">
				<img src="/Dine/DiningImg/prouct260x260.png">
				<span>{{item.PublishedTimed}}</span>
			</div>
		</div>
	</div>
</div>
</template>
<style type="text/css" lang="scss" scope>
	.dineListBox {
		width: 100%;
		padding: 7px 8px;
		background-color: #fff;
		box-sizing: border-box;
		margin-top: 5px;
		border-top: 1px solid #e8e8e8;
		border-bottom: 1px solid #e8e8e8;
		.bagBox {
			width: 100%;
			position: relative;
			font-size: 12px;
			img {
				width: 100%;
			}
			span {
				position: absolute;
				left: 0;
				top: 8px;
				background-color: #ff7a3a;
				color: #fbfdfa;
				padding: 4px 8px 4px 4px;
				border-radius: 0 15px 15px 0;
			}
			.live {
				background-color: #ff6b22;
			}
			.know {
				background-color: #fdaa0b;
			}
			.food {
				background-color: #fb3d61;
			}
			p {
				position: absolute;
				right: 8px;
				top: 8px;
				color: #615f60;
				background-color: rgba(248, 248, 248, .8);
				padding: 0 4px;
				border-radius: 20px;
				&:before {
					content: '';
					display: inline-block;
					margin-right: 2px;
					width: 12px;
					height: 9px;
					background: url("/Dine/DiningImg/icon.png") no-repeat;
					background-size: 100px;
				}
			}
		}
		.title {
			width: 100%;
			font-size: 18px;
			line-height: 40px;
			margin-bottom: 8px;
			//文字超出
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
		.dineTime {
			display: flex;
			//两边对其
			justify-content: space-between;
			//垂直居中
			align-items: center;
			border-top: 1px solid #f7f7f7;
			padding-top: 7px;
			img {
				width: 30px;
				height: 30px;
				border-radius: 50%;
				overflow: hidden;
			}
			span {
				color: #888;
				font-size: 12px;
			}
		}
	}
</style>
<script type="text/javascript">
	export default {
		data() {
			return {
				List: '',
				msg: '',
				newArr: []
			}
		},
		props: ['data'],
		watch: {
			List() {
				return this.List;
			},
			data() {
				this.newArr = this.List;
				var result = this.newArr.filter((val) => {
					return val.OtherCategoryCode == this.data;
				})
				this.newArr = result;
			}
		},
		created() {
			this.$http
				.get("/Dine/DiningJson/ArticleList.json")
				.then(( {data} ) => {
					this.List = data.List;
					this.newArr = data.List;
			})
		}
	}
</script>