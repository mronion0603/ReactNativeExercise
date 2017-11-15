import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    View,
} from 'react-native';
import SQLite from './SQLite';
var sqLite = new SQLite();
var db;
export default class SQLiteDemo extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name:"",
            age:"",
            phone:"",
            email:"",
            address:"",
        };
    }

    compennetDidUnmount(){
        //关闭数据库
        sqLite.close();
    }
    componentWillMount(){
        //开启数据库
        if(!db){
            db = sqLite.open();
        }
        //建表
        sqLite.createTable();
        //删除数据
        sqLite.deleteData();

        //模拟数据
        var userData = [];
        var user = {};
        user.name = "Mr.Onion";
        user.age = "26";
        user.sex = "男";
        user.phone = "12345678910";
        user.email = "123454321@qq.com";
        user.address = "A市B街111号C室";
        userData.push(user);
        //插入数据
        sqLite.insertUserData(userData);
        //查询
        db.transaction((tx)=>{
            tx.executeSql("select * from user", [],(tx,results)=>{
                var len = results.rows.length;
                for(let i=0; i<len; i++){
                    var u = results.rows.item(i);
                    this.setState({
                        name:u.name,
                        age:u.age,
                        phone:u.phone,
                        email:u.email,
                        address:u.address,
                    });
                }
            });
        },(error)=>{
            console.log(error);
        });
    }
    render(){
        return (
            <View>
                <Text>
                    姓名:{this.state.name}
                </Text>
                <Text>
                    年龄：{this.state.age}
                </Text>
                <Text>
                    电话：{this.state.phone}
                </Text>
                <Text>
                    Email：{this.state.email}
                </Text>
                <Text>
                    地址：{this.state.address}
                </Text>
            </View>
        );
    }
}