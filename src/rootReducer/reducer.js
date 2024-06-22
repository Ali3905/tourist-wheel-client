import { combineReducers } from 'redux';
import headingReducer from '../redux/headingSlice';
import sidebarReducer from '../redux/sidebarSlice';
import popupReducer from '../redux/popupSlice'; 
import statusReducer from '../redux/statusSlice';
import selectedProductsReducer from '../redux/productSlice'; 
import FormDetailsReducer from '../redux/formSlice'
import quantityReducer from '../redux/quantitySlice';
import cartReducer from '../redux/cartSlice';
import drawerReducer from '../redux/drawerSlice';
const rootReducer = combineReducers({
  heading: headingReducer,
  sidebar: sidebarReducer,
  popup: popupReducer, 
  status: statusReducer,
  Products: selectedProductsReducer,
  form : FormDetailsReducer,
  quantity: quantityReducer,
  cart: cartReducer,
  drawer:drawerReducer
});

export default rootReducer;
