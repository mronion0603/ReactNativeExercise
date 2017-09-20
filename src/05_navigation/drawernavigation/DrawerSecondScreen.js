import React from 'react';
import {
    AppRegistry,
    Text,
    View,
    Button,
    StyleSheet,
    Image,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
export default class DrawerSecondScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Notifications',
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('../../images/face_unpress.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };

    render() {
        return (
            <Button
                onPress={() => this.props.navigation.goBack()}
                title="Go back home"
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

