<template>
<router-link class="item" tag="div" :to="'/detail/' + data.id">
	<div class="item-container">
		<img :src="'/img/products/jinkou_fruit/' + data.src" alt="">
		<div class="content">
			<p>{{data.title}}</p>
			<p>{{data.discount}}</p>
			<p>
				<span class="price">{{'￥' + data.price}}</span>
				<span>{{'/' +data.number}}</span>
			</p>
		</div>
	</div>
</router-link>
</template>
<!-- 样式 -->
<style type="text/css" lang="scss">
// 引入库文件
@import '../base.scss';
.item {
	padding: 10px;
	padding-bottom: 0;
	color: black;
	float: left;
	width: 25%;
	.item-container {
		img {
			width: 100%;
			height: 100px;
			display: block;
		}
		.content p {
			display: block;
			height: 20px;
			font-size: 12px;
			color: #666;
			text-align: center;
		}
		.content p:nth-child(2) {
			color: $activeColor;
			border-radius: 15px;
			transform: scale(.7);
			border: 1px solid  $activeColor;
		}
		.price {
			color: #FB3D3D;
		}
	}
}
</style>
<script type="text/javascript">
export default {
	// 子组件接收数据
	props: ['data'],
}
</script>