import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
} from 'react-native';

import ToastModuleAndroid from './ToastModuleAndroid';

export default class ModulesDemo extends Component {
    render() {
        return (
            <View>
                <TouchableHighlight
                    style={styles.button}
                    underlayColor="#a5a5a5"
                    onPress={()=>ToastModuleAndroid.show("调用Android ToastModule弹出消息",ToastModuleAndroid.LONG)}>
                    <Text style={styles.buttonText}>自定义Toast</Text>
                </TouchableHighlight>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    button: {
        margin:5,
        backgroundColor: 'white',
        padding: 15,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#cdcdcd',
    },
});
 