import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Platform,
} from 'react-native';

export default class FrameAnimationDemo extends Component {
    constructor(props){
        super(props);
        this.state = {
            width:200,
            height: 20,
        };
        this._onPress = this._onPress.bind(this);
    }

    _onPress() {
        var count = 0;
        while(++count<30){
            requestAnimationFrame(()=>{
                // this.setState({
                //     width: this.state.width + 1,
                //     height: this.state.height + 1
                // });
                this.refs.view1.setNativeProps({
                    style: {
                        width: this.state.width++,
                        height: this.state.height++
                    }
                });
            });

        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View ref="view1" style={[styles.content, {width: this.state.width, height: this.state.height}]}>
                    <Text style={[{textAlign: 'center'}]}>Hello World!</Text>
                </View>
                <TouchableOpacity style={styles.content} onPress={this._onPress}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Press me!</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        marginTop:25,
        flex: 1,
    },
    content: {
        backgroundColor: 'rgba(200, 230, 255, 0.8)',
        marginBottom:10,
        justifyContent:"center",
        alignSelf:"center",
    },
    button: Platform.select({
        ios: {},
        android: {
            elevation: 4,
            // Material design blue from https://material.google.com/style/color.html#color-color-palette
            backgroundColor: '#2196F3',
            borderRadius: 2,
            width:100,
            height:30,
        },
        justifyContent:"center",
        alignSelf:"center",
    }),
    buttonText: {
        alignSelf:"center",
    }
});