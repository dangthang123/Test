import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartDrawerVisible: false
};

const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        toggle(state) {
            state.cartDrawerVisible = !state.cartDrawerVisible;
        }
    }
});

const uiReducer = uiSlice.reducer;

export const { toggle } = uiSlice.actions;

export default uiReducer;