import {
    PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL, POST_LIST_REQUEST, POST_LIST_SUCCESS, POST_LIST_FAIL
    , GET_ALL_PRODUCT
} from '../constan/constan';
import callApi from './fetchdata';

// // export function fetchDataRequest() {
// //     return {
// //         type: PRODUCT_LIST_REQUEST
// //     };
// // }

// export function fetchDataSuccess(data) {
//     console.log(data);
//     return {
//         type: PRODUCT_LIST_SUCCESS,
//         data
//     };
// }

// // export function fetchDataError(error) {
// //     return {
// //         type: PRODUCT_LIST_FAIL,
// //         playload: { error }
// //     };
// // }
export const actFetchProductsRequest = () => {
    return (dispatch) => {
        return callApi().then(res => {

            dispatch(GetAllProduct(res.data.data.products.nodes));
        });
    }
}

/*GET_ALL_PRODUCT*/
export function GetAllProduct(payload) {
    console.log(payload);
    return {
        type: GET_ALL_PRODUCT,
        payload
    }
}