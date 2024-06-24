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
			3: { title: 'Employees List', path: '/employees' },
			4: { title: 'Drivers List', path: '/drivers' },
			5: { title: 'Cleaners List', path: '/cleaners' },
		},
	},
	8: {
		title: 'Vehicle Management',
		path: "/vehicles",
		icon: UserScreenManagement,
	},
	14: {
		title: 'Vehicle Transaction',
		icon: PeopleManagement,
		child: {
			15: { title: 'Rent Vehicle', path: '/rentVehicles' },
			16: { title: 'Sell Vehicle', path: '/sellVehicles' },
		},
	},
	20: {
		title: 'Vehicle Inspection',
		icon: DiscountManagement,
		child: {
			21: { title: 'Daily Route', path: '/dailyRoutes' },
			22: { title: 'Vehicle Package Booking', path: '/packageBooking' },
		
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
		path: '/availableDrivers',
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
	32 : {
		title : "Technician Support",
		path : "/technicians",

	}
};
