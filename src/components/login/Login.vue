<template>
<div class="login">
	<!-- 登陆框 -->
	<div class="login_box">
		<input type="text" placeholder="请输入您的手机号">
		<input type="password" placeholder="请输入您的密码">
	</div>

	<!-- 确认按钮 -->
	<div class="btn">
		<button>确认</button>
	</div>

	<!-- 密码 -->
	<div class="password">
		<span>忘记密码？</span>
		<span>重置密码</span>
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
/*登陆框*/
.login_box {
	margin-top: 1.5rem;
	width: 100%;
	height: 1.2rem;
}
	.login_box input:nth-child(1) {
		width: 2.8rem;
		margin: 0 0.2rem;
		height: 0.35rem;
		background: url(../../assets/image/phone.png) no-repeat 0.01rem;
		background-size: 0.2rem 0.2rem;	
		padding-left: 0.28rem;
		border-bottom: 0.01rem solid #eeeeee;
	}
	.login_box input:nth-child(2) {
		width: 2.8rem;
		margin: 0.4rem 0.2rem;
		height: 0.35rem;
		background: url(../../assets/image/password.png) no-repeat 0.01rem;
		background-size: 0.2rem 0.2rem;
		border-bottom: 0.01rem solid #eeeeee;
		padding-left: 0.28rem;
		padding-bottom: 0
	}

/*确认按钮*/
.btn {
	margin: 0.3rem auto 0rem;
	width: 1.8rem;
	height: 0.35rem;
	border-radius: 0.5rem;
	background-color: #2D7AFE;
	text-align: center;
	line-height: 0.38rem;
	color: #fff;
}
	.btn button {
		font-size: 0.14rem;
	}

/*密码样式*/
.password {
	margin-top: 0.2rem;
	text-align: center;
	font-size: 0.10rem;
	color: #6F6F6F;
}	
	.password span:nth-child(2) {
		color: #2D7AFE;
		margin-left: 0.05rem;
	}
</style>