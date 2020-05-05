<template>
<div>
	<!-- 返回 -->
	<div class="return">
		<router-link to='/Outlets'>
			<p>返回</p>
		</router-link>
	</div>

	<!-- 数据 -->
	<div class="data">
		<ul>
			<li>设备编号：</li>
			<li>123456789</li>
		</ul>

		<ul>
			<li>设备类型：</li>
			<li>xxx类型设备</li>
		</ul>
	</div>
	
	<!-- 按钮 -->
	<div class="btn">
		<p>绑定</p>
		<p>取消</p>
	</div>

</div>
</template>

<script type="text/javascript">
export default {
	data () {
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
	border: 0.01rem solid #A4B5DC;
	position: absolute;
	top: 0.2rem;
	left: -0.3rem;
	color: black;
}	

/*数据样式*/
.data {
	width: 3rem;
	height: 0.8rem;
	margin: 0 auto;
	margin-top: 0.6rem;
	border: 0.01rem solid #eeeeee;
	border-radius: 0.06rem;
}
	.data ul {
		display: flex;
		margin: 0.15rem;
	}
	.data ul li {
		line-height: 0.15rem;
	}
		.data ul li:nth-child(2) {
			color: #888888;
		}

/*按钮*/
.btn {
	display: flex;
	justify-content: space-around;
	margin-top: 0.3rem;
	
}
	.btn p:nth-child(1) {
		color: #fff;
		border-radius: 0.5rem;
		background-color: #32B16C;
		width: 0.6rem;
		height: 0.2rem;
		line-height: 0.2rem;
		text-align: center;
	}
	.btn p:nth-child(2) {
		color: #fff;
		border-radius: 0.5rem;
		background-color: #D73C4E;
		width: 0.6rem;
		height: 0.2rem;
		line-height: 0.2rem;
		text-align: center;
	}
</style>