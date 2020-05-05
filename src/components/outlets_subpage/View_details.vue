<template>
<div>
	<!-- 返回 -->
	<div class="return">
		<router-link to='/View_outlets'>
			<p>返回</p>
		</router-link>
	</div>
	
	<!-- 撤销部署 -->
	<div class="deploy">
		<ul>
			<li>设备编号：</li>
			<li>123456789</li>
		</ul>

		<ul>
			<li>设备类型：</li>
			<li>xxx类型设备</li>
		</ul>

		<ul>
			<li>部署时间：</li>
			<li>2019.08.22 12:30</li>
		</ul>
		
		<router-link to="">
			<p>撤销部署</p>
		</router-link>	
	</div>

	<!-- 数据展示 -->
	<div class="data">
		<div class="data_one">
			<span>
				<p>已部署充电套餐</p>
			</span>

			<ul>
				<li>30分钟</li>
				<li>价格：¥ 0.5</li>
				<li>未使用</li>
			</ul>

			<ul>
				<li>1小时</li>
				<li>价格：¥ 1</li>
				<li>使用</li>
			</ul>

			<ul>
				<li>2小时</li>
				<li>价格：¥ 2</li>
				<li>使用</li>
			</ul>

			<ul>
				<li>3小时</li>
				<li>价格：¥ 3</li>
				<li>使用</li>
			</ul>

			<ul>
				<li>5小时</li>
				<li>价格：¥ 5</li>
				<li>使用</li>
			</ul>
		</div>
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
	border: 0.01rem solid #A4B5DC;
	position: absolute;
	top: 0.2rem;
	left: -0.3rem;
	color: black;
}	

/*撤销部署*/
.deploy {
	width: 3rem;
	height: 0.9rem;
	margin: 0 auto;
	margin-top: 0.6rem;
	border: 0.01rem solid #eeeeee;
	border-radius: 0.06rem;
	padding: 0.1rem;
}
	.deploy ul {
		display: flex;
		margin-bottom: 0.05rem;
	}
	.deploy ul li:nth-child(1) {
		font-weight: 600;
	}
	.deploy ul li:nth-child(2) {
		color: #888888;
		line-height: 0.2rem;
	}
	/*撤销部署按钮*/
	.deploy p {
		background-color: #2D79FE;
		width: 0.6rem;
		height: 0.2rem;
		border-radius: 0.5rem;
		font-size: 0.11rem;
		text-align: center;
		line-height: 0.2rem;
		color: #fff;
		position: absolute;
		top: 0.95rem;
		right: 0.25rem;
	}

/*数据展示样式*/
.data .data_one{
	width: 3rem;
	border: 0.01rem solid #eeeeee;
	border-radius: 0.06rem;
	margin: 0.1rem auto;
	padding: 0.15rem 0.1rem 0.15rem 0.1rem;
}
	.data_one span {
		display: flex;
		line-height: 0.1rem;
		font-weight: 600;
	}
	.data_one ul {
		display: flex;
		justify-content: space-between;
		margin-top: 0.1rem;
	}
		.data_one ul li:nth-child(1):before {
			content: "● ";
			color: #F18C8D;
		}
		.data_one ul li:nth-child(2), li:nth-child(3) {
			color: #888888;
		}
</style>