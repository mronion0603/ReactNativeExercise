import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class XMLHttpRequestDemo extends Component {

    //初始化
    constructor(props) {
        super(props);
        this.state = {
            responseText: "加载中..."
        };
    }

    //渲染界面
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.item}>{this.state.responseText}</Text>
            </View>
        );
    }

    componentDidMount() {
        this.doXMLHttpRequest();
    }
    //使用XMLHttpRequest请求数据
    doXMLHttpRequest(){
        let request = new XMLHttpRequest();
        request.onreadystatechange = (e) => {
            if (request.readyState !== 4) {
                return;
            }
            if (request.status === 200) {
                this.setState({responseText: request.responseText})
                console.log(request.responseText);
            } else {
                alert("请求失败！");
            }
        };

        request.open('GET', 'http://www.weather.com.cn/data/cityinfo/101010100.html');
        request.send();
    }
}

//样式定义
const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop:25
    },
    item:{
        textAlign: "center",
        fontSize: 16,
        padding: 20
    },
});