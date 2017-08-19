import React,{Component} from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

export default class FlexWrapDemo extends Component {
    render() {
        return (
            <View style={Styles.container}>
                <Text style={Styles.subtitle}>flexWrap:nowrap</Text>
                <View style={Styles.box1}>
                    <Text style={Styles.item}>1</Text>
                    <Text style={Styles.item}>2</Text>
                    <Text style={Styles.item}>3</Text>
                    <Text style={Styles.item}>4</Text>
                </View>
                <Text style={Styles.subtitle}>flexWrap:wrap</Text>
                <View style={Styles.box2}>
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
        height: 150,
        backgroundColor: '#333333',
        flexDirection:"row",
        flexWrap:"nowrap",
    },
    box2:{
        height: 150,
        backgroundColor: '#333333',
        flexDirection:"row",
        flexWrap:"wrap",
    },

    item: {
        backgroundColor: "#f0f",
        width:100,
        margin: 4,
        height: 50,
    },
})
