<template>
<div>
	<!-- 返回 -->
	<div class="return">
		<router-link to='/User'>
			<p>返回</p>
		</router-link>
	</div>

	<!-- 银行卡 -->
	<div class="bank">
		<div>
			<p>招商银行</p>
			<p>储蓄卡</p>
		</div>
		
		<p class="bank_cark">**** **** ***** 9009</p>
	</div>
	
	<!-- 添加银行卡 -->
	<router-link to="/Withdrawal_three">
		<div class="add">
			<span>+</span>
			<p> 添加银行卡</p>
			<img src="../../assets/image/right_arrow.png">		
		</div>
	</router-link>
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

/*银行卡*/
.bank {
	width: 3rem;
	height: 1rem;
	background: #C15356;
	margin: 0.7rem 0.1rem 0 0.1rem;
	border-radius: 0.05rem;
	background-image: url(../../assets/image/China Merchants Bank_2.png);
	background-size: 1.55rem 1.55rem;
	background-repeat: no-repeat;
	background-position: 1.2rem;
	position: absolute;
}
	.bank div {
		background: url(../../assets/image/China Merchants Bank_3.png);
		background-size: 0.3rem 0.3rem;
		background-repeat: no-repeat;
		background-position: 0rem;
		margin: 0.15rem 0 0 0.15rem;
		padding-left: 0.38rem;
	}
	.bank p {
		color: #fff;
	}
	.bank_cark {
		color: #fff;
		line-height: 0.55rem;
		text-align: center;
		font-size: 0.26rem;
	}

/*添加银行卡*/
.add {
	width: 100%;
	height: 0.5rem;
	position: absolute;
	top: 2.5rem;
	border-bottom: 0.01rem solid #eeeeee;
	border-top: 0.01rem solid #eeeeee;
	display: flex;
	justify-content: space-between;
	line-height: 0.5rem;
	font-size: 0.15rem;
	color: #999999;
	padding: 0 0.15rem;
}
	.add span {
		font-size: 0.25rem;
	}
	.add p {
		flex-grow: 1;
		margin-left: 0.1rem;
	}
	.add img {
		width: 0.15rem;
		height: 0.15rem;
		margin-top: 0.18rem;
	}

</style>