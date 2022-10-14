// import { applyMiddleware, combineReducers, createStore } from "@reduxjs/toolkit";
// import { productlistReducer } from '../reducer/productreducer';
// import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";




// const reducer = combineReducers({
//     productlist: productlistReducer,
// });

// const initialState = {};

// const middleware = [thunk]

// const store = createStore(
//     reducer,
//     initialState,
//     composeWithDevTools(applyMiddleware(...middleware))
// );

// export default store;

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import ShopApp from '../reducer/productreducer'
const store = createStore(ShopApp, applyMiddleware(thunkMiddleware));
export default store;
