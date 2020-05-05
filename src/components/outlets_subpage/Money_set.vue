<template>
<div>
	<!-- 返回 -->
	<div class="return">
		<router-link to='/Outlets'>
			<p>返回</p>
		</router-link>
	</div>

	<!-- 数据 -->
	<div class="data">
		<ul>
			<li>时长：30分钟</li>
			<li>价格：<input type="text" value="0.5" class="frame"> 元</li>
		
			<div>
		<!-- 按钮 -->
        <input type="checkbox" id="in1" class="key">
        <label for="in1" class="key-bg">
            <span class="circle"></span>
            <span class="on">ON</span>
            <span class="off">OFF</span>
        </label>
    </div>
		</ul>

		<ul>
			<li>时长：1小时</li>
			<li>价格：<input type="text" value="1" class="frame"> 元</li>
		
			<div>
        <input type="checkbox" id="in2" class="key">
        <label for="in2" class="key-bg">
            <span class="circle"></span>
            <span class="on">ON</span>
            <span class="off">OFF</span>
        </label>
    </div>
		</ul>

		<ul>
			<li>时长：2小时</li>
			<li>价格：<input type="text" value="2" class="frame"> 元</li>
		
			<div>
        <input type="checkbox" id="in3" class="key">
        <label for="in3" class="key-bg">
            <span class="circle"></span>
            <span class="on">ON</span>
            <span class="off">OFF</span>
        </label>
    </div>
		</ul>

		<ul>
			<li>时长：3小时</li>
			<li>价格：<input type="text" value="3" class="frame"> 元</li>
		
			<div>
        <input type="checkbox" id="in4" class="key">
        <label for="in4" class="key-bg">
            <span class="circle"></span>
            <span class="on">ON</span>
            <span class="off">OFF</span>
        </label>
    </div>
		</ul>

		<ul>
			<li>时长：5小时</li>
			<li>价格：<input type="text" value="5" class="frame"> 元</li>
		
			<div>
        <input type="checkbox" id="in5" class="key">
        <label for="in5" class="key-bg">
            <span class="circle"></span>
            <span class="on">ON</span>
            <span class="off">OFF</span>
        </label>
    </div>
		</ul>
	</div>

	<!-- 保存按钮 -->
	<p class="btn">保存</p>
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
	color: black;
}

/*数据样式*/
.data {
	margin-top: 0.6rem;
}
	.data ul {
		height: 0.45rem;
		display: flex;
		justify-content: space-between;
		border-bottom: 0.01rem solid #eeeeee;
		padding: 0.1rem 0.15rem;
		font-size: 0.14rem;
	}
	.data ul:nth-child(1) li:nth-child(2) {
		flex-grow: 1;
		margin-left: 0.15rem;
	}
	.data li {
		line-height: 0.3rem;
	}
	.data .frame {
		width: 0.4rem;
		appearance: textfield;
		border: 0.01rem solid #eeeeee;
		height: 0.25rem;
		text-align: center;
		font-size: 0.14rem;
	}
/*按钮样式*/
.key{display: none;}
.key-bg{
   position: relative;
   display: inline-block;
   width: 0.65rem;
   height: 0.25rem;
   background-color: #eeeeee;
   border-radius: 0.5rem;
   overflow: hidden;
}
.circle{
   position: absolute;
   top: 0.02rem;
   margin-left: 0.01rem;
   width: 0.22rem;
   height: 0.22rem;
   border-radius: 0.5rem;
   background: #fff;
   box-shadow: 0 0 0.03rem #888888
}
.on { 
	padding: 0.05rem 0.08rem;
	display:none;
	color: #fff;
}
.off { 
	width: 0.65rem;
    height: 0.25rem;
	padding-left: 0.3rem;
	padding-top: 0.05rem;
	display: block;
	color: #888888;
	border: 0.01rem solid #999999;
	border-radius: 0.5rem;
}

.key-bg .circle {
	left: 0.01rem;
	transition: all 0.5s;
}
.key:checked + .key-bg .circle {
	left: 0.4rem;
}
.key:checked + .key-bg {
   background: #69D66B;
}
.key:checked + .key-bg .on{
   display: block;
}
.key:checked + .key-bg .off{
   display: none;

}


/*保存按钮样式*/
.btn {
	text-align: center;
	width: 1rem;
	height: 0.28rem;
	background-color: #2D7AFE;
	color: #fff;
	border-radius: 0.5rem;
	line-height: 0.28rem;
	margin: 0.5rem auto;
}
</style>