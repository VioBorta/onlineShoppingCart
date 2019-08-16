import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native'
import { Icon, Badge } from 'react-native-elements';
import styles from './ShoppingCartIcon.style';

export default class ShoppingCartIcon extends Component {

    render() {
        const { cartItem } = this.props;
        return (
            <View style={[styles.view, Platform.OS == 'android' ? styles.iconContainer : null]}>
                <View style={styles.bagde}>
                    <Text style={styles.cartItemsNumber}>{cartItem.length}</Text>
                </View>
                <Icon
                    name="cart-plus"
                    size={30}
                    color="black"
                    type="font-awesome" />
            </View>
        )
    }
}