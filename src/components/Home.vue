<template>
<div class="Home">
	<!-- 顶部收益面板 -->
	<div class="panel">
		<div class="panel_one">
			<p>今日收益 (元)</p>
			<p>15.90</p>
		</div>
		
		<div class="panel_two">
			<div>
				<p>180.15</p>
				<p>本月收益 (元)</p>
			</div>
			<div class="vertical_line">|</div>
			<div>
				<p>1760.43</p>
				<p>总收益 (元)</p>
			</div>
		</div>
	</div>

	<!-- 七日收益率 -->
	<div class="interest_rate">
		<p>七日收益率 (%)</p>	
	</div>

	<!-- 曲线图 -->
	<div>
        <div id="myChart" :style="{width: '100%', height: '220px'}"></div>
    </div>

	<!-- 三个选项 -->
	<div class="option">
		<router-link to="Profit_inventory" class="flex">
			<span>累计收益清单</span>	
			<img src="../assets/image/right_arrow.png">		
		</router-link>
		
	</div>

	<div class="option_two">
		<router-link to="Proxy_manage" class="flex_two">
			<img src="../assets/image/user_settings.png">
			<span>代理管理</span>	
			<img src="../assets/image/right_arrow.png">		
		</router-link>	
	</div>

	<div class="option_two">
		<router-link to="Backstage" class="flex_two">
			<img src="../assets/image/file.png">
			<span>后台说明</span>	
			<img src="../assets/image/right_arrow.png">		
		</router-link>	
	</div>

	<!-- 数据展示 -->
	<div class="data">
		<div>
			<p>订单总数</p>
			<span>0</span>
		</div>
		<div>
			<p>总营业额</p>
			<span>¥0</span>
		</div>
		<div>
			<p>总收益</p>
			<span>¥0</span>
		</div>
	</div>

	<div class="data_two">
		<div>
			<p>设备总数</p>
			<span>0</span>
		</div>
		<div>
			<p>网点业额</p>
			<span>0</span>
		</div>
	</div>

	<div class="data_three">
		<div>
			<p>下级代理总数</p>
			<span>0</span>
		</div>
	</div>

	<!-- 底部菜单栏 -->
	<div class="menu">
		<router-link to='/'>
			<img src="../assets/image/home_2.png">
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
			<img src="../assets/image/user.png">
		</router-link>	
	</div>

</div>
</template>

<script type="text/javascript">
/* eslint-disable */
export default {
	data () {
		return {

		}
	},
	methods: {
	    drawLine() {
	    	// 基于准备好的dom，初始化echarts实例
	        let myChart = this.$echarts.init(document.getElementById('myChart'))

	        // 指定图表的配置项和数据
	        myChart.setOption ({
	        	grid: {
		            left: '3%',
		            right: '8%',
		            bottom: '10%',
		            top:'10%',
		            containLabel: true
	        	},
		        xAxis: {
		            type: 'category',
		            boundaryGap: false,
		            data: ['8-21', '8-22', '8-23', '8-24', '8-25', '8-26', '8-27'],
		        },
		        yAxis: {
		            splitLine:{
		                show:false
		            },
		            type: 'value'
		        },
		        series: [{
		          symbol:'none',
		          smooth:true,
		          type:'line',
		          itemStyle : {
		            normal : {
		              lineStyle: {
		                  color: "#ff6175"//折线的颜色
		              },
		              areaStyle : {
		              type : 'default',
		                //渐变色实现
		                color: {
		                  type: 'linear',
		                  x: 0,
		                  y: 0,
		                  x2: 0,
		                  y2: 1,
		                  colorStops: [{
		                      offset: 0, color: '#FFA8C5' // 0% 处的颜色
		                  }, {
		                      offset: 1, color: '#FFF4F8' // 100% 处的颜色
		                  }],
		                  globalCoord: false // 缺省为 false
		                }
		              },
		            },
		          },
		          data:[1,1.5,2.55,1.8,2.31,2.01,2.60]
	        	}]
	        });
	    }
	    
	},
   	mounted() {
        this.drawLine();
        //实现自适应部分
       	this.resizefun = ()=>{
            this.$echarts.init(document.getElementById('myChart')).resize()
        }
        window.addEventListener('resize',this.resizefun)
    },
    //移除事件监听，避免内存泄漏
    beforeDestroy() {
		window.removeEventListener('resize', this.resizefun)
		this.resizefun = null
	},
}
</script>

