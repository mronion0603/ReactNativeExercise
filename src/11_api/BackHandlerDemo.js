import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ToastAndroid,
    Platform,
    BackHandler,
} from 'react-native';
let count=2;
export default class BackHandlerDemo extends Component {
    componentDidMount(){
        if (Platform.OS === 'android') {
            BackHandler.addEventListener('hardwareBackPress', function () {
                if (count >= 1) {
                    ToastAndroid.show('收到点击返回键信息...' + count, ToastAndroid.SHORT);
                    count--;
                    return true;
                } else {
                    return false;
                }
            });
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.instructions}>
                    请点击返回键查看效果...
                </Text>
            </View>
        );
    }
    componentWillUnmount() {
        if (Platform.OS === 'android') {
            BackHandler.removeEventListener('hardwareBackPress',()=>{});
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});