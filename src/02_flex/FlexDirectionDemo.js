import React,{Component} from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

export default class FlexDirectionDemo extends Component {
    render() {
        return (
            <View style={Styles.container}>
                <Text style={Styles.subtitle}>flexDirectionDemo:row</Text>
                <View style={Styles.box1}>
                    <Text style={Styles.item}>1</Text>
                    <Text style={Styles.item}>2</Text>
                    <Text style={Styles.item}>3</Text>
                    <Text style={Styles.item}>4</Text>
                </View>
                <Text style={Styles.subtitle}>flexDirectionDemo:row-reverse</Text>
                <View style={Styles.box2}>
                    <Text style={Styles.item}>1</Text>
                    <Text style={Styles.item}>2</Text>
                    <Text style={Styles.item}>3</Text>
                    <Text style={Styles.item}>4</Text>
                </View>
                <Text style={Styles.subtitle}>flexDirectionDemo:column</Text>
                <View style={Styles.box3}>
                    <Text style={Styles.item}>1</Text>
                    <Text style={Styles.item}>2</Text>
                    <Text style={Styles.item}>3</Text>
                    <Text style={Styles.item}>4</Text>
                </View>
                <Text style={Styles.subtitle}>flexDirectionDemo:column-reverse</Text>
                <View style={Styles.box4}>
                    <Text style={Styles.item}>1</Text>
                    <Text style={Styles.item}>2</Text>
                    <Text style={Styles.item}>3</Text>
                    <Text style={Styles.item}>4</Text>
                </View>
            </View>
        );
    }
}
const Styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff",
        flex: 1,
    },
    subtitle:{
        backgroundColor: '#ffffff',
        alignItems: 'center'
    },
    box1:{
        height: 60,
        backgroundColor: '#333333',
        flexDirection:"row",
    },
    box2:{
        height: 60,
        backgroundColor: '#333333',
        flexDirection:"row-reverse",
    },
    box3:{
        height: 180,
        backgroundColor: '#333333',
        flexDirection:"column",
    },
    box4:{
        height: 180,
        backgroundColor: '#333333',
        flexDirection:"column-reverse",
    },
    item: {
        backgroundColor: "#f0f",
        width:30,
        margin: 4,
        height: 30,
    },
})
