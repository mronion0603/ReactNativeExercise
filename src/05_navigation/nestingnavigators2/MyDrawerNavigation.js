import React from 'react';
import {
    AppRegistry,
    Text,
    View,
    Button,
    StyleSheet,
    Image,
} from 'react-native';
import TabMainScreen from "./TabMainScreen";
import DrawerSecondScreen from "./DrawerSecondScreen";
import MyStackNavigation from "./MyStackNavigation";
import { DrawerNavigator } from "react-navigation";

const MyDrawerNavigation = DrawerNavigator(
    {
        Home: {
            screen: MyStackNavigation,
            navigationOptions: {
                drawerLabel: 'Home',
                drawerIcon: ({ tintColor }) => (
                    <Image
                        source={require('../../images/color_for_danmu_normal.png')}
                        style={{tintColor: tintColor, width: 24, height: 24,}}
                    />
                ),
            },
        },
        DrawerSecond: {
            screen: DrawerSecondScreen,
            navigationOptions: {
                drawerLabel: 'DrawerSecond',
                drawerIcon: ({ tintColor }) => (
                    <Image
                        source={require('../../images/face_unpress.png')}
                        style={ {tintColor: tintColor, width: 24, height: 24,}}
                    />
                ),
            },
        },
    }
);
export default MyDrawerNavigation;



