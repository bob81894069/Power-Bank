<template>
<div class="Order">
	<!-- 搜索栏 -->
	<div class="search">
		<select>
			<option value="我的订单">我的订单</option>
			<option value="下级订单">下级订单</option>
		</select>

		<div>
			<span>▼</span><span>|</span>
		</div>
		
		<!-- 1.搜索功能双向绑定获取数据 -->
		<input type="text" name="text" placeholder="搜索订单" v-model="search">
	</div>

	<!-- 四个按钮 -->
	<div class="btn">
	<!-- 按钮绑currtName方法获取name值赋值到activeName来比较item.name来改变颜色，以及下面需要显示哪些数据 -->
	<div class="buttonsArr" @click="currtName()">
		<p :class="activeName == null ? 'active' : '' ">全部</p>

		<p v-for="(item, index) in list2" :key="index" :name="item.name" :class="activeName == item.name ? 'active' : ''">
			{{item.name}}
		</p>
	</div>
	</div>

	<!-- 3种手机状态 -->
	<!-- 页面按钮控制显示 -->
	<span v-if="activeName!=null">
		<div v-for="(item, index) in list" :key="index">
			<div class="working" v-if="activeName==item.status">	
				<ul>
					<li class="strong">XXX网点</li>

					<!-- 设备详情跳转路由 -->
					<router-link to="/Order_details">
						<li class="work" :class="{work:item.status == '租借中',standby:item.status == '已完成',deployed: item.status == '已撤销'}">{{item.status}}</li>
					</router-link>

				</ul>

				<ul>
					<li>订单编号</li>
					<li>{{item.Ordernumbering}}</li>
				</ul>

				<ul>
					<li>使用时间</li>
					<li>{{item.time}}</li>
				</ul>

				<ul>
					<li>支付方式</li>
					<li>{{item.pay}}</li>
				</ul>

				<ul>
					<li>代理</li>
					<li>{{item.proxy}}</li>
				</ul>

				<ul>
					<li>设备编号</li>
					<li>{{item.Devicenumbering}}</li>
				</ul>

				<ul>
					<li>金额</li>
					<li class="money">{{item.money}}</li>
				</ul>
			</div>
		</div>		
	</span>
	
	<!-- 页面全部显示 -->
	<span v-if="activeName==null">
		<!-- 2.搜索功能循环到searchList里面 -->
		<div class="working" v-for="(item, index) in searchList" :key="index">
		<ul>
			<li class="strong">XXX网点</li>

			<!-- 设备详情跳转路由 -->
			<router-link to="/Order_details">
				<li class="work" :class="{work:item.status == '租借中', standby:item.status == '已完成', deployed: item.status == '已撤销'}">{{item.status}}</li>
			</router-link>
		</ul>

		<ul>
			<li>订单编号</li>
			<li>{{item.Ordernumbering}}</li>
		</ul>

		<ul>
			<li>使用时间</li>
			<li>{{item.time}}</li>
		</ul>

		<ul>
			<li>支付方式</li>
			<li>{{item.pay}}</li>
		</ul>

		<ul>
			<li>代理</li>
			<li>{{item.proxy}}</li>
		</ul>

		<ul>
			<li>设备编号</li>
			<li>{{item.Devicenumbering}}</li>
		</ul>

		<ul>
			<li>金额</li>
			<li class="money">{{item.money}}</li>
		</ul>
	</div>
	</span>
	
	<!-- 底部菜单栏 -->
	<div class="menu" id="abc">
		<router-link to='/'>
			<img src="../assets/image/home.png">
		</router-link>

		<router-link to='/Order'>
			<img src="../assets/image/order_2.png">
		</router-link>

		<router-link to='/Device'>
			<img src="../assets/image/device.png">
		</router-link>

		<router-link to='/Outlets'>
			<img src="../assets/image/outlets.png">
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
	data () {
		return {
			list: [{
				id: 1,
				status: '租借中',
				Ordernumbering: 12345029115,
				time: '2019.08.22 12:30',
				pay: '微信支付',
				proxy: 'xx',
				Devicenumbering: 1234515,
				money: '¥8.00'
			},{
				id: 2,
				status: '已完成',
				Ordernumbering: 12345029116,
				time: '2019.08.22 12:30',
				pay: '微信支付',
				proxy: 'xx',
				Devicenumbering: 1234516,
				money: '¥8.00'
			},{
				id: 3,
				status: '已撤销',
				Ordernumbering: 12345029117,
				time: '2019.08.22 12:30',
				pay: '微信支付',
				proxy: 'xx',
				Devicenumbering: 1234517,
				money: '¥8.00'
			}],
			list2: [
				{name: "租借中"},
				{name: "已完成"},
				{name: "已撤销"}
			],
			activeName: null,
			search: ""
		}
	},
	methods: {
		currtName() {
			// 判断元素是否等于P标签
			// 按钮点击时获取name的值最后把值赋值到新的activeNmae数据里面去
			if (event.target.tagName == "P") {
				var activeName = event.target.getAttribute("name")
				console.log(event.target)
				this.activeName = activeName
			}	
		}
	},
	computed: {
		// 搜索功能模块
		// 先将list里面到数据遍历出来，filter()方法检查数组中符合条件的元素，Object.keys(item)枚举出数组，再交some()函数去判断indexOf(serach)的值，最后将符合的值返回给list
		searchList: function() {
   		var search = this.search

         if (search) {
				return this.list.filter(function(item) {
					return Object.keys(item).some(function(key) {
						return String(item[key]).toLowerCase().indexOf(search) > -1
					})
				})
			}

			return this.list
		}
	}
} 
</script>

