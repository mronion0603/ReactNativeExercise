import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Keyboard,
    TextInput
    } from 'react-native';

export default class KeyboardDemo extends Component {
    constructor(props){
        super(props);
        this.state = {
            kbState:null,
        };
    }
    componentWillMount () {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow.bind(this));
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide.bind(this));
    }

    componentWillUnmount () {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }

    _keyboardDidShow () {
        this.setState({
            kbState:"Keyboard Shown",
        });
    }

    _keyboardDidHide () {
        this.setState({
            kbState:"Keyboard Hidden",
        });
    }

    render() {
        return (
            <View>
                <TextInput
                    onSubmitEditing={Keyboard.dismiss}
                />
                <Text>{this.state.kbState}</Text>
            </View>
        );
    }
}