<template>
<div class="login">
	<!-- 返回 -->
	<div class="return">
		<router-link to='/Login'>
			<p>返回</p>
		</router-link>
	</div>

	<!-- 登陆框 -->
	<div class="login_box">
		<p>旧密码</p>
		<input type="text" placeholder="请输入您的密码，注意区分大小写">

		<p>新密码</p>
		<input type="password" placeholder="请输入您的密码，注意区分大小写">
	</div>

	<!-- 确认按钮 -->
	<div class="btn">
		<button>确认</button>
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

/*登陆框*/
.login_box {
	margin-top: 1.2rem;
	width: 100%;
	height: 1.8rem;
}	
	.login_box p {
		font-size: 0.18rem;
		color: black;
		margin-left: 0.2rem;
		margin-top: 0.15rem;
	}
	.login_box input:nth-child(2) {
		width: 2.8rem;
		height: 0.35rem;
		margin: 0.1rem 0.2rem;
		border-bottom: 0.01rem solid #eeeeee;
	}
	.login_box input:nth-child(4) {
		width: 2.8rem;
		height: 0.35rem;
		border-bottom: 0.01rem solid #eeeeee;
		padding-bottom: 0;
		margin: 0.1rem 0.2rem;
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

</style>