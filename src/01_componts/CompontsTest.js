import React, {Component} from "react";
import {StyleSheet,View, Text,Image,ImageBackground,Button,Alert,} from "react-native";

const onButtonPress = () => {
    Alert.alert('Button has been pressed!');
};

export default class CompontsTest extends Component {
    render() {
        return (
            <View style={{ backgroundColor: "#fff", flex: 1, padding: 20}}>
                <Text style={CompontsTestStyle.subtitle}>CompontsTest</Text>
                <Button
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                    title="Press Me"
                    onPress={onButtonPress}
                />
                <Image source={require('../images/vip_account.png')} />
                <Image style={CompontsTestStyle.myimage}
                       source={{uri: 'https://manhua.qpic.cn/vertical/0/21_14_21_96ed95f31667b3966cb0e0521ce13703_1498026084112.jpg/420'}}/>
                <ImageBackground style={{height:50,width:50}} source={require('../images/vip_account.png')}>
                    <Text>Inside</Text>
                </ImageBackground>
                <View style={{flex: 1,flexDirection:"row", backgroundColor: 'powderblue'}}/>

                <View style={{flex: 2, backgroundColor: 'skyblue'}} />

                <View style={{flex: 3, backgroundColor: 'steelblue'}} />
            </View>
        )
    }
}

const CompontsTestStyle = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1,
        padding: 20
    },
    subtitle:{
        backgroundColor: '#ffffff',
        alignItems: 'center',
        fontSize: 16,
    },
    box01:{
        height: 80,
        backgroundColor: '#333333',
        alignItems: 'center'
    },
    box02:{
        height: 80,
        backgroundColor: '#333333',
        justifyContent: 'center'
    },
    box03:{
        flex: 1,
        backgroundColor: '#333333',
        flexDirection:"row",
    },
    myimage: {
        height: 50,
        width: 50,
    },
})