import React, { Component } from 'react';
import {
    AppRegistry,
    Button,
} from 'react-native';
import { StackNavigator  } from 'react-navigation';
import ThirdScreen from "./ThirdScreen";
import TabMainScreen from "./TabMainScreen";

const MyStackNavigation  = StackNavigator({
    Main: {
        screen: TabMainScreen,
        navigationOptions:({ navigation }) => ({
            headerTitleStyle:{
                alignSelf:'center',
            },
            headerLeft: (
                <Button
                    title='Menu'
                    onPress={() => navigation.navigate('DrawerOpen')}
                />
            ),
        }),
    },
    Third: {
        screen: ThirdScreen,
        navigationOptions:({ navigation }) => ({
            headerTitleStyle:{
                alignSelf:'center',
            },
            headerLeft: (
                <Button
                    title='Menu'
                    onPress={() => navigation.navigate('DrawerOpen')}
                />
            ),
        }),
    },

});
export default MyStackNavigation;