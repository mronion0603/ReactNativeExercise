import React,{Component} from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

export default class AlignSelfDemo extends Component {
    render() {
        return (
            <View style={AlignSelfDemoStyle.container}>
                <Text style={AlignSelfDemoStyle.subtitle}>alignSelf</Text>
                <View style={AlignSelfDemoStyle.box}>
                    <Text style={AlignSelfDemoStyle.item}>1</Text>
                    <Text style={AlignSelfDemoStyle.item}>2</Text>
                    <Text style={AlignSelfDemoStyle.item}>3</Text>
                    <Text style={AlignSelfDemoStyle.item_flex_end}>4</Text>
                    <Text style={AlignSelfDemoStyle.item}>5</Text>
                </View>
            </View>
        );
    }
}

const AlignSelfDemoStyle = StyleSheet.create({
    container: {
        backgroundColor: "#0ff",
        height: 300,
    },
    subtitle:{
        backgroundColor: '#ffffff',
        alignItems: 'center'
    },
    box:{
        flex: 1,
        backgroundColor: '#333333',
        flexDirection:"row",
    },
    item: {
        backgroundColor: "#f0f",
        flexGrow: 1,
        margin: 4,
        height: 100,
    },
    item_flex_end: {
        backgroundColor: "#f0f",
        flexGrow: 1,
        margin: 4,
        height: 100,
        alignSelf: "flex-end",
    }
})
