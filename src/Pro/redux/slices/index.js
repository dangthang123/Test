import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../slices/product-slice';
import cartReducer from '../slices/cart-slice';
import uiReducer from '../slices/ui-slice';

const Store = configureStore({

    reducer: {
        products: productsReducer,
        cart: cartReducer,
        ui: uiReducer
    }
});
export default Store;