<style scoped>
/*搜索栏*/
.search {
	width: 2.8rem;
	height: 0.3rem;
	border-radius: 0.5rem;
	border: 0.01rem solid #eeeeee;
	margin: 0.1rem auto;
	display: flex;
	justify-content: space-between;
}
	.search select {
		width: 0.65rem;
		height: 0.28rem;
		margin-left: 0.08rem;
		appearance: textfield;
		border: none;
	}
	/*三角形样式*/
	.search div {
		padding-top: 0.08rem;
		flex-grow: 1;
		font-size: 0.08rem;
		width: 0.25rem;
	}
		.search div span {
			margin-right: 0.1rem;
		}
		.search div span:nth-child(2) {
			color: #CCCCCC;
		}
	/*搜索栏样式*/
	.search input {
		padding-left: 0.24rem;
		flex-grow: 2;
		font-size: 0.11rem;
		color: #CCCCCC;
		background: url('../assets/image/search_for.png') 0.01rem;
		background-size: 0.2rem 0.2rem;
		background-repeat: no-repeat;

	}

/*四个按钮*/
.btn {
	margin-left: 0.3rem;
	margin-top: 0.25rem;
}	
	.btn div {
		display: flex;
		margin-bottom: 0.15rem;
	}
	/*原本的样式*/
	.buttonsArr p {
		background-color: #F7F8FC;
		padding: 0.07rem 0.01rem;
		margin-right: 0.07rem;
		border-radius: 0.08rem;
		width: 0.55rem;
		text-align: center;
		color: #787879;
	}
	/*选中后的颜色*/
	.buttonsArr .active {
		background-color: #2D7AFE;
		color: #fff;
	}

/*3种手机状态样式*/
.working {
	width: 3rem;
	height: 2.65rem;
	border: 0.01rem solid #eeeeee;
	border-radius: 0.1rem;
	margin: 0 auto;
	margin-bottom: 0.15rem;
}
	.working ul {
		display: flex;
		justify-content: space-between;
		margin: 0.18rem 0.12rem 0.12rem 0.12rem;
		color: #787676;
	}	
		/*第一行样式*/
		.working .strong {
			font-weight: 600;
			color: #333333;
		}
		.money {
			font-size: 0.16rem;
			color: #D73D4D;
			font-weight: 500;
		}
		/*租借中颜色*/
		.work{
			padding: 0.05rem;
			border-radius: 0.5rem;
			width: 0.6rem;
			height: 0.2rem;
			line-height: 0.1rem;
			text-align: center;
			background-color: #2D7AFE;
			color: #fff;
			font-size: 0.11rem;
		}
		/*已完成颜色*/
		.standby {
			padding: 0.05rem;
			border-radius: 0.5rem;
			width: 0.6rem;
			height: 0.2rem;
			line-height: 0.1rem;
			text-align: center;
			background-color: #32B16B;
			color: #fff;
			font-size: 0.11rem;
		}
		/*未部署颜色*/
		.deployed {
			padding: 0.05rem;
			border-radius: 0.5rem;
			width: 0.6rem;
			height: 0.2rem;
			line-height: 0.1rem;
			text-align: center;
			background-color: #D73C4E;
			color: #fff;
			font-size: 0.11rem;
		}
		/*●圆点颜色*/
		.working ul:nth-child(2) li:nth-child(1):before {
			content: "● ";
			color: #6DD5DC;
		}
		.working ul:nth-child(3) li:nth-child(1):before {
			content: "● ";
			color: #BBCCE1;
		}
		.working ul:nth-child(4) li:nth-child(1):before {
			content: "● ";
			color: #AD8DF0;
		}
		.working ul:nth-child(5) li:nth-child(1):before {
			content: "● ";
			color: #F18C8C;
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
	.Order {
		padding-bottom: 0.5rem;
	}
	.menu img {
		width: 0.4rem;
		height: 0.4rem;
		top: 0.05rem;
	}
</style>