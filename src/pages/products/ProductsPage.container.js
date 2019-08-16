import React, { Component } from 'react';
import { connect } from "react-redux";
import { View, Alert, Modal } from "react-native";

import { mainStyle } from "../../styles";
import ProductsPage from './ProductsPage';
import actionTypes from '../../constants/actionTypes';
import { productsList } from "../../constants/productsList";

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (product) => dispatch({ type: actionTypes.ADD_TO_CART, payload: product })
    }
}
const mapStateToProps = state => {
    return {
        cartItems: state.cartProductsReducer
    }
}


class ProductsPageContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addedProducts: productsList,
            cartItem: this.props.cartItems
        }

    }

    addItemToCart = () => {
        this.props.onSubmit(this.state.addedProducts)
        alert('You added the product!')

    }
    render() {
        return (
            <View style={[mainStyle.container]}>
                <ProductsPage
                    addItemToCart={this.addItemToCart}
                    productsList={this.state.addedProducts}
                    cartItem={this.state.cartItem}
                />
            </View>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductsPageContainer);
