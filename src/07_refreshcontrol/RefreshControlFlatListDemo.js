import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View,RefreshControl } from 'react-native';

export default class RefreshControlFlatListDemo extends Component {

    constructor(props){
        super(props);
        this.state=({
            loaded:false,
            showFoot:0, // 控制foot， 0：隐藏footer  1：已加载完成,没有更多数据   2 ：显示加载中
            isRefreshing:false,//下拉控制
            isShowBottomRefresh:false,
            rowData: Array.from(new Array(20)).map(
                (val, i) => ({key:  i})),
        });

    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.rowData}
                    renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.isRefreshing}
                            onRefresh={this.onRefresh.bind(this)}  //(()=>this.onRefresh)或者通过bind来绑定this引用来调用方法
                            tintColor='red'
                            title= {this.state.isRefreshing? '刷新中....':'下拉刷新'}
                        />
                    }
                />
            </View>
        );
    }

    onRefresh() {
        this.setState({isRefreshing: true});
        setTimeout(() => {
            // 准备下拉刷新的5条数据
            var rowNewData = Array.from(new Array(5))
                .map((val, i) => ({
                    key: '下拉刷新增加的数据行 ' + (+this.state.loaded + i)
                }))
                .concat(this.state.rowData);
            this.setState({
                loaded: this.state.loaded + 5,
                isRefreshing: false,
                rowData: rowNewData,
            });
        }, 2000);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})