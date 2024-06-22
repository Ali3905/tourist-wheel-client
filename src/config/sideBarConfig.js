import OverView from "../assets/overview.svg"
import WebsiteManagement from "../assets/Group 427320877.png"
import OrderManagement from "../assets/Group 427320877.png"
import UserScreenManagement from "../assets/Group 427320877.png"
import PeopleManagement from "../assets/Group 427320877.png"
import DiscountManagement from "../assets/Group 427320877.png"
import Messages from "../assets/Group 427320877.png"
import ShutDownRequest from "../assets/Group 427320877.png"
import ThemeManageMent from "../assets/Group 427320877.png"
import Refund from "../assets/Group 427320877.png"
import Notification from "../assets/Group 427320877.png"

export const SideMenuConfig = {
	0: {
		title: 'Overview',
		path: '/Overview',
		icon: OverView,
	},
	1: {
		title: 'Booking Details',
		path: '/managewebsite',
		icon: WebsiteManagement
	},
	
	2: {
		title: 'Staff Management',
		icon: OrderManagement,
		child: {
			3: { title: 'Staff Details', path: '/Orders' },
			4: { title: 'Drivers List', path: '/drivers' },
			5: { title: 'Cleaners List', path: '/orders/TransferOrders' },
		},
	},
	8: {
		title: 'Vehicle Management',
		icon: UserScreenManagement,
		child: {
			9: { title: 'Add Car', path: '/manage/CreateProducts' },
			10: { title: 'Add Truck', path: '/manage/Createcatogery' },
			11: { title: 'Add Tampo Travaler', path: '/manage/ListProducts' },
			12: { title: 'Add Truck', path: '/manage/CreateBanners' },
			13: { title: 'All Vehicles', path: '/manage/LandingPreview' },
		},
	},
	14: {
		title: 'Vehicle Transaction',
		icon: PeopleManagement,
		child: {
			15: { title: 'Sell Vehicle', path: '/people/Admin' },
			16: { title: 'Rent Vehicle', path: '/people/Vendor' },
			// 17: { title: 'Sellers', path: '/Sellers', icon: Messages },
			// 18: { title: 'Delivery Partner', path: '/people/DeliveryPartner' },
			// 19: { title: 'Customers', path: '/people/Customers' },
		},
	},
	20: {
		title: 'Vehicle Inspection',
		icon: DiscountManagement,
		child: {
			21: { title: 'Pre-trip Inspection', path: '/discount/Coupons' },
			22: { title: 'Post-trip Inspection', path: '/discount/Wallets' },
		
		},
	},
	23: {
		title: 'Technician Support',
		icon: DiscountManagement,
		child: {
			24: {
				title: 'Technician Support',
				path: '/Refund',
				icon: Refund,
			},
			// 25: {
			// 	title: 'Revert refund Request',
			// 	path: '/RevertRefund',
			// 	icon: ThemeManageMent,
			// },
			// 26: {
			// 	title: 'Payout Request',
			// 	path: '/Payout',
			// 	icon: ThemeManageMent,
			// },
		},
	},
	
	27: {
		title: 'Vehicle Documents',
		path: '/ShutdownRequest',
		icon: ShutDownRequest,
	},
	28: {
		title: 'Vehicle Maintainance',
		path: '/Notifications',
		icon: Notification,
	},
	29: {
		title: 'Available Drivers',
		path: '/onlyPosUSers',
		icon: Notification,
	},
	30: {
		title: 'Daily Vehicles',
		path: '/TransferHistory',
		icon: Notification,
	},
	31: {
		title: 'Tour Vehicles',
		path: '/TransferHistory',
		icon: Notification,
	},
};