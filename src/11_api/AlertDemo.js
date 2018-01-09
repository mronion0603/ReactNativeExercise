import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Alert,
    Button,
    ToastAndroid,
    TouchableHighlight,
} from 'react-native';

export default class AlertDemo extends Component {
    render() {
        return (
            <View>
                <Button  title='默认Alert'
                              onPress={()=>Alert.alert('提醒','确定退出吗?')}
                />
                <Button  title='两个按钮的Alert'
                              onPress={()=>Alert.alert('提醒','确定退出吗?',[
                                  {text:'取消',onPress:()=>ToastAndroid.show('取消',ToastAndroid.SHORT)},
                                  {text:'确定',onPress:()=>ToastAndroid.show('确定',ToastAndroid.SHORT)}
                              ])}
                />
                <Button  title='三个按钮的Alert'
                              onPress={()=>Alert.alert('提醒','确定退出吗?',[
                                  {text:'One',onPress:()=>ToastAndroid.show('One',ToastAndroid.SHORT)},
                                  {text:'Two',onPress:()=>ToastAndroid.show('Two',ToastAndroid.SHORT)},
                                  {text:'Three',onPress:()=>ToastAndroid.show('Three',ToastAndroid.SHORT)}
                              ])}
                />
            </View>
        );
    }
}
