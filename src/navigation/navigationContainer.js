import { createStackNavigator, createAppContainer } from "react-navigation";
import React from 'react';
import { View} from 'react-native';

import navigationConstants from "../constants/navigationConstants";
import { HomePage, ProductsPage } from "../pages";
import { ShoppingCartIcon } from "../components";

const AppNavigator = createStackNavigator(
  {
    [navigationConstants.HOME]: HomePage,
    [navigationConstants.PRODUCTS]: ProductsPage,

  },
  {
    initialRouteName: navigationConstants.HOME,
    defaultNavigationOptions: {
      headerStyle: {
        // backgroundColor: colors.navColor,
      },
      headerRight: (
        <View>
          <ShoppingCartIcon />
        </View>
      )
    },
    navigationOptions: {
      gestureResponseDistance: { horizontal: 5000 },

    }
  }
);

export default (NavigationContainer = createAppContainer(AppNavigator));
