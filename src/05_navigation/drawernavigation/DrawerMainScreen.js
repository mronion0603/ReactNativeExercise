import React from 'react';
import {
    AppRegistry,
    Text,
    View,
    Button,
    StyleSheet,
    Image,
} from 'react-native';
import DrawerSecondScreen from "./DrawerSecondScreen";
import { DrawerNavigator } from "react-navigation";


class DrawerMainScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Home',
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('../../images/color_for_danmu_normal.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };

    render() {
        return (
            <Button
                onPress={() => this.props.navigation.navigate('Second')}
                title="Go to Second"
            />
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    },
});

const DrawerMainScreenNavigator = DrawerNavigator(
    {
       Home: {
        screen: DrawerMainScreen,
       },
       Second: {
        screen: DrawerSecondScreen,
       },
    }
);
export default DrawerMainScreenNavigator;