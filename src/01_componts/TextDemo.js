import React, {Component} from "react";
import {View,Text,StyleSheet,} from "react-native";

export default class CompontsTest extends Component {
    render() {
        return (
            <Text style={styles.outerText}>I am outerText!
                <Text style={styles.innerText}>Ou!!!I am innerText!
                </Text>
            </Text>
        )
    }
}

const styles = StyleSheet.create({
    outerText:{
        textAlign:'center',
        color:'red',
        fontSize:28,
        fontFamily:'Cochin'
    },
    innerText: {
        color:'green',
        fontWeight:'bold',
    },
});