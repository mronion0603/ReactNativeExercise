import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions, } from 'react-native';

export default class DimensionsDemo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.content}>
                    width:{Dimensions.get('window').width}
                </Text>
                <Text style={styles.content}>
                    height:{Dimensions.get('window').height}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    content: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});