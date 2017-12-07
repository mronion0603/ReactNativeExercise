import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    PixelRatio, } from 'react-native';

export default class PixelRatioDemo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.content}>
                    pxielRatio={PixelRatio.get()}
                </Text>
                <Text style={styles.content}>
                    {PixelRatio.getPixelSizeForLayoutSize(200)}
                </Text>
                <Text style={styles.content}>
                    {200*PixelRatio.get()}
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