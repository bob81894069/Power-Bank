import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Device from '../components/Device.vue'
import Order from '../components/Order.vue'
import Outlets from '../components/Outlets.vue'
import User from '../components/User.vue'
// 登录子页面
import Login from '../components/login/Login.vue'
import Change_password from '../components/login/Change_password.vue'
import Reset_password from '../components/login/Reset_password.vue'
import Set_password from '../components/login/Set_password.vue'
import Verify_phone from '../components/login/Verify_phone.vue'
import Change_user from '../components/login/Change_user.vue'
// 个人中心子页面
import User_set from '../components/user_center/User_set.vue'
import Profit_recording from '../components/user_center/Profit_recording.vue'
import Pro from '../components/user_center/Pro.vue'
import Withdrawal_one from '../components/user_center/Withdrawal_one.vue'
import Withdrawal_two from '../components/user_center/Withdrawal_two.vue'
import Withdrawal_three from '../components/user_center/Withdrawal_three.vue'
import Add_bank from '../components/user_center/Add_bank.vue'
// 首页子页面
import Backstage from '../components/home_subpage/Backstage.vue'
import Profit_inventory from '../components/home_subpage/Profit_inventory.vue'
import Proxy_manage from '../components/home_subpage/Proxy_manage.vue'
import Proxy_edit from '../components/home_subpage/Proxy_edit.vue'
import Profit_total from '../components/home_subpage/Profit_total.vue'
import New_proxy from '../components/home_subpage/New_proxy.vue'
// 设备子页面
import Device_details from '../components/device_subpage/Device_details.vue'
// 订单子页面
import Order_details from '../components/order_subpage/Order_details.vue'
// 网点子页面
import View_outlets from '../components/outlets_subpage/View_outlets.vue'
import View_binding from '../components/outlets_subpage/View_binding.vue'
import View_details from '../components/outlets_subpage/View_details.vue'
import Money_set from '../components/outlets_subpage/Money_set.vue'
import New_outlets from '../components/outlets_subpage/New_outlets.vue'
import Edit_outlets from '../components/outlets_subpage/Edit_outlets.vue'


Vue.use(VueRouter)

const routes = [
	// 主页面
	{ path: '/', component: Home },
	{ path: '/Device', component: Device },
	{ path: '/Order', component: Order },
	{ path: '/Outlets', component: Outlets },
	{ path: '/User', component: User },
	// 登录子页面
	{ path: '/Login', component: Login },
	{ path: '/Change_password', component: Change_password },
	{ path: '/Reset_password', component: Reset_password },
	{ path: '/Set_password', component: Set_password },
	{ path: '/Verify_phone', component: Verify_phone },
	{ path: '/Change_user', component: Change_user },
	// 个人中心子页面
	{ path: '/User_set', component: User_set },
	{ path: '/Profit_recording', component: Profit_recording },
	{ path: '/Pro', component: Pro },
	{ path: '/Withdrawal_one', component: Withdrawal_one },
	{ path: '/Withdrawal_two', component: Withdrawal_two },
	{ path: '/Withdrawal_three', component: Withdrawal_three },
	{ path: '/Add_bank', component: Add_bank },
	//	首页子页面
	{ path: '/Backstage', component: Backstage },
	{ path: '/Profit_inventory', component: Profit_inventory },
	{ path: '/Proxy_manage', component: Proxy_manage },
	{ path: '/Proxy_edit', component: Proxy_edit },
	{ path: '/Profit_total', component: Profit_total },
	{ path: '/New_proxy', component: New_proxy },
	// 设备子页面
	{ path: '/Device_details', component: Device_details },
	// 订单子页面
	{ path: '/Order_details', component: Order_details },
	// 网点子页面
	{ path: '/View_outlets', component: View_outlets },
	{ path: '/View_binding', component: View_binding },
	{ path: '/View_details', component: View_details },
	{ path: '/Money_set', component: Money_set },
	{ path: '/New_outlets', component: New_outlets },
	{ path: '/Edit_outlets', component: Edit_outlets }
]

const router = new VueRouter({
  routes
})

export default router
