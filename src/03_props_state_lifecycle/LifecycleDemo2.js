import React,{Component} from 'react';
import {
    Text,
    View,
} from 'react-native';

class Greeting extends Component {
    constructor(props) {
        super(props);
        this.state = {name: props.name};
        console.log("constructor");
    }

    componentWillMount(){
       // 在render之前调用
       console.log("componentWillMount");
    }

    componentWillUnMount(){
        console.log("componentWillUnMount");
    }
    componentWillUpdate(nextProps,nextState){
    console.log("componentWillUpdate");
    }
    componentDidUpdate(prevProps,prevState){
        console.log("componentDidUpdate");
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            name: nextProps.name
        });
        console.log("componentWillReceiveProps");
    }
    shouldComponentUpdate(nextProps,nextState) {
        console.log("shouldComponentUpdate");
        return true;
    }

    render() {
        console.log("render");
        return (

            <View style={ {height:40, backgroundColor:"darkgray"}}>
                <Text>Hello {this.state.name} </Text>
            </View>
        );
    }
    changeState(){
        console.log("changeState");
        this.setState({
            name: "React Native"
        });
    }
    componentDidMount() {
        console.log("componentDidMount");
        //this.changeState();
    }

    componentWillUnmount(){
        console.log("componentWillUnmount");
    }
}

export default class LifecycleDemo2 extends Component {
    constructor(props) {
        super(props);
        this.state = {name: "onion"};
    }

    render() {
        return (
            <View >
                <Greeting name ={this.state.name} />
            </View>
        );
    }
    changeState(){
        console.log("parent changeState");
        this.setState({
            name: "xiaofang"
        });
    }
    componentDidMount() {
        console.log("parent componentDidMount");
        this.changeState();
    }
}


