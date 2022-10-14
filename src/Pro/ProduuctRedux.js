import React from 'react';
import { connect } from 'react-redux';
import { actFetchProductsRequest } from './redux/action/action';


function ProduuctRedux(props) {
    console.log(props);

    return (
        <div>
            test
            {/* {
                props.product.map((item) => (
                    <p key={item.id}>{item.name}</p>
                ))
            } */}
        </div>
    );
}
const mapDispatchToProps = (dispatch) => {
    return {
        dispatchProduct: (data) => {
            dispatch(actFetchProductsRequest(data))
        },
        // addtocart:(item) =>{
        //     dispatch(actAddToCart(item))
        // }
    }
}
const mapStateToProps = (state) => {
    // console.log(state);
    return {
        product: state._todoProduct,
    }
}



export default connect(mapDispatchToProps, mapStateToProps)(ProduuctRedux);