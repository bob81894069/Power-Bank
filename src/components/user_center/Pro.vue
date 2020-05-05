<template>
<div>
	<!-- 返回 -->
	<div class="return">
		<router-link to='/User'>
			<p>返回</p>
		</router-link>
	</div>
	
	<!-- 代理 -->
	<div class="proxy">
		<span>项目：</span> <span>xxxx</span> <br>
		<span>角色：</span> <span>代理商</span>
		<img src="../../assets/image/right_arrow.png">
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

/*代理*/
.proxy {
	width: 100%;
	height: 0.45rem;
	border-bottom: 0.01rem solid #eeeeee;
	border-top: 0.01rem solid #eeeeee;
	margin-top: 0.8rem;
	
	padding-left: 0.15rem;
}
	.proxy span:nth-child(1), span:nth-child(2) {
		font-weight: 600;
		line-height: 0.26rem;
	}
	.proxy span:nth-child(4), span:nth-child(5) {
		color: #999999;
		font-size: 0.10rem;
	}
	.proxy img {
		width: 0.15rem;
		height: 0.15rem;
		position: absolute;
		top: 0.95rem;
		right: 0.2rem;
	}
</style>