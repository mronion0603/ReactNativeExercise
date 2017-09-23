import React, { Component } from 'react';
import {
    AppRegistry,
} from 'react-native';
import { StackNavigator  } from 'react-navigation';
import ThirdScreen from "./ThirdScreen";
import TabMainScreen from "./TabMainScreen";

const MyStackNavigation  = StackNavigator({
    Main: {
        screen: TabMainScreen

    },
    Third: {
        screen: ThirdScreen

    },
});
export default MyStackNavigation;