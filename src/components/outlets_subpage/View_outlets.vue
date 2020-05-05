<template>
<div>
	<!-- 返回 -->
	<div class="return">
		<router-link to='/Outlets'>
			<p>返回</p>
		</router-link>
	</div>

	<!-- 部署设备 -->
	<div class="deploy">
		<router-link to='/View_details'>
			<p>部署设备</p>
		</router-link>
	</div>
	
	<!-- 顶部留空行 -->
	<i class="blank"></i>

	<!-- 数据展示 -->
	<div v-for="(item, index) in list" :key="index">
		<div class="data">
			<div>
				<ul>
					<li>设备类型号：</li>
					<li>{{item.name}}</li>
				</ul>
				
				<ul>
					<li>设备类型号：</li>
					<li>{{item.model}}</li>
				</ul>
			</div>
			
			<span>
				<p>查看</p>
				<p>扫码次数： {{item.number}}</p>
			</span>
		</div>
	</div>

</div>
</template>

<script type="text/javascript">
export default {
	data() {
		return {
			list: [{
				name: "xxxx类型号",
				model: "xxxx类型号",
				number: "1"
			},{
				name: "xxxx类型号",
				model: "xxxx类型号",
				number: "2"
			},{
				name: "xxxx类型号",
				model: "xxxx类型号",
				number: "3"
			}]
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
	color: black;
}	

/*部署设备样式*/
.deploy {
	text-align: left;
	width: 0.7rem;
	height: 0.25rem;
	padding-left: 0.08rem;
	font-size: 0.1rem;
	line-height: 0.24rem;
	border-radius: 0.5rem;
	border: 0.01rem solid #A4B5DC;
	position: absolute;
	top: 0.2rem;
	right: -0.2rem;
	color: black;
}

/*顶部留空样式*/
.blank {
	display: block;
	width: 100%;
	height: 0.6rem;
}

/*数据展示*/
.data {
	width: 3rem;
	height: 0.7rem;
	border: 0.01rem solid #eeeeee;
	border-radius: 0.06rem;
	padding: 0.1rem;
	margin: 0 auto;
	margin-top: 0.1rem;
	display: flex;
	justify-content: space-between;
}
	.data div ul {
		display: flex;
		line-height: 0.25rem;
	}
		.data span {
			margin: auto 0;
		}
		.data span p {
			line-height: 0.2rem;
			text-align: center;
		}
		.data span p:nth-child(1) {
			background-color: #2D7AFE;
			color: #fff;
			width: 0.5rem;
			height: 0.2rem;
			border-radius: 0.5rem;
			font-size: 0.11rem;
		}
		.data span p:nth-child(2) {
			color: #888888;
			font-size: 0.08rem;
		}
</style>