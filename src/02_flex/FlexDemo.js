import React,{Component} from 'react';
import {
    Text,
    View,
} from 'react-native';

export default class FlexDemo extends Component {
    render() {
        return (
            <View style={ {flexDirection:'row',height:40, backgroundColor:"darkgray"}}>
                <View style={ {flex:1,backgroundColor:"red"}}>
                    <Text style={ {fontSize:16}}>flex:1</Text>
                </View>
                <View style={ {flex:2,backgroundColor:"blue"}}>
                    <Text style={ {fontSize:16}}>flex:2</Text>
                </View>
                <View style={ {flex:3,backgroundColor:"green"}}>
                    <Text style={ {fontSize:16}}>flex:3</Text>
                </View>
            </View>
        );
    }
}


