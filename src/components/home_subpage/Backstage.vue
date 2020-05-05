<template>
<div>
	<!-- 返回 -->
	<div class="return">
		<router-link to='/'>
			<p>返回</p>
		</router-link>
	</div>

	<!-- 菜单 -->
	<div class="Menu">
		<p :class="{active: changeClor == 1}" @click="change1">更新说明</p>
		<p :class="{active: changeClor == 2}" @click="change2">常见问题</p>
	</div>

	<!-- 更新说明 -->
	<div class="hidden" v-show="ok">
		<p>V.x.xx版本更新说明</p>
		<p>V.x.xx版本更新说明</p>
	</div>
</div>
</template>

<script type="text/javascript">
/* eslint-disable */
export default {
	data() {
		return {
			changeClor: 1,
			ok: true
		}
	},
	methods: {
		change1() {
			this.changeClor = 1
			this.ok = true
		},
		change2() {
			this.changeClor = 2
			this.ok = false
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

/*菜单*/
.Menu {
	margin-top: 0.65rem;
	width: 100%;
	height: 0.5rem;
	display: inline-flex;
	justify-content: flex-start;
}
	.Menu p {
		width: 1.6rem;
		height: 0.5rem;
		background-color: #F7F8FC;
		text-align: center;
		line-height: 0.5rem;
		font-size: 0.14rem;
	}
	.Menu .active {
		color: #fff;
		background-color: #2D7AFE;
		display: block;
	}

/*更新说明*/
.hidden {
	width: 100%;
	height: 1rem;
	margin-top: 0.2rem;
}
	.hidden p {
		padding-bottom: 0.15rem;
		padding-left: 0.15rem;
		border-bottom: 0.01rem solid #eeeeee;
		margin-bottom: 0.15rem;
		background: url(../../assets/image/right_arrow.png) no-repeat 2.95rem 0;
		background-size: 0.15rem 0.15rem;
	}
</style>