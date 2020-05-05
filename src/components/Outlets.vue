<template>
<div class="outlets">
	<!-- 菜单栏 -->
	<div class="Menu">
		<router-link to="/New_outlets">
			<span>新增网点</span>
		</router-link>
		<p class="changeArr" v-for="(item, index) in list" :key="index" :name="item.name" @click="currtName" :class="activeName == item.name ? 'active' : ''">
			{{item.name}}
		</p>

		<input type="tex" placeholder="搜索网点" v-model="search">
	</div>
	
	<!-- for循环后数据展示 -->
	<!-- 显示全部数据 -->
	<div v-if="activeName==null">
		<div class="data" v-for="(item, index) in searchList" :key="index">		
				<!-- 第一行 -->
				<div class="row_one">
					<img src="../assets/image/photo.png">

					<ul>
						<li>{{item.company}}</li>
						<li>所属: <span>{{item.proxy}}</span></li>
						<li>总收益: <span>{{item.income}}</span></li>
						<li>总扫码: <span>{{item.scan}}</span></li>
					</ul>

					<img src="../assets/image/right_arrow.png">
				</div>
				
				<!-- 第二行 -->
				<div class="row_two">
					<div>
						<p>{{item.share_ratio}}</p>
						<p>分成比例</p>
					</div>

					<div>
						<p>{{item.device}}</p>
						<p>设备数</p>
					</div>
				</div>

				<!-- 第三行 -->
				<div class="row_three">
					<div class="buttonArr">
						<router-link to="/Money_set">
							<p :class="{active: changeColor == 1}" @click="changeColor = 1">价格设置</p>
						</router-link>

						<router-link to="/View_outlets">
							<p :class="{active: changeColor == 2}" @click="changeColor = 2">查看设备</p>
						</router-link>

						<router-link to="/View_binding">
							<p :class="{active: changeColor == 3}" @click="changeColor = 3">扫码绑定</p>
						</router-link>

						<router-link to="Edit_outlets">
							<p :class="{active: changeColor == 4}" @click="changeColor = 4">编辑</p>
						</router-link>
					</div>
				</div>
	
		</div>
	</div>

	<!-- 按钮控制按需显示展示数据 -->
	<div v-if="activeName!==null">
		<div v-for="(item, index) in list2" :key="index">
			<div class="data" v-if="activeName == item.name">
				<!-- 第一行 -->
				<div class="row_one">
					<img src="../assets/image/photo.png">

					<ul>
						<li>{{item.company}}</li>
						<li>所属: <span>{{item.proxy}}</span></li>
						<li>总收益: <span>{{item.income}}</span></li>
						<li>总扫码: <span>{{item.scan}}</span></li>
					</ul>

					<img src="../assets/image/right_arrow.png">
				</div>
				
				<!-- 第二行 -->
				<div class="row_two">
					<div>
						<p>{{item.share_ratio}}</p>
						<p>分成比例</p>
					</div>

					<div>
						<p>{{item.device}}</p>
						<p>设备数</p>
					</div>
				</div>

				<!-- 第三行 -->
				<div class="row_three" v-if="activeName == item.name">
					<div class="buttonArr">
						<router-link to="">
							<p :class="{active: changeColor == 1}" @click="changeColor = 1">价格设置</p>
						</router-link>

						<router-link to="/View_outlets">
							<p :class="{active: changeColor == 2}" @click="changeColor = 2">查看设备</p>
						</router-link>

						<router-link to="/View_binding">
							<p :class="{active: changeColor == 3}" @click="changeColor = 3">扫码绑定</p>
						</router-link>

						<router-link to="/Edit_outlets">
							<p :class="{active: changeColor == 4}" @click="changeColor = 4">编辑</p>
						</router-link>
					</div>
				</div>

			</div>	
		</div>
	</div>
	
	<!-- 底部菜单栏 -->
	<div class="menu" id="abc">
		<router-link to='/'>
			<img src="../assets/image/home.png">
		</router-link>

		<router-link to='/Order'>
			<img src="../assets/image/order.png">
		</router-link>

		<router-link to='/Device'>
			<img src="../assets/image/device.png">
		</router-link>

		<router-link to='/Outlets'>
			<img src="../assets/image/outlets_2.png">
		</router-link>

		<router-link to='/User'>
			<img src="../assets/image/user.png">
		</router-link>	
	</div>

</div>
</template>

