import React from 'react';
import {
    Button,
    View,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
export default class DrawerSecondScreen extends React.Component {
    render() {
        return (
            <View style={{ backgroundColor: "#fff", flex: 1, padding: 20}}>
                <Button
                    onPress={() => this.props.navigation.goBack()}
                    title="Go back home"
                />
            </View>
        );
    }
}


