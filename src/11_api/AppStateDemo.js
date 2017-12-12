import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    AppState, } from 'react-native';

export default class AppStateDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentAppState: AppState.currentState,
        };
    }
    componentDidMount() {
        AppState.addEventListener('change', this._handleAppStateChange);
    }
    componentWillUnmount() {
        AppState.removeEventListener('change', this._handleAppStateChange);
    }
    _handleAppStateChange = (appState) => {
        console.log('当前状态为:'+appState);
        if (this.state.currentAppState.match(/inactive|background/) && appState === 'active') {
            console.log('App has come to the foreground!')
        }
        this.setState({currentAppState: appState});
    }
    render() {
        return (
            <Text>Current state is: {this.state.currentAppState}</Text>
        );
    }
}