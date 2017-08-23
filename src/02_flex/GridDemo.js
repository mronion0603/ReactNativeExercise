/**
 * 网格布局示例
 */
import React,{Component} from 'react';
import {
    View,
    Text,
} from 'react-native';

export default class GridDemo extends Component {
    render() {
        return (
            <View style={ {flex:1}}>
                <Text>基本网格</Text>
                <View style={ {flexDirection:'row',height:40}}>
                    <View style={ {flex:1,backgroundColor:"grey"}}></View>
                    <View style={ {flex:1,backgroundColor:"white"}}></View>
                    <View style={ {flex:1,backgroundColor:"grey"}}></View>
                </View>
                <Text>两边固定中间填充的网格</Text>
                <View style={ {flexDirection:'row',height:40}}>
                    <View style={ {width:100,backgroundColor:"grey"}}></View>
                    <View style={ {flex:1,backgroundColor:"white"}}></View>
                    <View style={ {width:100,backgroundColor:"grey"}}></View>
                </View>
                <Text>嵌套网格</Text>
                <View style={ {flex:1}}>
                    <View style={ {flexDirection:'row',height:40}}>
                        <View style={ {width:50,backgroundColor:"grey",justifyContent:"center",alignItems:"center"}}>
                            <Text>返回</Text>
                        </View>
                        <View style={ {flex:1,backgroundColor:"white",justifyContent:"center",alignItems:"center"}}>
                            <Text>嵌套网格</Text>
                        </View>
                        <View style={ {width:50,backgroundColor:"grey",justifyContent:"center",alignItems:"center"}}>
                            <Text>确认</Text>
                        </View>
                    </View>
                    <View style={ {flexDirection:'row',flex:1,backgroundColor:"#cccccc",justifyContent:"center",alignItems:"center"}}>
                        <Text>do something...</Text>
                    </View>
                </View>
            </View>
        );
    }
}


