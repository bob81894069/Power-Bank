<template>
<div>
	<!-- 返回 -->
	<div class="return">
		<router-link to='/'>
			<p>返回</p>
		</router-link>
	</div>

	<!-- 添加代理 -->
	<router-link to="/New_proxy">
		<img class="proxy" src="../../assets/image/add_user.png">
	</router-link>

	<!-- 搜索栏 -->
	<input type="text" placeholder="搜索" v-model="search">

	<!-- 数据 -->
	<div class="data" v-for="(item, index) in searchList" :key="index">
		<div class="hang">
			<img src="../../assets/image/user.jpg">
			
			<router-link to="/Proxy_edit">
			<div>
				<ul>
					<li>{{item.name}}</li>
				</ul>
				<ul>
					<li>【代理商】</li>
					<li>总分成：</li>
					<li>{{item.split}}</li>
				</ul>
				<ul>
					<li>总收入：</li>
					<li>¥ {{item.income}}</li>
				</ul>
			</div>
			</router-link>
		</div>

		<!-- 四个按钮 -->
		<div class="btn">
			<p :class="{active: changeColor == 1}" @click="changeColor = 1">代理 (0)</p>
			<p :class="{active: changeColor == 2}" @click="changeColor = 2">设备 (0)</p>
			<p :class="{active: changeColor == 3}" @click="changeColor = 3">网点 (0)</p>

			<router-link to="">
			<p :class="{active: changeColor == 4}" @click="changeColor = 4">编辑</p>
			</router-link>
		</div>
	</div>

</div>
</template>

<script type="text/javascript">
export default {
	data() {
		return {
			changeColor: 4,
			search: "",
			list: [{
				name: "白丹",
				split: "80%",
				income: 0
			},{
				name: "球球",
				split: "80%",
				income: 0
			}]
		}
	},
	computed: {
			searchList() {
				var search = this.search
				return this.list.filter(function(item) {
					return item.name.toLowerCase().indexOf(search) !== -1
				})
			}			
		}
}
</script>

<style scoped>
/*返回样式*/
.return {
	text-align: center;
	width: 0.7rem;
	height: 0.25rem;
	padding-left: 0.2rem;
	line-height: 0.24rem;
	border-radius: 0.5rem;
	border: 0.01rem solid #A4B5DC;
	position: absolute;
	top: 0.2rem;
	left: -0.3rem;
}

/*添加代理按钮*/
.proxy {
	width: 0.26rem;
	height: 0.26rem;
	pstition: absolute;
	top: 0.2rem;
	left: 2.8rem;
}

/*搜索栏*/
input {
	width: 3rem;
	height: 0.3rem;
	margin: 0.4rem 0.1rem 0 0.1rem;
	border: 0.01rem solid #eeeeee;
	border-radius: 0.5rem;
	text-align: center;
	color: #999999;
}

/*数据样式*/
.data {
	width: 3rem;
	height: 1.4rem;
	border: 0.01rem solid #eeeeee;
	border-radius: 0.06rem;
	margin: 0.1rem auto;
}	
	.data img {
		width: 0.5rem;
		height: 0.5rem;
	}
	.data .hang {
		display: flex;
		margin: 0.2rem 0.1rem 0 0.1rem;
		background: url(../../assets/image/right_arrow.png) no-repeat 2.65rem 0.39rem;
		background-size: 0.15rem 0.15rem;
	}
		.data div ul {
			display: flex;
			margin-left: 0.15rem;
		}
		/*第一行样式*/
		.data div ul:nth-child(1) li:nth-child(1) {
			font-size: 0.15rem;
		}
		/*第二行样式*/
		.data div ul:nth-child(2) li:nth-child(1) {
			color: #2D7AFE;
		}
		.data div ul:nth-child(2) {
			margin-left: 0.1rem;
		}
		.data div ul:nth-child(2) li:nth-child(3) {
			padding-top: 0.03rem;
		}
		/*第三行样式*/
		.data div ul:nth-child(3) li:nth-child(2) {
			padding-top: 0.03rem;
		}
	/*四个按钮*/
	.btn {
		width: 2.8rem;
		margin: 0.15rem 0.1rem 0.15rem 0.1rem;
		display: flex;
		justify-content: space-between;
	}
		.btn p {
			width: 0.55rem;
			height: 0.25rem;
			background-color: #ECECEC;
			border-radius: 0.06rem;
			text-align: center;
			line-height: 0.25rem;
		}
		.btn .active {
			color: #fff;
			background-color: #2D7AFE;
		}
</style>