import AddVendor from "../pages/subpages/addVendor"
import AddAdmin from "../pages/subpages/addAdmin"
import AddDeliveryPartner from "../pages/subpages/addDeliveryPartner"
import Refund from '../pages/refund';
import AddProduct from "../pages/subpages/addProduct/addProduct.jsx";
import Coupons from '../pages/discountManagement/coupons';
import Wallets from '../pages/discountManagement/wallets';
import AddSeller from "../pages/subpages/addSeller.jsx";
import Notifications from '../pages/notifications';
export const SubpageRoutingConfig = [
	
	{
		name: 'Add Vendor',
		path: '/addVendor',
		component: <AddVendor />,
	},
	{
		name: 'Add Admin',
		path: '/addAdmin',
		component: <AddAdmin />,
	},
	{
		name: 'Add DeliveryPartner',
		path: '/AddDeliveryPartner',
		component: <AddDeliveryPartner />,
	},
	{
		name: 'Add Seller',
		path: '/AddSeller',
		component: <AddSeller />,
	},
	{
		name: 'Add Product ( convert multiple card in single itself using tags select)',
		path: '/AddProduct',
		component: <AddProduct />,
	},
	{ name: 'Coupons', path: '/discount/Coupons', component: <Coupons />},
	{ name: 'Wallets', path: '/discount/Wallets', component: <Wallets />},
	{ name: 'Refund', path: '/Refund', component: <Refund /> },
	{
		name: ' Create Notifications',
		path: '/Notifications',
		component: <Notifications />,
	},
];
