<template>
<div id="City">
	<div class=" face">
		<p>选中城市</p>
		<h6>{{face}}</h6>
	</div>
	<div class="historyCity">
		<p>历史记录</p>
		<div>
			<ul>
				<li v-for="(item, index) in resultArr" @click="getCityName('',item)" :key="index">
					<span>{{item}}</span>
				</li>
			</ul>
		</div>
	</div>
	<div class="hotCity">
		<p>热门城市</p>
		<ul>
			<li v-for="(item, index) in hotCity" :key="index"  @click="upList('City', item.AreaName)">
				<span>{{item.AreaName}}</span>
			</li>
		</ul>
	</div>
	<div class="City">
		<div v-for="(item, value) in cityList" :key="this">
			<h5>{{item.FirstLetter}}</h5>
			<ul>
				<li v-for="(item, value) in item.CityList" :key="this"  @click="getCityName('',item.AreaName)">{{item.AreaName}}</li>
			</ul>
		</div>
	</div>
	<div class="tamplate" :hidden="isChecked">
		<div class="footer" @click="tempShow"></div>
		<div class="container">
			<p>{{nameCity}}</p>
			<div>
				<ul>
					<li v-for="(item, index) in smallCity" @click="getCityName(item.AreaName,nameCity)">
						{{item.AreaName}}
					</li>
				</ul>
			</div>
		</div>
	</div>
</div>
</template>
<style type="text/css" lang="scss" scope>
	#City {
		width: 100%;
		height: 100%;
		overflow: auto;
		position: fixed;
		z-index: 999;
		left: 0;
		top: 0;
		background-color: #f8f8f8;
		.face {
			width: 100%;
			padding: 0 8px;
			font-size: 14px;
			box-sizing: border-box;
			overflow: hidden;
			p {
				line-height: 38px;
			}
			h6 {
				width: 33.333%;
				margin-bottom: 8px;
				text-align: center;
				height: 26px;
				line-height: 26px;
				background-color: white;
				border-radius: 4px;
				border: 1px solid #ddd;
				color: #333;
			}
		}
		.hotCity {
			width: 100%;
			padding: 0 8px;
			font-size: 14px;
			box-sizing: border-box;
			overflow: hidden;
			p {
				line-height: 38px;
			}
			ul {
				width: 100%;
				li {
					width: 33.33333%;
					float: left;
					list-style: none;
					margin-bottom: 8px;
					text-align: center;
					span {
						display: inline-block;
						width: 80px;
						height: 26px;
						line-height: 26px;
						background-color: white;
						border-radius: 4px;
						border: 1px solid #ddd;
						color: #333;
					}
				}
			}
		}
		.tamplate {
			width: 100%;
			height: 100%;
			background-color: rgba(0, 0, 0, .3);
			position: fixed;
			left: 0;
			right: 0;
			top: 0;
			z-index: 1000;
			.footer {
				width: 100%;
				height: 50%;
			}
			.container {
				width: 100%;
				height: 50%;
				font-size: 14px;
				position: absolute;
				left: 0;
				right: 0;
				bottom: 0;
				background-color: white;
				color: #333;
				p {
					line-height: 30px;
					height: 30px;
					width: 100%;
					background-color: white;
					padding-left: 8px;
					position: absolute;
					top: 0;
					left: 0;
				}
				div {
					width: 100%;
					height: 100%;
					overflow: auto;
					ul {
						width: 100%;
						margin-top: 30px;
						li {
							height: 30px;
							line-height: 30px;
							font-size: 12px;
							padding: 0 16px;
							border-top: 1px solid #ddd;
						}
					}
				}

			}
		}
		.historyCity {
			width: 100%;
			padding: 0 8px;
			font-size: 14px;
			box-sizing: border-box;
			overflow: hidden;
			p {
				line-height: 38px;
			}
			ul {
				width: 100%;
				li {
					width: 45%;
					float: left;
					list-style: none;
					margin-bottom: 8px;
					text-align: center;
					span {
						display: inline-block;
						width: 90%;
						height: 26px;
						line-height: 26px;
						background-color: white;
						border-radius: 4px;
						border: 1px solid #ddd;
						color: #333;
					}
				}
			}
		}
		.City {
			width: 100%;
			h5 {
				color: #385c9a;
				font-size: 14px;
				padding-left: 8px;
				height: 30px;
				line-height: 30px;
			}
			ul {
				background-color: white;
				li {
					display: inline-block;
					width: 33.3333%;
					text-align: center;
					line-height: 30px;
					height: 30px;
					font-size: 12px;
				}
			}
		}
	}
</style>
<script type="text/javascript">
	export default {
		data() {
			return {
				hotCity: '',
				cityList: '',
				smallCity: '',
				nameCity: '',
				isChecked: true,
				resultArr: [],
				face: ''
			}
		},
		methods: {
			upList(name, city) {
				this.nameCity = city;
				this.isChecked = false;
				this.$http
					.get('/Dine/DiningJson/' + name + '.json')
					.then(( {data} ) => {
						this.smallCity = data.Data.DistrictList;
						console.log(data.Data.DistrictList);
					})
			},
			tempShow() {
				this.isChecked = true;
			},
			getCityName(cityName, city) {
				this.isChecked = true;
				var thisArr = this.resultArr;
				if (city.indexOf('市') != -1) {
					var str = city;
					return;
				}
				var str = city+ '市' +cityName;
				this.face = str;
				if(thisArr.length > 3) {
					thisArr.length = 3;
				}
				thisArr.unshift(str);
				this.resultArr = thisArr;
			}
		},
		created() {
			this.$http
				.get('/Dine/DiningJson/City.json')
				.then(( {data} ) => {
					this.hotCity = data.Data.HotCityList[0].CityList;
					this.cityList = data.Data.CityList;
					console.log(data.Data.CityList);
				})
		}
	}
</script>