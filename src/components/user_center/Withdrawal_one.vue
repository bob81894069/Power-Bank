<template>
<div>
	<!-- 返回 -->
	<div class="return">
		<router-link to='/User'>
			<p>返回</p>
		</router-link>
	</div>
	
	<!-- 框 -->
	<div class="frame">
		<!-- 第一行银行卡 -->
		<div class="bank_card">
			<p>到账银行卡</p>

				<span>
					<router-link to="/Withdrawal_two">
						<p>招商银行 (9009)</p>
						<p>2小时内到账</p>
					</router-link>
				</span>
			
			<img src="../../assets/image/right_arrow.png">
		</div>

		<!-- 第二行现金 -->
		<div class="money">
			<p>提现金额</p>
			
			<div>
				<span>¥</span><input type="tel">
			</div>		

			<span>零钱余额 ¥12.61,</span> <span>全部提现</span>
		</div>

		<!-- 提现按钮 -->
		<button class="btn">提现</button>
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

/*框*/
.frame {
	width: 3rem;
	height: 2.8rem;
	border: 0.01rem solid #eeeeee;
	margin: 0.7rem auto;
	box-shadow: 0 0 0.1rem #eeeeee;
}
	/*第一行银行卡样式*/
	.bank_card {
		padding: 0.15rem 0.2rem 0 0.2rem;
		display: flex;
		justify-content: space-between;
		background-color: #FAFAFA;
		width: 100%;
		height: 0.7rem;
	}	
		.bank_card span {
			flex-grow: 1;
			margin-left: 0.2rem;
		}
		.bank_card span p:nth-child(1) {
			background: url(../../assets/image/China Merchants Bank.png) no-repeat 0rem 0.02rem;
			background-size: 0.15rem 0.15rem;	
			padding-left: 0.2rem;
			
		}
		.bank_card span p:nth-child(2) {
			color: #9B9B9B;
			margin-top: 0.06rem;
			padding-left: 0.2rem;
		}
		.bank_card img {
			width: 0.13rem;
			height: 0.13rem;
		}
	/*第二行现金*/
	.money {
		width: 2.6rem;
		height: 1.35rem;
		margin: 0.15rem 0.2rem 0 0.2rem;
	}	
		.money div {
			margin: 0.2rem 0;
			width: 2.6rem;
			height: 0.46rem;
			border-bottom: 0.01rem solid #eeeeee;
			display: flex;
		}
		.money div span {
			font-size: 0.38rem;
			margin-left: 0.02rem;
		}
		.money input {
			width: 2rem;
			font-size: 0.26rem;
			appearance:textfield;
			padding-left: 0.13rem;

		}
	/*第三行样式*/
	.money span:nth-child(3) {
		color: #888888;
	}
	.money span:nth-child(4) {
		color: #4B8DFD;
	}

	/*提现按钮*/
	.btn {
		font-size: 0.14rem;
		width: 2.6rem;
		height: 0.4rem;
		margin: 0 0.2rem;
		background-color: #A3E5BF;
		border-radius: 0.1rem;
		color: #fff;
	}
</style>