<style scoped>
/*顶部收益面板*/
.panel {
	width: 100%;
	height: 2.2rem;
	background-image: linear-gradient(#FF8C63, #F93A5B);
	color: #fff;
}
	/*第一行样式*/
	.panel_one {
		text-align: center;
		padding-top: 0.2rem;
		font-size: 0.13rem;
	}
		.panel_one p:nth-child(2) {
			margin-top: 0.1rem;
			font-size: 0.4rem;
		}
	/*第二行样式*/
	.panel_two {
		margin-top: 0.4rem;
		display: flex;
		justify-content: space-around;
		font-size: 0.2rem;
		text-align: center;
	}
		.vertical_line {
			font-size: 0.24rem;
		}
		.panel_two p:nth-child(2) {
			font-size: 0.1rem;
		}

/*七日收益率样式*/
.interest_rate {
	width: 2.9rem;
	height: 0.2rem;
	margin: 0.1rem auto;
	color: #999999;
	font-size: 0.15rem;
}	
	/*曲线图样式*/
	.echarts {
		width: 290px;
		height: 200px;
		margin: 0.1rem auto;
	}

/*三个选项样式*/
.option {
	width: 100%;
	height: 0.6rem;
	padding: 0.12rem 0.15rem;
	color: #999999;
	font-size: 0.13rem;
	font-family: 1000;
	border-top: 0.1rem solid #eeeeee;
	border-bottom: 0.01rem solid #eeeeee;
}
	.option .flex {
		display: flex;
		justify-content: space-between;
	}
	.option img {
		width: 0.16rem;
		height: 0.16rem;
	}
/*第二个样式*/
.option_two {
	margin-top: 0.08rem;
	width: 100%;
	height: 0.6rem;
	padding: 0.12rem 0.15rem;
	color: #999999;
	font-size: 0.13rem;
	font-family: 1000;
	border-bottom: 0.01rem solid #eeeeee;
	border-top: 0.01rem solid #eeeeee;
	line-height: 0.3rem;
}
	.option_two .flex_two {
		display: flex;
		justify-content: space-between;
	}
	.option_two img:nth-child(1) {
		width: 0.3rem;
		height: 0.3rem;
	}
	.option_two img:nth-child(3) {
		width: 0.16rem;
		height: 0.16rem;		
		top: 0.07rem;
	}
	.option_two span {
		flex-grow: 1;
		margin-left: 0.2rem;
	}

/*数据展示样式*/
.data {
	width: 3rem;
	height: 1rem;
	margin: 0.1rem auto;
	border: 0.01rem solid #eeeeee;
}
	.data div {
		display: flex;
		justify-content: space-between;
	}
	.data div p {
		margin-top: 0.12rem;
		margin-left: 0.05rem;
		padding-left: 0.1rem;
		border-left: 0.05rem solid #FF6A3E;
	}
	.data div span {
		margin-top: 0.12rem;
		margin-right: 0.05rem;
	}
		.data div:nth-child(2) p{
			border-left: 0.05rem solid #3E6DFF;
		}
		.data div:nth-child(3) p{
			border-left: 0.05rem solid #3EE6FF;
		}
/*第二个*/
.data_two {
	width: 3rem;
	height: 0.7rem;
	margin: 0.1rem auto;
	border: 0.01rem solid #eeeeee;
}
	.data_two div {
		display: flex;
		justify-content: space-between;
	}
	.data_two div p {
		margin-top: 0.12rem;
		margin-left: 0.05rem;
		padding-left: 0.1rem;
		border-left: 0.05rem solid #FC2D47;
	}
	.data_two div span {
		margin-top: 0.12rem;
		margin-right: 0.05rem;
	}
		.data_two div:nth-child(2) p{
			border-left: 0.05rem solid #FFEB92;
		}
/*第三个*/
.data_three {
	width: 3rem;
	height: 0.43rem;
	margin: 0.1rem auto;
	border: 0.01rem solid #eeeeee;
}
	.data_three div {
		display: flex;
		justify-content: space-between;
	}
	.data_three div p {
		margin-top: 0.12rem;
		margin-left: 0.05rem;
		padding-left: 0.1rem;
		border-left: 0.05rem solid #FBA131;
	}
	.data_three div span {
		margin-top: 0.12rem;
		margin-right: 0.05rem;
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
	.Home {
		padding-bottom: 0.5rem;
	}
	.menu img {
		width: 0.4rem;
		height: 0.4rem;
		top: 0.05rem;
	}
</style>