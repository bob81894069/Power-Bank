<template>
<div>
	<!-- 返回 -->
	<div class="return">
		<router-link to='/Proxy_manage'>
			<p>返回</p>
		</router-link>
	</div>

	<div class="info">
		<div>
			<p>我的级别：</p>
			<p>代理商 / 分成比例 / 80%</p>
		</div>
		
		<ul>
			<li>姓<i/>名：</li>
			<li>白丹</li>
		</ul>
		
		<ul>
			<li>手机号码：</li>
			<li>12345678</li>
		</ul>
		
		<ul>
			<li>姓<i/>别：</li>
			<li>男</li>
		</ul>
		
		<ul>
			<li>班<i/>别：</li>
			<li>代理商</li>
		</ul>
		
		<ul>
			<li>分成比例：</li>
			<li>80%</li>
		</ul>		
	</div>
	
	<!-- 两个按钮 -->
	<div class="btn">
		<p>删除代理</p>
		<p>保存</p>
	</div>

</div>
</template>

<script type="text/javascript">
/* eslint-disable */
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
}

/*信息样式*/
.info {
	width: 100%;
	height: 2.9rem;
	margin-top: 0.7rem;
}	
	.info div {
		display: flex;
		margin: 0 auto;
		width: 2.2rem;
		font-size: 0.14rem;
		font-weight: 600;
		margin-bottom: 0.3rem;
	}
	.info i {
		padding-left: 0.24rem;
	}
	.info ul {
		display: flex;
		width: 2.9rem;
		margin: 0 auto;
		margin-top: 0.16rem;
		border-bottom: 0.01rem solid #eeeeee;
		padding-bottom: 0.1rem;
		padding-left: 0.15rem;
	}
	.info ul li:nth-child(2) {
		margin-left: 0.1rem;
		color: #888888;
	}
	.info ul:nth-child(6) li:nth-child(2) {
		color: red;
	}

/*两个按钮*/
.btn {
	width: 100%;
	height: 0.5rem;
	display: flex;
	justify-content: space-around;
}
	.btn p {
		width: 0.9rem;
		height: 0.3rem;
		border-radius: 0.5rem;
		background-color: #D73C4E;
		text-align: center;
		line-height: 0.3rem;
		color: #fff;
		font-size: 0.14rem;
	}
	.btn p:nth-child(2) {
		background-color: #2D7AFE;
	}

</style>