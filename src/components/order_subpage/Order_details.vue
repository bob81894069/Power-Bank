<template>
<div>
	<!-- 返回 -->
	<div class="return">
		<router-link to='/Order'>
			<p>返回</p>
		</router-link>
	</div>
	
	<!-- 已完成 -->
	<div class="deploy">
		<ul>
			<li>订单编号：</li>
			<li>12u9051u51</li>
		</ul>

		<p>已完成</p>
	</div>

	<!-- 数据展示 -->
	<div class="data">
		<div class="data_one">
			<span>
				<p>湘味缘</p>
			</span>

			<ul>
				<li>网点类型</li>
				<li class="gray">餐厅</li>
			</ul>

			<ul>
				<li>网点电话</li>
				<li class="gray">1380013800</li>
			</ul>

			<ul>
				<li>网点地址</li>
				<li class="gray">xxxxxx</li>
			</ul>

			<ul>
				<li>网点联系人</li>
				<li class="gray">白舟</li>
			</ul>
		</div>

		<div class="data_one">
			<span>
				<p>支付用户：</p>
				<p>xx</p>
			</span>

			<ul>
				<li>支付方式</li>
				<li class="gray">微信支付</li>
			</ul>

			<ul>
				<li>支付描述</li>
				<li class="gray">共享充电</li>
			</ul>

			<ul>
				<li>支付时间</li>
				<li class="gray">2019.08.22 12:30</li>
			</ul>

			<ul>
				<li>支付状态</li>
				<li class="gray">已完成</li>
			</ul>

			<ul>
				<li>支付金额</li>
				<li class="red">¥8.00</li>
			</ul>
		</div>

		<div class="data_one">
			<span>
				<p>网点所属代理：</p>
				<p>xxx</p>
			</span>

			<ul>
				<li>代理级别</li>
				<li class="gray">代理商</li>
			</ul>

			<ul>
				<li>代理分成</li>
				<li class="scarlet">80%</li>
			</ul>

			<ul>
				<li>结算状态</li>
				<li class="gray">结算成功</li>
			</ul>
		</div>

		<div class="data_one">
			<span class="bottom">
				<p>设备序列号：</p>
				<p>123456789</p>
			</span>

			<span class="bottom">
				<p>设备型号：</p>
				<p>设备A类型</p>
			</span>
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

/*已完成*/
.deploy {
	width: 3rem;
	height: 0.4rem;
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
	/*已完成按钮*/
	.deploy p {
		background-color: #32B16C;
		width: 0.6rem;
		height: 0.2rem;
		border-radius: 0.5rem;
		font-size: 0.11rem;
		text-align: center;
		line-height: 0.2rem;
		color: #fff;
		position: absolute;
		top: 0.7rem;
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
		.data_one ul .gray {
			color: #888888;
		}
		.data_one ul .red {
			font-size: 0.16rem;
			color: #D73B4D;
		}
		.data_one ul .scarlet {
			color: #D73B4D;
		}

	/*第四块样式*/
	.data_one .bottom {
		line-height: 0.25rem;
	}
		.data_one .bottom p:nth-child(2) {
			color: #888888;
			font-weight: 100;
		}
</style>