import React, {Component} from "react";
import {View,ScrollView,Image,Text} from "react-native";



export default class ScrollViewDemo extends Component {
    render() {
        return (
            <ScrollView>
                <Text style={{fontSize:40}}>Scroll me please</Text>
                <Image source={require('../images/vip_account.png')} />
                <Image source={require('../images/vip_account.png')} />
                <Image source={require('../images/vip_account.png')} />
                <Image source={require('../images/vip_account.png')} />
                <Image source={require('../images/vip_account.png')} />
                <Text style={{fontSize:96}}>If you like</Text>
                <Image source={require('../images/vip_account.png')} />
                <Image source={require('../images/vip_account.png')} />
                <Image source={require('../images/vip_account.png')} />
                <Image source={require('../images/vip_account.png')} />
                <Image source={require('../images/vip_account.png')} />
                <Text style={{fontSize:96}}>Scrolling down</Text>
                <Image source={require('../images/vip_account.png')} />
                <Image source={require('../images/vip_account.png')} />
                <Image source={require('../images/vip_account.png')} />
                <Image source={require('../images/vip_account.png')} />
                <Image source={require('../images/vip_account.png')} />
                <Text style={{fontSize:96}}>What's the best</Text>
                <Image source={require('../images/vip_account.png')} />
                <Image source={require('../images/vip_account.png')} />
                <Image source={require('../images/vip_account.png')} />
                <Image source={require('../images/vip_account.png')} />
                <Image source={require('../images/vip_account.png')} />
                <Text style={{fontSize:96}}>Framework around?</Text>
                <Image source={require('../images/vip_account.png')} />
                <Image source={require('../images/vip_account.png')} />
                <Image source={require('../images/vip_account.png')} />
                <Image source={require('../images/vip_account.png')} />
                <Text style={{fontSize:80}}>React Native</Text>
            </ScrollView>
        )
    }
}

