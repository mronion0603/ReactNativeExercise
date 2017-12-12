import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    NetInfo, } from 'react-native';

export default class NetInfoDemo extends Component {
    constructor(props){
        super(props);
        this.state = {
            isConnected: null,
            connectionInfo:null,
        };
    }
    componentDidMount() {
        NetInfo.isConnected.addEventListener(
            'change',
            this._handleConnectivityChange
        );
        //检测网络是否连接
        NetInfo.isConnected.fetch().done(
            (isConnected) => { this.setState({isConnected}); }
        );
        //检测网络连接信息
        NetInfo.fetch().done(
            (connectionInfo) => { this.setState({connectionInfo}); }
        );
    }
    componentWillUnmount() {
        NetInfo.isConnected.removeEventListener(
            'change',
            this._handleConnectivityChange
        );
    }
    _handleConnectivityChange(isConnected) {
        console.log((isConnected ? 'online' : 'offline'));
    }
    render() {
        return (
            <View >
                <Text>
                    当前的网络状态:{this.state.isConnected ? '网络在线' : '离线'}
                </Text>
                <Text >
                    当前网络连接类型:{this.state.connectionInfo}
                </Text>
                <Text >
                    当前连接网络是否计费:{NetInfo.isConnectionExpensive === true ? '需要计费' : '不需要'}
                </Text>
            </View>
        );
    }
}
