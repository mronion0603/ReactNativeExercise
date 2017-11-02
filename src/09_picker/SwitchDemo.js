import React, { Component } from 'react';
import { AppRegistry, Text, View,Switch,StyleSheet } from 'react-native';

export default class SwitchDemo extends Component {
    constructor(props) {
        super(props);
        this.state ={
            switchState1: true,
            switchState2: false,
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Switch style={{marginTop:10, marginBottom:10, backgroundColor:'transparent'}}
                        value={this.state.switchState1}
                        onValueChange={ (value) => this.setState({switchState1:value}) }
                        onTintColor='red'
                        thumbTintColor='yellow'
                        tintColor='orange'
                />
                <Switch value={this.state.switchState2}
                        onValueChange={ (value) => this.setState({switchState2:value})}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
        flex: 1
    },
});