import React,{Component} from 'react';
import {
    Text,
    View,
} from 'react-native';

class Car extends Component {
    constructor (props) {
        super(props);
        this.state = {
            price: props.defaultprice
        };
    }
    //每次点击价格，价格加10万
    _setPrice() {
        this.setState(previousState => {
            return { price: previousState.price+10 };
        });
    }
    render() {
        return (
            <View style={ {flexDirection:'row'}}>
                <Text>车名: {this.props.carname}  </Text>
                <Text>车牌号: {this.props.carnumber}  </Text>
                <Text onPress={this._setPrice.bind(this)} style={{ backgroundColor:"yellow"}}>
                    价格: {this.state.price} 万</Text>
            </View>
        );
    }
}

export default class StateDemo extends Component {
    render() {

        return (
            <View style={ {height:40, backgroundColor:"darkgray"}}>
                <Car carname="benz" carnumber="HGJ1234" defaultprice={25} />
                <Car carname="audi" carnumber="HGK7889" defaultprice={20} />
            </View>
        );
    }
}


