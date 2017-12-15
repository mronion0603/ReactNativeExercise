import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions,
    } from 'react-native';
var Geolocation = require('Geolocation');
//监听定位的id
var watchID = null
export default class GeolocationDemo extends Component {
    constructor(props){
        super(props);
        this.state = {
            getCurrentPositionResult:null,
            watchPositionResult: null,
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.item} onPress={this.getLocation.bind(this)}>获取位置</Text>
                <Text style={styles.item} onPress={this.beginWatch.bind(this)}>开始监听</Text>
                <Text style={styles.item} onPress={this.stopWatch.bind(this)}>停止监听</Text>
                <Text>{this.state.getCurrentPositionResult}</Text>
                <Text>{this.state.watchPositionResult}</Text>
            </View>
        );
    }


    //获取位置
    getLocation() {
        Geolocation.getCurrentPosition(
            location => {
                let result ="getCurrentPosition:\n"+ "速度：" + location.coords.speed +
                    "\n经度：" + location.coords.longitude +
                    "\n纬度：" + location.coords.latitude +
                    "\n准确度：" + location.coords.accuracy +
                    "\n行进方向：" + location.coords.heading +
                    "\n海拔：" + location.coords.altitude +
                    "\n海拔准确度：" + location.coords.altitudeAccuracy +
                    "\n时间戳：" + location.timestamp+
                    "\n";
                this.setState({
                    getCurrentPositionResult:result,
                });
            },
            error => {
                this.setState({
                    getCurrentPositionResult:"获取位置失败："+ error,
                });
            }
        );
    }
    //开始监听位置变化
    beginWatch() {
        watchID = Geolocation.watchPosition(
            location => {
                let result ="watchPosition:\n"+ "速度：" + location.coords.speed +
                    "\n经度：" + location.coords.longitude +
                    "\n纬度：" + location.coords.latitude +
                    "\n准确度：" + location.coords.accuracy +
                    "\n行进方向：" + location.coords.heading +
                    "\n海拔：" + location.coords.altitude +
                    "\n海拔准确度：" + location.coords.altitudeAccuracy +
                    "\n时间戳：" + location.timestamp;
                this.setState({
                    watchPositionResult:result,
                });
            },
            error => {
                this.setState({
                    getCurrentPositionResult:"获取位置失败："+ error,
                });
            }
        );
    }
    //停止监听位置变化
    stopWatch() {
        Geolocation.clearWatch(watchID);
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop:25
    },
    item:{
        margin:10,
        height:30,
        borderWidth:1,
        padding:6,
        borderColor:'#ddd',
        textAlign:'center'
    },
});