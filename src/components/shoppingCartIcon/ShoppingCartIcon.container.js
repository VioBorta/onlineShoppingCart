import React, { Component } from 'react';
import { connect } from "react-redux";
import { View, Alert, Modal } from "react-native";
import { mainStyle } from "../../styles";
import ShoppingCartIcon from "./ShoppingCartIcon";


const mapStateToProps = state => {
    return {
        cartItems: state.cartProductsReducer
    }
}

class ShoppingCartIconContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartItem: this.props.cartItems
        }
    }
    render() {
        return (
            <View style={[mainStyle.container]}>
                <ShoppingCartIcon
                    cartItem={this.state.cartItem}
                />
            </View>
        );
    }
}

export default connect(
    mapStateToProps,
)(ShoppingCartIconContainer);
