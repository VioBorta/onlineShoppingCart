
import { StyleSheet, Platform, StatusBar, Dimensions } from 'react-native'

export default styles = StyleSheet.create({
    header: {
        marginRight: 10
    },
    view: {
        padding: 5
    },
    bagde: {
        position: 'absolute',
        height: 30,
        width: 30,
        borderRadius: 15,
        backgroundColor: 'rgba(95,197,123,0.8)',
        right: 15,
        bottom: 15,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2000,
    },
    cartItemsNumber: {
        color: 'white',
        fontWeight: 'bold'
    }
})
