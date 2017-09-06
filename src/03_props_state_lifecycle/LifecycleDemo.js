import React,{Component} from 'react';
import {
    Text,
    View,
} from 'react-native';

export default class Greeting extends Component {
    //初始化获取父组件的
    constructor(props) {
        super(props);
        this.state = {name: props.name};
        console.log("constructor");
    }

    // 在render之前调用
    componentWillMount(){
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
        this.changeState();
    }

    componentWillUnmount(){
         console.log("componentWillUnmount");
    }
}




