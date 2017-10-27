import React, { Component } from 'react';
import { WebView } from 'react-native';

export default class WebViewSimpleDemo extends Component {
    render() {
        return (
            <WebView
                source={require('./helloworld.html')}
            />
        );
    }
}