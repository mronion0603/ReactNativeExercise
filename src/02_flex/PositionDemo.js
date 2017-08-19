import React,{Component} from 'react';
import {
    Text,
    View,
    ScrollView,
    StyleSheet
} from 'react-native';

export default class PositionDemo extends Component {


    render() {
        return (
            <ScrollView>
                <View style={{flex:1}}>
                    <Text>FlexBox布局</Text>
                    <View style={styles.container}>
                        <View style={styles.box1}/>
                        <View style={[styles.box2]}/>
                        <View style={[styles.box3]}/>
                    </View>
                    <Text>第二个元素position=relative,top:20，left:20</Text>
                    <View style={styles.container}>
                        <View style={styles.box1}/>
                        <View style={[styles.box2,{position:'relative',top:20,left:20}]}></View>
                        <View style={styles.box3}/>
                    </View>
                    <Text>第二个元素position=absolute,top:20，left:20</Text>
                    <View style={styles.container}>
                        <View style={styles.box1}/>
                        <View style={[styles.box2,{position:'absolute',top:20,left:20}]}></View>
                        <View style={styles.box3}/>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 180,
        backgroundColor: '#CCCCCC',
        marginBottom: 10,
    },
    box1: {
        width: 50,
        height: 50,
        backgroundColor: '#FF0000'
    },
    box2: {
        width: 50,
        height: 50,
        backgroundColor: '#00FF00'
    },
    box3: {
        width: 50,
        height: 50,
        backgroundColor: '#0000FF'
    }
});

