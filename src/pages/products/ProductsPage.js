import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { Button, Icon } from 'react-native-elements';

import { mainStyle } from '../../styles';
import styles from './ProductsPage.style';

export default class ProductsPage extends Component {
    render() {
        const { addItemToCart, productsList, cartItem } = this.props;
        return (
            <View style={[mainStyle.flex1, mainStyle.mt_20]}>
                <ScrollView>
                    {productsList.map((product, i) => {
                        return <View key={i} style={styles.alignItemsCenter}>
                            <Image
                                style={styles.productImage}
                                source={{ uri: product.source }}
                            />
                            <View style={mainStyle.mt_20}>
                                <Text>{product.title}</Text>
                            </View>
                            <View style={mainStyle.mt_20}>
                                <Text>{product.price}</Text>
                            </View>
                            <View style={[mainStyle.row, mainStyle.spaceBetween, mainStyle.mt_20]}>
                                <View style={styles.button}>
                                    <Button
                                        icon={
                                            <Icon
                                                name="plus"
                                                size={15}
                                                color="white"
                                                type="font-awesome"
                                            />
                                        }
                                        title="Add to wish List"
                                        style={styles.button}
                                    />
                                </View>
                                <View style={styles.button}>
                                    <Button
                                        containerStyle={cartItem ? styles.buttonRed : styles.buttonGreen}
                                        onPress={() => addItemToCart(product)}
                                        icon={
                                            <Icon
                                                name="cart-plus"
                                                size={15}
                                                color="white"
                                                type="font-awesome"

                                            />
                                        }
                                        title="Add to cart"
                                    />
                                </View>
                            </View>

                        </View>
                    })}
                </ScrollView>
            </View>
        );
    }
}
