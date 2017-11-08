import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    Button,
    AsyncStorage
} from 'react-native';

const {width, height} = Dimensions.get('window');
var data = "";
const AsyncStorageKey = "ASE_";
export default class AsyncStorageExample extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data:""
        };
    }

    setData(text){
        AsyncStorage.setItem(AsyncStorageKey,text,()=>{
            this.setState({
                data:text,
            });
        });
    }

    delData(){
        AsyncStorage.getItem(AsyncStorageKey,(error,text)=>{
            if(text=== null ){
                alert(AsyncStorageKey +"没有对应的值");
            }else{
                //移除键-值对
                AsyncStorage.removeItem(AsyncStorageKey,()=>{
                    this.setState({
                        data:"",
                    },()=>{
                        alert('删除成功');
                    });
                });
            }
        });
    }



    render() {
        return (
            <View style={styles.container}>
                <Button onPress={this.setData.bind(this,"我用 AsyncStorage存了一条信息")} style={styles.itemView} title="存储数据">
                </Button>

                <Button onPress={this.delData.bind(this)} style={styles.itemView} title="删除数据" >
                </Button>

                <Text style={{paddingTop:40}}>
                    AsyncStorage存储的值是:
                </Text>
                <Text>
                    {this.state.data}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        paddingTop:20,
    },
    itemView:{
        backgroundColor:'grey',
        height:44,
        width:width,
        justifyContent:'center',
        marginTop:10,
    },
    itemText:{
        fontSize:15,
        color:'#ffffff',
        textAlign:'left',
        marginLeft:20,
    },
});