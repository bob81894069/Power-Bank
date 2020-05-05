<template>
<div>
	<!-- 返回 -->
	<div class="return">
		<router-link to='Proxy_manage'>
			<p>返回</p>
		</router-link>
	</div>

	<!-- 代理信息 -->
	<div class="data">
		<span>
			<p>我的级别： 代理商 / 分成比例 / </p><p>80%</p>
		</span>
		
		<div>
			<p>手机号码：</p>
			<input type="number" placeholder="请输入手机号码" class="textfield">
		</div>

		<div>
			<p>姓<i/>名：</p>
			<input type="number" placeholder="请输入真实姓名" class="textfield">
		</div>

		<div>
			<p>性<i/>别：</p>
			<input type="radio" name="sex" value="man" checked="checked"/><p>男</p> 
         <input type="radio" name="sex" value="male"/><p>女</p>
		</div>

		<div>
			<p>级<i/>别：</p>
			<select>
				<option value="选择级别">选择级别</option>
				<option value="选择级别">选择级别</option>
		</select>
		</div>

		<div>
			<p>分成比例：</p>
			<input type="number" placeholder="请输入数字1~100数字" class="textfield">
		</div>
	</div>
	
	<!-- 按钮 -->
	<p class="btn">确定</p>
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

/*代理信息*/
.data {
	width: 100%;
	height: 3rem;
	margin-top: 0.6rem;
}
	.data div {
		display: flex;
	}
	/*第一行样式*/
	.data span {
		display: flex;
		font-size: 0.14rem;
		font-weight: 600;
		width: 2.2rem;
		margin: 0 auto;
		margin-bottom: 0.4rem;
	}
	.data input {
		margin-left: 0.15rem;
		appearance: menu;
	}
	.textfield {
		appearance: textfield;
	}
	/*下面样式*/
	.data div {
		width: 2.8rem;
		height: 0.35rem;
		margin: 0.15rem auto;
		border-bottom: 0.01rem solid #eeeeee;
		padding-left: 0.3rem;
	}
		.data div p {
			line-height: 0.35rem;
		}
		.data div i {
			padding-left: 0.23rem;
		}
	.data div:nth-child(4) p:nth-child(3), p:nth-child(5) {
		color: #888888;
	}
	.data div:nth-child(5) select {
		color: #888888;
		padding-left: 0.1rem;
		appearance: textfield;
		background: url("../../assets/image/bottom_arrow.png") no-repeat 1.6rem 0.1rem;
		background-size: 0.12rem 0.12rem;
		width: 1.8rem;
	}

/*确认按钮*/
.btn {
	text-align: center;
	padding: 0.1rem;
	width: 1.8rem;
	margin: 0.4rem auto;
	border-radius: 0.5rem;
	background-color: #CCCCCC;
	color: #fff;
}
</style>