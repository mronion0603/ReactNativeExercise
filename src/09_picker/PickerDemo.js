import React, { Component } from 'react';
import { AppRegistry, Text, View,Picker } from 'react-native';

export default class PickerDemo extends Component {
    constructor(props) {
        super(props);
        this.state ={
            language:null,
        };
    }

    render() {
        return (
            <Picker
                selectedValue={this.state.language}
                onValueChange={(lang) => this.setState({language: lang})}
                style={{width:200}}
            >
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
            </Picker>
        );
    }
}