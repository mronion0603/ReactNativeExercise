import React, { Component } from 'react';
import { AppRegistry, Text, View,Slider,StyleSheet } from 'react-native';

export default class SwitchDemo extends Component {
    constructor(props) {
        super(props);
        this.state ={
            value:0,
        };
    }

    render() {
        return (
            <View style={{flex:1}}>
                <Slider />
                <Slider disabled={true}/>
                <Slider value={0.3} maximumTrackTintColor='black'/>
                <Slider value={0.4} minimumTrackTintColor='red'/>
                <Slider value={0.5} style={{borderWidth:1,borderColor:'red'}}/>
                <Text>{this.state.value}</Text>
                <Slider minimumValue={5} maximumValue={20} onValueChange={(value)=>{this.setState({value:value})}} onSlidingComplete={(value)=>{this.setState({value:value})}}/>
                <Slider thumbTintColor="red"  step={0.2}/>
            </View>
        );
    }
}
