import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Tab2 from './Tab2';
import Tab1 from './Tab1';

const SettingsTabs = createBottomTabNavigator({
    Tab1: {
        screen: Tab1,
        navigationOptions: {
            title: "Tab1",
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name="microchip"
                    size={17}
                    color={tintColor} />
            )
        }
    },
    Tab2: {
        screen: Tab2,
        navigationOptions: {
            tabBarLabel: "Tab2",
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name="memory"
                    size={17}
                    color={tintColor} />
            )
        }
    }
});

export default createStackNavigator({ SettingsTabs }, { headerMode: "none" });