<template>
<div>
	<!-- 返回 -->
	<div class="return">
		<router-link to='/User'>
			<p>返回</p>
		</router-link>
	</div>

	<!-- 分成按钮 -->
	<div class="btn">
		<span>分成可见</span>

		<div class="toggle-button-wrapper">
			<input type="checkbox" id="toggle-button" name="switch">
		<label for="toggle-button" class="button-label">
        <span class="circle"></span>
        <span class="text on">ON</span>
        <span class="text off">OFF</span>
      </label>
		</div>
	</div>
</div>
</template>

<script type="text/javascript">
/* eslint-disable */
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

/*分成按钮*/
.btn {
	width: 100%;
	height: 0.5rem;
	border-top: 0.01rem solid #eeeeee;
	border-bottom: 0.01rem solid #eeeeee;
	display: flex;
	justify-content: space-between;
	margin: 0.8rem 0;
	padding: 0 0.3rem;
	line-height: 0.5rem;
}
	.btn span {
		font-size: 0.14rem;
	}

/*按钮样式*/
.button-label{
   position: absolute;
   top: 0.92rem;
   right: 0.2rem;
   display: inline-block;
   width: 0.6rem;
   height: 0.25rem;
   background-color: #EEEEEE;
   border-radius: 0.5rem;
   overflow: hidden;
}
.circle{
   position: absolute;
   top: 0.02rem;
   right: 1rem;
   width: 0.21rem;
   height: 0.21rem;
   border-radius: 50%;
   background-color: #fff;
   box-shadow: 0 0 0.02rem #888888;
}
.on { 
	color: #fff; 
	display: none; 
	position: absolute;
   top: -0.12rem;
   right: 0.27rem;
}
.off { 
	color: #9A9A9A; 
	display: inline-block; 
	position: absolute;
   top: -0.12rem;
   left: 0.24rem;
}
.button-label .circle{
   left: 0;
   transition: all 0.3s;
}

/*按钮开关操作*/
#toggle-button:checked + label.button-label .circle{
   left: 0.37rem;
}
#toggle-button:checked + label.button-label .on{ display: inline-block; }
#toggle-button:checked + label.button-label .off{ display: none; }
#toggle-button:checked + label.button-label{
   background-color: #69D66B;
}
</style>