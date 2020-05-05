<template>
<div class="user">
	<!-- 顶部 -->
	<div class="top">
		<div>
			<img src="../assets/image/user.jpg">

			<span>
				<p>球球</p>
				<p>ID:106248</p>
			</span>
		</div>	
	</div>
	
	<!-- 金额 -->
	<div class="gray_background">
		<div class="money">
			<p>可提现金额 (元)</p>

			<ul>
				<li>¥ 0.00</li>
				<li>
					<router-link to="/Withdrawal_one">
						申请提现
					</router-link>
				</li>
			</ul>

			<div>
				<span>
					<p>待审核金额</p>
					<p>0元</p>
				</span>

				<span>
					<p>已提现金额</p>
					<p>0元</p>
				</span>

				<span>
					<p>总分成金额</p>
					<p>0元</p>
				</span>
			</div>
		</div>
	</div>
	
	<!-- 菜单 -->
	<div class="Menu">
		<div>
			<router-link to="Profit_recording">
				<p>分成记录</p>
			</router-link>
		</div>		
	</div>
	
	<div class="Menu">
		<div>
			<router-link to="Set_password">
				<p>修改密码</p>
			</router-link>
		</div>		
	</div>
	
	<div class="Menu">
		<div>
			<router-link to="/Withdrawal_two">
				<p>提现账号管理</p>
			</router-link>
		</div>		
	</div>
	
	<div class="Menu">
		<div>
			<router-link to="/Pro">
				<p>切换项目</p>
			</router-link>
		</div>		
	</div>
	
	<div class="Menu">
		<div>
			<router-link to="/Change_user">
				<p>其他账号登陆</p>
			</router-link>
		</div>		
	</div>
	
	<div class="Menu">
		<div>
			<router-link to="/User_set">
				<p>个人设置</p>
			</router-link>
		</div>		
	</div>

	<!-- 底部菜单栏 -->
	<div class="menu">
		<router-link to='/'>
			<img src="../assets/image/home.png">
		</router-link>

		<router-link to='/Order'>
			<img src="../assets/image/order.png">
		</router-link>

		<router-link to='/Device'>
			<img src="../assets/image/device.png">
		</router-link>

		<router-link to='/Outlets'>
			<img src="../assets/image/outlets.png">
		</router-link>

		<router-link to='/User'>
			<img src="../assets/image/user_2.png">
		</router-link>	
	</div>

</div>
</template>

<script type="text/javascript">
export default {
	data() {
		return {

		}
	},
	methods: {

	},
	computed: {

	}
}
</script>

<style scoped>
/*顶部样式*/
.top {
	width: 100%;	
	height: 1.4rem;
	background-image: linear-gradient(#FE7D60, #F8405C);
}	
	.top div {
		display: flex;
		margin-left: 0.4rem;
		padding-top: 0.3rem;
	}
		.top img{
			width: 0.5rem;
			height: 0.5rem;
			border: 0.01rem solid #fff;
			border-radius: 0.5rem;
		}
		.top span {
			position: absolute;
			left: 38%;
			top: 6%;
		}
		.top div p {
			color: #fff;
			line-height: 0.2rem;
		}

/*金额样式*/
.gray_background {
	background-color: #F7F7F7;
	width: 100%;
	height: 1.1rem;
}
.money {
	width: 2.9rem;
	height: 1.3rem;
	background-color: #fff;
	border-radius: 0.1rem;
	position: absolute;
	top: 1rem;
	right: 0.15rem;
	padding-top: 0.08rem;
}
	/*等一行样式*/
	.money p {
		font-size: 0.14rem;
		font-weight: 600;
		margin: 0 0.15rem;
	}
	/*第二行样式*/
	.money ul {
		margin: 0.08rem 0.15rem;	
		display: flex;
		justify-content: space-between;
		text-align: center;
		line-height: 0.22rem;
	}
		.money ul li:nth-child(1) {
			font-size: 0.20rem;
			color: #D63C4D;
			font-weight: 100;
		}
		.money ul li:nth-child(2) {
			width: 0.55rem;
			font-size: 0.1rem;
			color: #FD7963;
			font-weight: 100;
			border: 0.01rem solid #FD7963;
			border-radius: 0.5rem;
		}
	/*第三行样式*/
	.money div {
		display: flex;
		justify-content: space-around;
		text-align: center;
	}
	.money div span p {
		margin-top: 0.05rem;
		font-size: 0.1rem;
		font-weight: 100;
		color: #888888;
	}
	.money div span p:nth-child(2) {
		color: #D63C4D;
	}

/*菜单样式*/
.Menu div {
	margin: 0.15rem 0.2rem 0.15rem 0.2rem;
	width: 2.8rem;
	height: 0.3rem;
	border-bottom: 0.01rem solid #eeeeee;
}
	.Menu p {	
		border-left: 0.06rem solid #FF6A3F;
		padding-left: 0.15rem;
		line-height: 0.2rem;
		background: url(../assets/image/right_arrow.png) 2.6rem  no-repeat;
		background-size: 0.15rem 0.15rem;
	}

/*菜单栏*/
.menu {
	position: fixed;
	bottom: 0;
	width: 100%;
	height: 0.5rem;
	border-top: 0.01rem solid #eeeeee;
	display: flex;
	justify-content: space-around;
	background-color: #fff;
	margin-top: 0.6rem;
}	
	/*底部遮挡部分空出50px*/
	.user {
		padding-bottom: 0.5rem;
	}
	.menu img {
		width: 0.4rem;
		height: 0.4rem;
		top: 0.05rem;
	}
</style>