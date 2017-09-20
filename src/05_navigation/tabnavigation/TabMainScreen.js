import React from 'react';
import {
    AppRegistry,
    Text,
    View,
    Button,
    StyleSheet,
    Image,
} from 'react-native';
import SecondScreen from "./SecondScreen";
import { TabNavigator } from "react-navigation";

class TabMainScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Home',
        // Note: By default the icon is only shown on iOS. Search the showIcon option below.
        tabBarIcon: ({ tintColor }) => (
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
        width: 26,
        height: 26,
    },
});

const TabMainScreenNavigator = TabNavigator(
    {
        Main: { screen: TabMainScreen },
        Second: { screen: SecondScreen },
    },
    {
        tabBarPosition: 'top',
        animationEnabled: true,
        tabBarOptions: {
            activeTintColor: '#e91e63',
            showIcon:'true'
        },
    }
);

export default TabMainScreenNavigator;