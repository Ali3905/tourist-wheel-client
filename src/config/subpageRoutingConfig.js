import AddDriver from "../pages/subpages/AddDriver"
import Notifications from '../pages/notifications';
import AddCleaner from "../pages/subpages/AddCleaner.jsx";
import AddTechnician from "../pages/subpages/AddTechnician.jsx";
import AddVehicle from "../pages/subpages/AddVehicle.jsx";
import AddDailyRoute from "../pages/subpages/AddDailyRoute.jsx";
import UpdateDailyRoute from "../pages/Vehicle Inspection/UpdateDailyRoute.jsx";
export const SubpageRoutingConfig = [
	
	{
		name: 'Add Driver',
		path: '/addDriver',
		component: <AddDriver />,
	},
	{
		name: 'Add Cleaner',
		path: '/addCleaner',
		component: <AddCleaner />,
	},
	{
		name: 'Add Employee',
		path: '/addEmployee',
		component: <AddCleaner />,
	},
	{
		name: 'Add Technician',
		path: '/addTechnician',
		component: <AddTechnician />,
	},
	{
		name: 'Add Car',
		path: '/addCar',
		component: <AddVehicle />,
	},
	{
		name: 'Add Bus',
		path: '/addBus',
		component: <AddVehicle />,
	},
	{
		name: 'Add Tampo Traveler',
		path: '/addTampo',
		component: <AddVehicle />,
	},
	{
		name: 'Add Truck',
		path: '/addTruck',
		component: <AddVehicle />,
	},
	{
		name: 'Add Daily Route',
		path: '/addDailyRoute',
		component: <AddDailyRoute />,
	},
	{
		name: 'Update Daily Route',
		path: '/updateDailyRoute',
		component: <UpdateDailyRoute />,
	},
	
	{
		name: ' Create Notifications',
		path: '/Notifications',
		component: <Notifications />,
	},
];
