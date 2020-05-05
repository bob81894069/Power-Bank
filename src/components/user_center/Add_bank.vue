<template>
<div>
	<!-- 返回 -->
	<div class="return">
		<router-link to='/Withdrawal_one'>
			<p>返回</p>
		</router-link>
	</div>

	<div class="text">
		<p>添加银行卡</p>
		<p>请输入支付密码，以验证身份</p>		
	</div>
	
	<!-- 支付密码 -->

	<!-- 第一套方案不弹出 -->
	<!-- <div class="pay_password">
		<div class="item" v-for="i in 6" :key="i.id">{{numbers[i - 1]}}</div>
		<input type="tel" v-model="numbers" autofocus="autofocus">
	</div> -->
	
	<!-- 第二套方案弹出密码框 -->
	<!-- 弹出密码 -->
</div>
</template>

<script type="text/javascript">
/* eslint-disable */
export default {
	data() {
		return {
			numbers: ''	
		}
	}
};



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

/*文字*/
.text {
	margin-top: 0.7rem;
	width: 100%;
	height: 1rem;
}
	.text p:nth-child(1) {
		font-size: 0.22rem;
		text-align: center;
	}
	.text p:nth-child(2) {
		font-size: 0.14rem;
		margin-top: 0.25rem;
		text-align: center;
	}

/*支付密码样式*/

/*第一套方案不弹出*/
/*.pay_password {
	margin-top: 0.2rem;
	width: 100%;
	height: 0.6rem;
	display: flex;
	padding: 0 0.3rem;
}

	.pay_password .item {
		width: 2.8rem;
		height: 0.42rem;
		border: 0.01rem solid #eee;
		font-size: 0.2rem;
		text-align: center;
		line-height: 0.42rem;
		text-security：disc; 
		-webkit-text-security：disc; 
		-mox-text-security：disc; 
	}
	.pay_password input {
		position: absolute;
		top: 1.9rem;
		left: 0.29rem;
		width: 2.6rem;
		height: 0.42rem;
		border: 0.01rem solid #eee;
		opacity: 0;
	}*/

/*第二套方案弹出密码框*/

</style>