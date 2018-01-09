import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    AlertIOS,
} from 'react-native';

export default class AlertIOSDemo extends Component {
    render() {
        return (
            <View style={{backgroundColor:'#b9b9b9',flex:1}}>

                <Text style={{color:'white',height:20,marginTop:5,marginLeft:5}}>AlertIOS.Alert实例:</Text>
                <Text style={styles.item} onPress={()=>AlertIOS.alert('标题','Message')}>一个带有标题和信息默认弹出框</Text>
                <Text style={styles.item} onPress={()=>AlertIOS.alert('标题','Message',[
                    {text:'取消',onPress:()=>console.log('点击了取消'),style:'cancel'},
                    {text:'确定',onPress:()=>console.log('点击了确定'),style:'default'}
                ])}>两个按钮的弹出框</Text>
                <Text style={{color:'white',height:20,marginTop:10,marginLeft:5}}>AlertIOS.Prompt实例:</Text>
                <Text style={styles.item} onPress={()=>AlertIOS.prompt('提醒','请输入相关信息')}>默认提醒框</Text>
                <Text style={styles.item} onPress={()=>AlertIOS.prompt('提醒','请输入密码',[
                    {text:'取消',onPress:()=>console.log('点击了取消'),style:'cancel'},
                    {text:'确定',onPress:()=>console.log('点击了确定'),style:'default'}
                ],'secure-text')}>两个按钮带密码输入框的弹出框-</Text>
                <Text style={styles.item} onPress={()=>AlertIOS.prompt('提醒','请输入相关信息',[
                    {text:'取消',onPress:()=>console.log('点击了取消'),style:'cancel'},
                    {text:'确定',onPress:()=>console.log('点击了确定'),style:'default'}
                ],'plain-text','默认信息')}>两个按钮的弹出框-输入框存在默认信息</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    item:{
        margin:10,
        height:30,
        borderWidth:1,
        padding:6,
        borderColor:'#ddd',
        textAlign:'center'
    },
});