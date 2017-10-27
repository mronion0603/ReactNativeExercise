import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Alert,
    WebView,
} from 'react-native';

export default class WebViewCommunication extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <WebView
                    ref={(webview) => this.webview = webview}
                    source={require('./messaging.html')}
                    onMessage={this._onMessage}
                />
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={this._postMessage}
                    style={[{backgroundColor: '#38acff',  padding: 20, }]}>
                    <Text>从RN传递数据到HTML</Text>
                </TouchableOpacity>
            </View>
        );
    }

    //接收HTML发出的数据
    _onMessage = (e) => {
        Alert.alert(e.nativeEvent.data);
    }

    //向HTML发送数据
    _postMessage = () => {
        this.webview.postMessage('我是React Native发送过来的数据');
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ff0000"
    },
});