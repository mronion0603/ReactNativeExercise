import React, {Component} from "react";
import {StyleSheet,View,Image,ImageBackground,Text} from "react-native";

export default class ImageDemo extends Component {
    render() {
        return (
            <View style={{ backgroundColor: "#fff", flex: 1, padding: 20}}>
                <Image source={require('../images/vip_account.png')} />

                <Image style={ImageDemoStyle.myimage}
                       source={{uri: 'https://manhua.qpic.cn/vertical/0/21_14_21_96ed95f31667b3966cb0e0521ce13703_1498026084112.jpg/420'}}/>

                <ImageBackground style={{ height: 50, width: 50}} source={require('../images/vip_account.png')}>
                    <Text>Inside</Text>
                </ImageBackground>

            </View>
        )
    }
}

const ImageDemoStyle = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1,
        padding: 20
    },
    myimage: {
        height: 70,
        width: 70,
    },
})