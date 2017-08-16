import React, {Component} from "react";
import {View} from "react-native";



export default class CompontsTest extends Component {
    render() {
        return (
            <View style={{ backgroundColor: "#fff", flex: 1, padding: 20}}>
                <View style={{flex: 1,flexDirection:"row", backgroundColor: 'powderblue'}}/>

                <View style={{flex: 2, backgroundColor: 'skyblue'}} />

                <View style={{flex: 3, backgroundColor: 'steelblue'}} />
            </View>
        )
    }
}

