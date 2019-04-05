/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component, Fragment} from 'react';
import { StatusBar } from 'react-native';
import { createDrawerNavigator , createAppContainer,} from 'react-navigation';
import { Provider } from 'react-redux';
import HomeScreen from './src/views/Home';
import Settings from './src/views/Settings';
import StoreConfig from './src/configs/StoreConfigs';
// import FlashMessage from 'react-native-flash-message'

const UnRegisteredNavigator = createDrawerNavigator({

  Home: { screen: HomeScreen },
  Settings: { screen: Settings },
  }, {
      cardStyle: {
          backgroundColor: 'white'
      },
      headerMode: "none",
      mode: 'modal',
      navigationOptions: {
          gesturesEnabled: false,
      },
  });

let RootNavigator = createAppContainer(UnRegisteredNavigator);

const App = () => (
  <Provider store={StoreConfig}>
     <Fragment>               
       <StatusBar backgroundColor="rgba(247,158,190,0.7)"
                  barStyle="light-content"
                  translucent={false}
          />
          <RootNavigator />
          {/* <FlashMessage position="top" /> */}
      </Fragment>
  </Provider>
);

export default App;
