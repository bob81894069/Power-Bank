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
		<p>累计收益</p>
		<p>8321.50</p>
	</div>

	<!-- 收益数据 -->
	<div class="profit_data" v-for="(item, index) in list" :key="index">
		<div>
			<p>收益</p>
			<p>{{item.time}}</p>
			<p>¥{{item.money}}</p>
		</div>		
	</div>

</div>
</template>

<script type="text/javascript">
export default {
	data() {
		return {
			list: [{
				time: "2019/12/14 18:34",
				money: "99.00"
			},{
				time: "2019/12/14 18:34",
				money: "99.00"
			},{
				time: "2019/12/14 18:34",
				money: "99.00"
			},{
				time: "2019/12/14 18:34",
				money: "99.00"
			},{
				time: "2019/12/14 18:34",
				money: "99.00"
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
}

/*收益面板*/
.profit {
	width: 100%;
	height: 1.1rem;
	margin-top: 0.6rem;
	background-image: linear-gradient(#FE7D60, #F8405C);
}
	.profit p:nth-child(1) {
		margin-left: 0.15rem;
		padding-top: 0.25rem;
		font-size: 0.16rem;
		color: #fff;
	}
	.profit p:nth-child(2) {
		margin-left: 0.15rem;
		padding-top: 0.1rem;
		font-size: 0.25rem;
		color: #fff;
	}

/*收益数据*/
.profit_data {
	
}
	.profit_data div {
		width: 100%;
		height: 0.6rem;
		border-bottom: 0.01rem solid #eeeeee;
		padding: 0.15rem 0rem 0rem 0.15rem;
	} 
		.profit_data div p:nth-child(1) {
			font-size: 0.12rem;
			font-weight: 600;
		}
		.profit_data div p:nth-child(2) {
			font-size: 0.11rem;
			color: #888888;
			margin-top: 0.06rem
		}
		.profit_data div p:nth-child(3) {
			width: 1rem;
			font-size: 0.18rem;
			color: #FE7171;
			position: relative;
			bottom: 0.23rem;
			left: 2.3rem;
		}
</style>