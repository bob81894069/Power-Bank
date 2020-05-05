<template>
<div>
	<!-- 返回 -->
	<div class="return">
		<router-link to='/Withdrawal_two'>
			<p>返回</p>
		</router-link>
	</div>
	
	<div class="frame">
		<p>请绑定持卡人本人的银行卡</p>
		
		<div>
			<span>
				<p>持卡人</p> <input type="" placeholder="xxx">
			</span>

			<span>
				<p>卡号</p> <input type="" name="">
			</span>
		</div>		
	</div>
	
	<!-- 提现按钮 -->
	<button class="btn">下一步</button>

</div>
</template>

<script type="text/javascript">
export default {
	data () {
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

/*框样式*/
.frame {
	width: 100%;
	height: 1rem;
	margin-top: 0.7rem;
}
	.frame p {
		color: #999999;
		font-size: 0.14rem;
		margin-left: 0.18rem;
	}
	/* 第二行样式*/
	.frame div {
		width: 100%;
		height: 0.6rem;
		background-color: #ECECEC;
		margin-top: 0.1rem;
	}
	.frame span {
		display: flex;
		line-height: 0.3rem;
	}
	.frame span:nth-child(1) {
		width: 3rem;
		margin: 0 auto;
		color: black;
		border-bottom: 0.01rem solid #CBCBCB;
	}
	.frame span:nth-child(1) p {
		color: black;
		margin-left: 0.1rem;
	}
	.frame span:nth-child(1) input {
		margin-left: 0.2rem;
		width: 2.28rem;
		background: url(../../assets/image/Exclamation mark.png) no-repeat 2.05rem 0.06rem;
		background-size: 0.22rem 0.22rem;
	}
	.frame span:nth-child(2) p {
		color: black;
	}
	.frame span:nth-child(2) input {
		margin-left: 0.36rem;
		width: 2.28rem;
		background: url(../../assets/image/camera.png) no-repeat 2.05rem 0.06rem;
		background-size: 0.22rem 0.22rem;
	}

/*提现按钮*/
	.btn {
		font-size: 0.14rem;
		width: 2.8rem;
		height: 0.4rem;
		margin: 0.2rem 0.2rem;
		background-color: #A3E5BF;
		border-radius: 0.1rem;
		color: #fff;
	}
</style>