<template>
<div>
	<!-- 返回 -->
	<div class="return">
		<router-link to='/'>
			<p>返回</p>
		</router-link>
	</div>

	<!-- 收益面板 -->
	<div class="profit">
		<p>今日收益 (元)</p>
		<p>¥ 0.00</p>

		<div class="row">
			<div>
				<span>入驻人：</span>
				<span>白丹</span>
			</div>

			<div>
				<span>已入驻：</span>
				<span>0天</span>
			</div>
		</div>
	</div>

	<!-- 代理 -->
	<div class="proxy">
		<div>
			<p>下级代理数：</p>
			<p>0</p>
		</div>

		<div>
			<p>网点总数：</p>
			<p>0</p>
		</div>
	</div>

	<!-- 数据展示 -->
	<div class="data">
		<div>
			<p>总订单总数</p>
			<span>0</span>
		</div>
		<div>
			<p>总营业额</p>
			<span>¥0</span>
		</div>
		<div>
			<p>总收益</p>
			<span>¥0</span>
		</div>
	</div>
	
	<div class="data">
		<div>
			<p>本月订单数</p>
			<span>0</span>
		</div>
		<div>
			<p>本月营业额</p>
			<span>¥0</span>
		</div>
		<div>
			<p>本月收益</p>
			<span>¥0</span>
		</div>
	</div>

	<div class="data">
		<div>
			<p>昨日订单数</p>
			<span>0</span>
		</div>
		<div>
			<p>昨日营业额</p>
			<span>¥0</span>
		</div>
		<div>
			<p>昨日收益</p>
			<span>¥0</span>
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
}

/*收益面板样式*/
.profit {
	width: 3rem;
	height: 1.4rem;
	margin: 0 auto;
	margin-top: 0.6rem;
	border-radius: 0.06rem;
	background-image: linear-gradient(#FE7D60, #F8405C);
	color: #fff;
	text-align: center;
	font-size: 0.16rem;
}	
	.profit p:nth-child(1){
		padding-top: 0.2rem;
	}
	.profit p:nth-child(2) {
		font-size: 0.28rem;
		margin-top: 0.1rem;
	}
	.row {
		display: flex;
		justify-content: space-between;
		font-size: 0.11rem;
		margin: 0.2rem 0.1rem;
	}

/*代理样式*/
.proxy {
	margin: 0.2rem 0.1rem;
}
	.proxy div {
		width: 1.4rem;
		height: 0.4rem;
		border: 0.01rem solid #eeeeee;
		border-radius: 0.06rem;
		display: inline-flex;
		padding: 0 0.2rem;
	}
	.proxy div:nth-child(2) {
		margin-left: 0.19rem;
		padding-left: 0.3rem;
	}
		.proxy div p {
			text-align: center;
			font-size: 0.14rem;
			font-weight: 600;
			line-height: 0.4rem;		
		}

/*数据展示*/
.data {
	width: 3rem;
	height: 1rem;
	margin: 0.1rem auto;
	border: 0.01rem solid #eeeeee;
}
	.data div {
		display: flex;
		justify-content: space-between;
	}
	.data div p {
		margin-top: 0.12rem;
		margin-left: 0.05rem;
		padding-left: 0.1rem;
		border-left: 0.05rem solid #FF6A3E;
	}
	.data div span {
		margin-top: 0.12rem;
		margin-right: 0.05rem;
	}
		.data div:nth-child(2) p{
			border-left: 0.05rem solid #3E6DFF;
		}
		.data div:nth-child(3) p{
			border-left: 0.05rem solid #3EE6FF;
		}
</style>