<template>
<div>
	<!-- 返回 -->
	<div class="return">
		<router-link to='/User'>
			<p>返回</p>
		</router-link>
	</div>
	
	<div class="blank"></div>

	<div class="data" v-for="(item, index) in list" :key="index">
		<ul>
			<li>交易单号：</li>
			<li>{{item.number}}</li>
		</ul>

		<ul>
			<li>交易金额：</li>
			<li>¥ {{item.turnover}}</li>
		</ul>

		<ul>
			<li>分成金额：</li>
			<li>¥ {{item.profit_money}}</li>
		</ul>

		<ul>
			<li>设备状态：</li>
			<li>{{item.device}}</li>
		</ul>

		<ul>
			<li>结算状态：</li>
			<li>{{item.settle}}</li>
		</ul>

		<ul>
			<li>结算时间：</li>
			<li>{{item.settle_tiem}}</li>
		</ul>		
	</div>
</div>
</template>

<script type="text/javascript">
export default {
	data() {
		return {
			list: [{
				number: "123456789",
				turnover: 1.00,
				profit_money: 0.45,
				device: "xxx",
				settle: "结算成功",
				settle_tiem: "2019.8.22 12:30"
			},{
				number: "123456789",
				turnover: 1.00,
				profit_money: 0.45,
				device: "xxx",
				settle: "结算成功",
				settle_tiem: "2019.8.22 12:30"
			}]
		}
	},
	methods: {

	},
	computed: {

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

.blank{
	height: 0.5rem;
}

/*数据样式*/
.data {
	width: 3rem;
	height: 2rem;
	border: 0.01rem solid #eeeeee;
	border-radius: 0.08rem;
	margin: 0.15rem auto;
}
	.data ul {
		margin-left: 0.15rem;
		margin-top: 0.18rem;
		display: flex;
	}
		.data ul li {
			line-height: 0.1rem;
		}	
		/*第一行样式*/
		.data ul:nth-child(1){
			width: 2.68rem;
			font-size: 0.1rem;
			border-bottom: 0.01rem solid #eeeeee;
			padding-bottom: 0.08rem;
		}
		.data ul:nth-child(1) li:nth-child(2) {
			margin-left: 0.1rem;
		}
		/*第二、三行样式*/
		.data ul:nth-child(2) li:nth-child(2) {
			color: #2E7AFF;
		}
		.data ul:nth-child(3) li:nth-child(2) {
			color: #2E7AFF;
		}
		/*下面统一样式*/
		.data ul li:nth-child(2) {
			color: #ADADAD;
		}
</style>