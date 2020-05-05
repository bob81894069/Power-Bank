<template>
<div>
	<!-- 返回 -->
	<div class="return">
		<router-link to='/Outlets'>
			<p>返回</p>
		</router-link>
	</div>

	<!-- 照片 -->
	<img src="../../assets/image/camera_2.png" class="image">
	<img src="../../assets/image/camera_3.png" class="image2">

	<!-- 数据 -->
	<div class="data">
		<ul>
			<li>网点名称：</li>
			<li>油松大夏A座</li>
		</ul>

		<ul>
			<li>网点类型：</li>
			<li>咖啡厅</li>
		</ul>

		<ul>
			<li>所属代理：</li>
			<li>白丹</li>
		</ul>

		<ul>
			<li>网点地址：</li>
			<li>油松大夏</li>
		</ul>
	</div>

	<div class="data2">
		<ul>
			<li>已部署设备</li>
			<li>(3)</li>
			<li>查看</li>
		</ul>

		<ul>
			<li>网点收益</li>
			<li>(¥8.00)</li>
			<li>查看</li>
		</ul>

		<ul>
			<li>已部署类型：</li>
			<li></li>
		</ul>
	</div>

	<!-- 两个按钮 -->
	<div class="btn">
		<p>删除网点</p>
		<p>修改网点</p>
	</div>	
</div>
</template>

<script type="text/javascript">
export default {
	data() {
		return {

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
	position: absolute;
	top: 0.2rem;
	left: -0.3rem;
	color: black;
	z-index: 999;
	background-color: #fff;
}

/*照片*/
.image {
	width: 100%;
	height: 1.8rem;
}
.image2 {
	width: 0.3rem;
	height: 0.3rem;
	position: absolute;
	top: 1.45rem;
	left: 2.8rem;
}

/*数据样式*/
.data {
	width: 3.18rem;
	height: 1.3rem;
	border: 0.01rem solid #eeeeee;
	border-radius: 0.06rem;
	margin: 0.1rem auto;
}
	.data ul {
		display: flex;
		margin: 0.12rem;
	}

.data2 {
	width: 3.18rem;
	height: 1.3rem;
	border: 0.01rem solid #eeeeee;
	border-radius: 0.06rem;
	margin: 0.1rem auto;
}
	.data2 ul {
		display: flex;
		justify-content: space-between;
		margin: 0.12rem;
	}
		.data2 ul li{
			color: #888888;
			line-height: 0.25rem
		}
		.data2 ul li:nth-child(2) {
			flex-grow: 1;
			color: #2D7AFE;
			margin-left: 0.05rem;
		}
	/*查看按钮*/
	.data2 ul:nth-child(1) li:nth-child(3), ul:nth-child(2) li:nth-child(3) {
		color: #fff;
		background-color: #2D7AFE;
		width: 0.55rem;
		height: 0.2rem;
		line-height: 0.2rem;
		text-align: center;
		font-size: 0.1rem;
		border-radius: 0.5rem;
		margin-top: 0.03rem;
	}

.btn {
	display: flex;
	justify-content: space-around;
	margin-top: 0.3rem;
}
	.btn p:nth-child(1) {
		background-color: #D73C4E;
		color: #fff;
		width: 0.65rem;
		height: 0.25rem;
		text-align: center;
		line-height: 0.25rem;
		border-radius: 0.09rem;
	}
	.btn p:nth-child(2) {
		background-color: #2D7AFE;
		color: #fff;
		width: 0.65rem;
		height: 0.25rem;
		text-align: center;
		line-height: 0.25rem;
		border-radius: 0.09rem;
	}
</style>