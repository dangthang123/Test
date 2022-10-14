import { createSlice } from '@reduxjs/toolkit';
import Api2 from '../../../Api/Api2';
// import _products from '../slices/data';

const initialState = { loading: false, list: [] };

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        startFetch(state) {
            state.loading = true;
        },
        save(state, action) {
            const { payload } = action;
            state.loading = false;
            state.list = payload;
        }
    }
});

export const { startFetch, save } = productsSlice.actions;


export const fetchProducts = () => async (dispatch) => {
    const api2 = Api2();
    const _products = api2;
    dispatch(save([]));
    dispatch(startFetch());

    const products = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(_products);
        }, 800);
    });

    dispatch(save(products));
};

const productsReducer = productsSlice.reducer;

export default productsReducer;