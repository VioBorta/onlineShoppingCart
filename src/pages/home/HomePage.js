import React, { Component } from 'react';
import { View} from 'react-native';

import { mainStyle } from '../../styles';
import { Gradient, CustomButton } from '../../components';
import navigationService from '../../navigation/navigationService';
import navigationConstants from '../../constants/navigationConstants';

export default class HomePage extends Component {
  render() {
    return (
      <View style={mainStyle.flex1}>
        <Gradient />
        <View style={mainStyle.mt_20}>
          <CustomButton
            title="Go to the products"
            submitAction={() => navigationService.navigate(navigationConstants.PRODUCTS)} />
        </View>
      </View>
    );
  }
}
