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

	<!-- 数据 -->
	<div class="data">
		<span>
			<p>网点名称：</p>
			<input type="text" placeholder="请输入网点名称">
		</span>
		
		<span>
			<p>网点类型：</p>
			<input type="text" placeholder="请选择网点类型">
			<select>
				<option>选择</option>
				<option>选择</option>
			</select>
		</span>

		<span>
			<p>代理商：</p>
			<input type="text" placeholder="请选择代理商">
			<select>
				<option>选择</option>
				<option>选择</option>
			</select>
		</span>

		<div>
			<p>网点地址：</p>
			<p>请输入内容</p>				
		</div>
		<input type="text" class="text">

		<div>
			<p>网点地址：</p>
			<p>请输入内容</p>				
		</div>
		<input type="text" class="text">
	</div>

	<!-- 保存按钮 -->
	<p class="btn">保存</p>

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

/*数据样式*/
.data {
	width: 100%;
	height: 3rem;
	margin: 0.3rem 0.1rem 0 0.1rem;
}
	.data span {
		width: 3rem;
		heigth: 0.8rem;
		border-bottom: 0.01rem solid #eeeeee;
		display: flex;
		padding-bottom: 0.06rem;
		margin-bottom: 0.15rem;
	}
		.data span p {
			font-size: 0.14rem;
		}
		.data span input {
			font-size: 0.13rem;
		}
		.data span select {
			border: 0.01rem solid #eeeeee;
			text-align: center;
			width: 0.5rem;
			height: 0.2rem;
			line-height: 0.2rem;
			/*appearance: textfield;*/
		}
		/*第四行样式*/
		.data div {
			margin-top: 0.15rem;
			font-size: 0.14rem;
			display: flex;
		}
			.data div p:nth-child(2) {
				font-size: 0.13rem;
				color: #888888;
			}
			.data .text {
				marign: 0.1rem;
				border-bottom: 0.01rem solid #eeeeee;
				width: 3rem;
				height: 0.5rem;
				padding-top: 0.3rem;
			}

/*保存按钮*/
.btn {
	text-align: center;
	width: 0.9rem;
	height: 0.28rem;
	background-color: #2D7AFE;
	border-radius: 0.5rem;
	color: #fff;
	line-height: 0.28rem;
	font-size: 0.14rem;
	margin: 0 auto;
}
</style>