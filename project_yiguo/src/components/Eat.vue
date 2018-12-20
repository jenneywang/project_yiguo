<template>
<div id="dine">
	<div class="body">
		<nav>
			<div v-for="(item, index) in banners" :key="index" @click="changeData(item.LinkCode)">
				<div>
					<img :src="'/Dine/DiningImg/' + item.PictureUrl">
					<p>{{item.BannerName}}</p>
				</div>
			</div>
		</nav>
		<div class="dineList">
			<DineList :data="msg"></DineList>
		</div>
	</div>
</div>
</template>
<style type="text/css" lang="scss" scope>
	#dine {
		width: 100%;
		overflow-y: auto;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
		background-color: #f8f8f8;
		padding-bottom: 56px;
		.body {
			overflow-y: auto;
		}
		nav {
			width: 100%;
			height: 80px;
			box-sizing: border-box;
			padding: 0 8px;
			border-bottom: 1px solid #e8e8e8;
			background-color: white;
			color: #838788;
			display: flex;
			font-size: 14px;
			div {
				width: 20%;
				height: 60px;
				div {
					padding-top: 10px;
					width: 100%;
					text-align: center;
					img {
						width: 60%;
					}
				}

			}
		}
		.dineList {
			width: 100%;
		}
	}

</style>
<script type="text/javascript">
	import DineList from './DineList.vue';
	export default {
		data() {
			return {
				banners: '',
				msg: ''
			}
		},
		components: {
			DineList
		},
		methods: {
			changeData(linkCode) {
				this.$store.commit('obtainData', linkCode);
				this.msg = linkCode;
			}
		},
		created() {
			this.$http
				.get('/Dine/DiningJson/ArticleBanner.json')
				.then(( { data } ) => {
					this.banners = data.RspData.data.AdCategory37.Banners;
				})
		}
	}
</script>