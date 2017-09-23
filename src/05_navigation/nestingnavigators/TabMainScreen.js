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
        headerTitle:'Main',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../../images/color_for_danmu_normal.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };

    render() {
        return (
            <View style={{ backgroundColor: "#fff", flex: 1, padding: 20}}>
                <Button
                    onPress={() => this.props.navigation.navigate('Third',{ user: 'Lucy' })}
                    title="Go to Third"
                />
                <View style={{ backgroundColor: "#fff", height: 20}}/>
                <Button
                    onPress={() => this.props.navigation.navigate('Second')}
                    title="Go to Second"
                />
            </View>

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
        tabBarPosition: 'bottom',
        animationEnabled: true,
        tabBarOptions: {
            activeTintColor: '#e91e63',
            showIcon:'true'
        },
    }
);

export default TabMainScreenNavigator;