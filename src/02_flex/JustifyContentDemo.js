import React,{Component} from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

export default class JustifyContentDemo extends Component {
    render() {
        return (
            <View style={Styles.container}>
                <Text style={Styles.subtitle}>JustifyContent:flex-start</Text>
                <View style={Styles.box1}>
                    <Text style={Styles.item}>1</Text>
                    <Text style={Styles.item}>2</Text>
                    <Text style={Styles.item}>3</Text>
                </View>
                <Text style={Styles.subtitle}>JustifyContent:flex-end</Text>
                <View style={Styles.box2}>
                    <Text style={Styles.item}>1</Text>
                    <Text style={Styles.item}>2</Text>
                    <Text style={Styles.item}>3</Text>
                </View>
                <Text style={Styles.subtitle}>JustifyContent:center</Text>
                <View style={Styles.box3}>
                    <Text style={Styles.item}>1</Text>
                    <Text style={Styles.item}>2</Text>
                    <Text style={Styles.item}>3</Text>
                </View>
                <Text style={Styles.subtitle}>JustifyContent:space-between</Text>
                <View style={Styles.box4}>
                    <Text style={Styles.item}>1</Text>
                    <Text style={Styles.item}>2</Text>
                    <Text style={Styles.item}>3</Text>
                </View>
                <Text style={Styles.subtitle}>JustifyContent:space-around</Text>
                <View style={Styles.box5}>
                    <Text style={Styles.item}>1</Text>
                    <Text style={Styles.item}>2</Text>
                    <Text style={Styles.item}>3</Text>
                </View>
            </View>
        );
    }
}
const Styles = StyleSheet.create({
    container: {
        backgroundColor: "#0ff",
        flex: 1,
    },
    subtitle:{
        backgroundColor: '#ffffff',
        alignItems: 'center'
    },
    box1:{
        height: 100,
        backgroundColor: '#333333',
        flexDirection:"row",
        justifyContent:"flex-start",
    },
    box2:{
        height: 100,
        backgroundColor: '#333333',
        flexDirection:"row",
        justifyContent:"flex-end",
    },
    box3:{
        height: 100,
        backgroundColor: '#333333',
        flexDirection:"row",
        justifyContent:"center",
    },
    box4:{
        height: 100,
        backgroundColor: '#333333',
        flexDirection:"row",
        justifyContent:"space-between",
    },
    box5:{
        height: 100,
        backgroundColor: '#333333',
        flexDirection:"row",
        justifyContent:"space-around",
    },
    item: {
        backgroundColor: "#f0f",
        width:50,
        margin: 4,
        height: 50,
    },
})
