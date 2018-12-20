<template>
<div>
	<div class="login-top">
		<div class="shezi"></div>
		<div class="user">
			<img src="/img/Mine/no-pic.jpg" alt="">
			<span>张三</span>
		</div>
		<ul>
			<li><p>0.00</p><p>账户余额</p></li>
			<li><p>4</p><p>优惠券</p></li>
			<li><p>100</p><p>悠币</p></li>
		</ul>
	</div>
	<ul class="login-content">
		<router-link tag="li" v-for="(item, index) in list" :key="index" to="/cart">
			<img :src="'/img/Mine/' + item.img" alt="">
			<p>{{item.text}}</p>
		</router-link>
	</ul>
	<div class="login-footer">
		<ul class="message">
			<router-link tag="li" v-for="(item, index) in message" :key="index" to="/login">
				<img :src="'/img/Mine/' + item.img" alt="">
				<p>{{item.text}}</p>
			</router-link>
		</ul>
	</div>
</div>
</template>
<style type="text/css" lang="scss" scoped>
* {
	list-style: none;
}
.login-top {
	height: 190px;
	background-image: url(/img/Mine/bgimg.jpg);

	.shezi {
		height: 40px;

	}
	.user {
		height: 60px;
		line-height: 60px;
		img {
			width: 56px;
			height: 56px;
			margin-left: 20px;
			border-radius: 50%;
			border: 2px solid #fff;
		}
		span {
			height: 60px;
			line-height: 60px;
			padding-left: 10px;
			font-size: 16px;
		}
	}
	ul {
		margin-top: 40px;
		height: 50px;
		text-align: center;
		color: white;
		background: rgba(255,255,255,.1);
		// display: flex;
		li {
			float: left;
			width: 33%;
			height: 50px;
			font-size: 12px;
			border-right: 1px dashed rgba(255,255,255,.5);
			p {
				// height: 50%;
				line-height: 25px;
			}
		}
	}
}
.login-content {
	width: 100%;
	height: 60px;	
	li {
		float: left;
		text-align: center;
		width: 20%;
		height: 60px;	
		padding: 15px 0 5px 0;
		img {
			width: 22px;
			height: 20px;
		}
		p {	
			height: 20px;
			padding-top: 5px;
			font-size: 12px;
			color: #333;
		}
	}
}
.login-footer {
	background-color: #f4f4f4;
	height: 300px;
	padding-top: 15px;
	.message {
		width: 100%;
		height:160px;
		background-color: white;
		li {
			float: left;
			text-align: center;
			width: 25%;
			height: 59px;	
			padding: 15px 0 5px 0;
			border-bottom: 1px solid #f4f4f4;

			img {
				width: 22px;
				height: 20px;
			}
			p {	
				height: 20px;
				padding-top: 5px;
				font-size: 12px;
				color: #333;
			}
		}
	}
	
}
	
</style>
<script type="text/javascript">
export default {
	data() {
		return {
			list: [
				{ img: 'unpaid.png', text: '待支付', id: '1' },
				{ img: 'take.png', text: '带收货', id: '2' },
				{ img: 'evaluate.png', text: '评价送悠币', id: '3' },
				{ img: 'changing.png', text: '在线退换货', id: '4' },
				{ img: 'allorder.png', text: '全部订单', id: '5' }
			],
			message: [
				{ img: 'address@3.png', text: '收货地址', id: '6' },
				{ img: 'yellowcard@3x.png', text: '充值卡', id: '7' },
				{ img: 'delivery@3x.png', text: '提货券', id: '7' },
				{ img: 'help@3x (1).png', text: '帮助中心', id: '8' },
				{ img: 'service@3x.png', text: '客服', id: '8' }
			],

		}
	}
}
</script>