<script type="text/javascript">
/* eslint-disable */
export default {
	data() {
		return {
			changeColor: 4,
			search: '',
			activeName: null,
			list: [
				{name: "我的网点"},
				{name: "下级网点"}
			],
			list2: [{
				name: "我的网点",
				company: "油松大夏A座",
				proxy: "球球",
				income: "¥0.00",
				scan: 0,
				share_ratio: "80.0%",
				device: 0
			},{
				name: "我的网点",
				company: "油松大夏B座",
				proxy: "球球",
				income: "¥0.00",
				scan: 0,
				share_ratio: "90.0%",
				device: 0
			},{
				name: "下级网点",
				company: "油松大夏C座",
				proxy: "毛毛",
				income: "¥0.00",
				scan: 0,
				share_ratio: "60.0%",
				device: 0
			},{
				name: "下级网点",
				company: "油松大夏D座",
				proxy: "毛毛",
				income: "¥0.00",
				scan: 0,
				share_ratio: "70.0%",
				device: 0
			}]
		}
	},
	methods: {
		currtName() {
			if (event.target.tagName == "P") {
				var activeName = event.target.getAttribute("name")
				console.log(event.target)
				this.activeName = activeName
			}			
		}
	},
	computed: {
		searchList() {
			var search = this.search

			if (search) {
				return this.list2.filter(function(item) {
					return Object.keys(item).some(function(key) {
						return String(item[key]).toLowerCase().indexOf(search) > -1
					})
				})
			}
			
			return this.list2
		}
	}
}
</script>

<style scoped>
/*菜单栏*/
.Menu {
	display: inline-flex;
	width: 2.9rem;
	margin: 0.15rem 0rem 0.15rem 0.15rem;
}
	.Menu a {
		text-align:center;
		width: 0.5rem;
		height: 0.25rem;
		background-color: #D73C4E;
		border-radius: 0.07rem;
		color: #fff;
		font-size: 0.09rem;
		margin-right: 0.08rem;
		line-height: 0.25rem;
	}
	.changeArr {
		text-align:center;
		width: 0.5rem;
		height: 0.25rem;
		line-height: 0.25rem;
		background-color: #F7F8FC;
		border-radius: 0.07rem;
		color: #787878;
		font-size: 0.09rem;
		margin-right: 0.08rem;
	}
		.active {
			background-color: #2D7AFE;
			color: #fff;
		}
	.Menu input {
		width: 1.14rem;
		border: 0.01rem solid #F1F1F1;
		border-radius: 0.5rem;
		font-size: 0.10rem;
		padding-left: 0.25rem;
		color: #C6C5C5;
		background: url('../assets/image/search_for.png') 0.05rem;
		background-size: 0.15rem 0.15rem;
		background-repeat: no-repeat;
	}

/*for循环后数据展示*/
.data {
	width: 3rem;
	height: 2rem;
	border: 0.01rem solid #eeeeee;
	border-radius: 0.1rem;
	margin: 0 auto;
	margin-bottom: 0.15rem;
}	
	/*第一行样式*/
	.row_one {
		width: 3rem;
		height: 0.7rem;
		margin-top: 0.2rem;
		display: inline-flex;
		font-size: 0.11rem;
	}
		.row_one img {
			width: 0.6rem;
			height: 0.6rem;
			margin: 0.04rem;
		}
			.row_one li:nth-child(1) {
				font-size: 0.16rem;
				font-weight: 600;
			}
			.row_one li:nth-child(2) {
				color: #3A81FE;
			}
				.row_one li span {
					color: #9D9D9D;
					margin-left: 0.05rem;
				}
			.row_one li:nth-child(3) span {
				color: #D73D4D;
			}
		.row_one img:nth-child(3) {
			width: 0.15rem;
			height: 0.15rem;
			top: 0.25rem;
			margin-left: 1.2rem;
		}
	/*第二行样式*/
	.row_two {
		width: 3rem;
		height: 0.2rem;
		display: flex;
		justify-content: space-around;
		text-align: center;
		margin: 0.1rem 0;
		color: #B4B4B4;
		font-size: 0.11rem;
	}
		.row_two div p:nth-child(1) {
			color: #D73D4D;
		}
	/*第三行样式*/
	.row_three {
		width: 2.8rem;
		height: 0.3rem;
		margin: 0 auto;
		margin-top: 0.3rem;		
	}	
		.buttonArr {
			display: flex;
			justify-content: space-around;
		}
		.buttonArr p {
			padding: 0.06rem 0.08rem;
			background-color: #F7F8FC;
			border-radius: 0.08rem;
			color: #3C3C3C;
			font-size: 0.11rem;
		}
		.buttonArr .active {
			background-color: #2D7AFE;
			color: #fff;
		}

/*菜单栏*/
.menu {
	position: fixed;
	bottom: 0;
	width: 100%;
	height: 0.5rem;
	border-top: 0.01rem solid #eeeeee;
	display: flex;
	justify-content: space-around;
	background-color: #fff;
}	
	/*底部遮挡部分空出50px*/
	.outlets {
		padding-bottom: 0.5rem;
	}
	.menu img {
		width: 0.4rem;
		height: 0.4rem;
		top: 0.05rem;
	}
</style>