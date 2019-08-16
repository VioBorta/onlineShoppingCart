import React, { Component } from 'react'
import { Provider } from "react-redux";

import createStore from './src/store';
import NavigationContainer from "./src/navigation/navigationContainer";
import NavigationService from "./src/navigation/navigationService";

// import { Font, AppLoading } from "expo";

const store = createStore;
store.subscribe(() => {
  const state = store.getState();
  console.log(state);
});


export default class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     fontLoaded: false
  //   };
  // }
  // async componentDidMount() {
  //   await Font.loadAsync({
    
  //   });
  //   this.setState({ fontLoaded: true });
  // }

  render() {
    // const { fontLoaded } = this.state;
    // if (!fontLoaded) {
    //   return <AppLoading />;
    // }
      return(<Provider store={store}>
        <NavigationContainer
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
        </Provider>
     )
  }
}
