import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ToastAndroid,
    TouchableHighlight
} from 'react-native';

export default class ToastAndroidDemo extends Component {
    render() {
        return (
            <View>

                <TouchableHighlight
                    style={styles.button}
                    underlayColor="#a5a5a5"
                    onPress={()=>ToastAndroid.show('长时间的toast',ToastAndroid.LONG)}>
                    <Text style={styles.buttonText}>长时间toast</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={styles.button}
                    underlayColor="#a5a5a5"
                    onPress={()=>ToastAndroid.show('短时间的toast',ToastAndroid.SHORT)}>
                    <Text style={styles.buttonText}>短时间toast</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={styles.button}
                    underlayColor="#a5a5a5"
                    onPress={()=>ToastAndroid.showWithGravity('top toast',ToastAndroid.SHORT,ToastAndroid.TOP)}>
                    <Text style={styles.buttonText}>top toast</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={styles.button}
                    underlayColor="#a5a5a5"
                    onPress={()=>ToastAndroid.showWithGravity('center toast',ToastAndroid.SHORT,ToastAndroid.CENTER)}>
                    <Text style={styles.buttonText}>center toast</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={styles.button}
                    underlayColor="#a5a5a5"
                    onPress={()=>ToastAndroid.showWithGravity('bottom toast',ToastAndroid.SHORT,ToastAndroid.BOTTOM)}>
                    <Text style={styles.buttonText}>bottom toast</Text>
                </TouchableHighlight>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    button: {
        margin:5,
        backgroundColor: 'white',
        padding: 15,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#cdcdcd',
    }
});

