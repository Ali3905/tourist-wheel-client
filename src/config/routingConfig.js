import Login from '../pages/login';
import OverView from '../pages/overView/overView';
// import WebsiteManagement from '../pages/WebsiteManagement/WebsiteManagement.jsx';
import OnlineOrders from '../pages/orders/onlineOrders';
import CodOrders from '../pages/orders/codOrders';
import TransferOrders from '../pages/orders/transferOrders';
import SheduledOrders from '../pages/orders/sheduledOrders';
import BulkOrders from '../pages/orders/bulkOrders';
import CreateProducts from '../pages/userScreenManagement/createProducts';
import Createcatogery from '../pages/userScreenManagement/createcatogery';
import CreateBanners from '../pages/userScreenManagement/createBanners/createBanners';
import ListProducts from '../pages/userScreenManagement/listProducts/listProducts';
import Admin from '../pages/peopleManagement/admin';
import Vendor from '../pages/peopleManagement/vendor';
import DeliveryPartner from '../pages/peopleManagement/deliveryPartner';
import Customers from '../pages/peopleManagement/customers';
import Messages from '../pages/messages';
import ShutdownRequest from '../pages/shutdownRequest';
import Payout from '../pages/payout';
import RevertRequest from '../pages/payBackmanagement/revertRequest.jsx';
import Account from '../pages/account';
import Sellers from '../pages/peopleManagement/sellers.jsx'
import LandingPreview from '../pages/userScreenManagement/landingpreview/landingPreview.jsx';
import OnlyPosUsers from '../pages/peopleManagement/onlyPosUsers.jsx';
import TransferHistory from "../pages/transferHistory"
// SubPages 
import AddSubCatorgery from "../pages/subpagesWithoutRoute/addSubCatorgery.jsx";
import AddCatogery from "../pages/subpages/AddCatogery";
import VendorDetails from "../pages/subpages/vendorDetails.jsx"
import AdminDetails from "../pages/subpages/adminDetails.jsx"
import DeliveryPartnerDetails from "../pages/subpages/deliveryPartnerDetails.jsx"
import VendorStocks from "../pages/subpages/vendorStocks.jsx";
import AdminStocks from "../pages/subpages/adminStocks.jsx";
import AddProductForCatogries from "../pages/subpagesWithoutRoute/addProductForCatogries.jsx";
import Details from '../pages/details.jsx'
import Drivers from '../pages/staff/drivers.jsx';
export const LoginRoutingConfig = [
	{ name: 'Login', path: '/', component: <Login /> },
]

export const RoutingConfig = [

	{
		name: 'Overview',
		path: '/Overview',
		component: <OverView />,
	},
	// { name: 'WebsiteManagement', path: '/managewebsite', component: <WebsiteManagement /> },
	{
		name: 'Orders',
		path: '/Orders',
		component: <OnlineOrders />,
	},
	{
		name: 'Drivers',
		path: '/drivers',
		component: <Drivers />,
	},
	{ name: 'CodOrders', path: '/orders/CodOrders', component: <CodOrders /> },

	{
		name: 'TransferOrders',
		path: '/orders/TransferOrders',
		component: <TransferOrders />,
	},
	{ name: 'SheduledOrders', path: '/orders/SheduledOrders', component: <SheduledOrders /> },
	{ name: 'BulkOrders', path: '/orders/BulkOrders', component: <BulkOrders /> },
	{
		name: 'Byzo Products',
		path: '/manage/CreateProducts',
		component: <CreateProducts />,
	},
	{
		name: 'Createcatogery',
		path: '/manage/Createcatogery',
		component: <Createcatogery />,
	},
	{
		name: 'CreateBanners',
		path: '/manage/CreateBanners',
		component: <CreateBanners />,
	},
	{
		name: 'ListProducts',
		path: '/manage/ListProducts',
		component: <ListProducts />,
	},
	{
		name: 'Landing Preview',
		path: '/manage/LandingPreview',
		component: <LandingPreview />,
	},
	{
		name: 'Admin',
		path: '/people/Admin',
		component: <Admin />,
	},
	{
		name: 'Vendor',
		path: '/people/Vendor',
		component: <Vendor />,
	},
	{
		name: 'DeliveryPartner',
		path: '/people/DeliveryPartner',
		component: <DeliveryPartner />,
	},

	{ name: 'Customers', path: '/people/Customers', component: <Customers /> },

	{ name: 'messages', path: '/messages', component: <Messages /> },
	{ name: 'ShutdownRequest', path: '/ShutdownRequest', component: <ShutdownRequest /> },
	{ name: 'Sellers', path: '/Sellers', component: <Sellers /> },

	{
		name: 'PayOut Request',
		path: '/Payout',
		component: <Payout />,
	},

	{
		name: 'Account',
		path: '/Account',
		component: <Account />,
	},
	{
		name: 'Only Pos Users',
		path: '/OnlyPosUsers',
		component: <OnlyPosUsers />,
	},
	{
		name: 'Transfer History',
		path: '/TransferHistory',
		component: <TransferHistory />,
	},
	// SubPages 
	{
		name: 'Add Sub Catogery',
		path: '/AddSubCatogery',
		component: <AddSubCatorgery />,
	},

	{
		name: 'Add Catogery',
		path: '/AddCatogery',
		component: <AddCatogery />,
	},

	{
		name: 'Product of Catogries',
		path: '/ProductsofCatogries',
		component: <AddProductForCatogries />,
	},
	{
		name: 'Vendor Details',
		path: '/VendorsDetails',
		component: <VendorDetails />,
	},
	{
		name: 'Admin Details',
		path: '/AdminDetails',
		component: <AdminDetails />,
	},
	{
		name: 'DeliveryPartner Details',
		path: '/DeliveryPartnerDetails',
		component: <DeliveryPartnerDetails />,
	},
	{
		name: 'Vendor StockList',
		path: '/VendorStockList',
		component: <VendorStocks />,
	},
	{
		name: 'Admin StockList',
		path: '/AdminStockList',
		component: <AdminStocks />,
	},
	{
		name: 'Refund Explaination Request',
		path: '/RevertRefund',
		component: <RevertRequest />,
	},
	{
		name: 'Details',
		path: '/Details/:id',
		component: <Details />,
	},
];
