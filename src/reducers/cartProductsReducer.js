import actionTypes from "../constants/actionTypes";

const CartItems = (state = [], action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            return [
           ...state,
           action.payload 
            ]
        case actionTypes.REMOVE_FROM_CART:
            return state.filter(cartItem => cartItem.id !== action.payload.id)

    }
    return state
}

export default CartItems;