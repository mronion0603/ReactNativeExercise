import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import HelloWorldIOS from './HelloWorldIOS';

export default class HelloWorldIOSDemo extends Component {
    onPress(){
        HelloWorldIOS.hello('Jack');
    }
    render() {
        return (
            <View style={{marginTop:40}}>
                <Button onPress={this.onPress.bind(this)} title="Hello" />
            </View>
        );
    }
}

 