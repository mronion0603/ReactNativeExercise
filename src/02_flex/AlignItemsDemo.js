import React,{Component} from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

export default class AlignItemsDemo extends Component {
    render() {
        return (
            <View style={Styles.container}>
                <Text style={Styles.subtitle}>alignItems</Text>
                <View style={Styles.box}>
                    <Text style={Styles.item}>1</Text>
                    <Text style={Styles.item}>2</Text>
                    <Text style={Styles.item}>3</Text>
                    <Text style={Styles.item_flex_end}>4</Text>
                    <Text style={Styles.item}>5</Text>
                </View>
            </View>
        );
    }
}

const Styles = StyleSheet.create({
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
        alignItems:"flex-end", //通过设置flex-start | flex-end | center | stretch;各种值可以看看效果
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
