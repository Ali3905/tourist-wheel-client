// store.js
import { configureStore } from '@reduxjs/toolkit';
import headingReducer from './redux/headingSlice';
import sidebarReducer from './redux/sidebarSlice';
import popupReducer from './redux/popupSlice'; 
import statusReducer from './redux/statusSlice';
import selectedProductsReducer from './redux/productSlice'; 
import FormDetailsReducer from './redux/formSlice'
import quantityReducer from './redux/quantitySlice';
import cartReducer from './redux/cartSlice';
import drawerReducer from './redux/drawerSlice';
import driversSlice from './redux/driversSlice';
import technicianSlice from './redux/technicianSlice';

// Create the Redux store
const store = configureStore({
  reducer: {
    heading: headingReducer,
    sidebar: sidebarReducer,
    popup: popupReducer,
    status: statusReducer,
    Products: selectedProductsReducer,
    form: FormDetailsReducer,
    quantity: quantityReducer,
    cart: cartReducer,
    drawer: drawerReducer,
    drivers : driversSlice,
    technicians : technicianSlice
  },
});

// export const persistor = persistStore(store);

export default store;
