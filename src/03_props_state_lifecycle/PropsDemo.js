import React,{Component} from 'react';
import {
    Text,
    View,
} from 'react-native';

class Car extends Component {
    render() {
        return (
            <View style={ {flexDirection:'row'}}>
                <Text>车名: {this.props.carname}  </Text>
                <Text>车牌号: {this.props.carnumber}</Text>
            </View>
        );
    }
}

export default class CarShop extends Component {
    render() {
        return (
            <View style={ {height:40, backgroundColor:"darkgray"}}>
                <Car carname="benz" carnumber="HGJ1234"/>
                <Car carname="audi" carnumber="HGK7889" />
             </View>
        );
    }
}


