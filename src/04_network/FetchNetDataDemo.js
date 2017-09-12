import React, {Component} from "react";
import {
    Text,
    Image,
    View,
    StyleSheet,
}from 'react-native';


export default class FetchNetDataDemo extends Component {
    //初始化
    constructor(props) {
        super(props);
        this.state = {
            bookinfo: null
        };
    }

    //使用fetch请求数据
    fetchBookinfoList() {
        const url = 'https://api.douban.com/v2/book/isbn/9787302315582';
        fetch(url)
            .then((response)=>response.json())
            .then(
                (responseJson)=> {
                    let bookinfo = responseJson;
                    console.log(bookinfo);
                    this.setState({
                        bookinfo: bookinfo,
                    })
                }
            )
            .catch((error)=>console.error(error))
    }

    //页面渲染完成后会调用该方法
    componentDidMount() {
        this.fetchBookinfoList();
    }

    //渲染界面
    render() {
        let item = this.state.bookinfo;
        if (item) {
            return this.renderItem(item);
        }else {
            return (
                <Text style={Styles.loading}>加载中...</Text>
            )
        }
    }

    //绘制展示数据的界面
    renderItem(item) {
        return (
            <View style={Styles.container}>
                <Image style={Styles.image_book} source={{uri: item.image}}/>
                <View style={Styles.right}>
                    <Text style={Styles.text_title}>{item.title}</Text>
                    <Text style={Styles.text_price}>{item.publisher}</Text>
                </View>
            </View>
        )
    }
}

const Styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        height: 100,
        flexDirection: "row",
        alignItems: "center"
    },
    right: {
        flexDirection: "column",
        height: 80,
        flexGrow: 1,
    },
    loading:{
        textAlign: "center",
        fontSize: 16,
        padding: 20
    },
    image_book: {
        width: 80,
        height: 80,
        resizeMode: "cover",
        marginHorizontal: 12
    },
    text_title: {
        color: "black",
        fontSize: 16,
        lineHeight: 24,
    },
    text_price: {
        color: "gray",
        fontSize: 12,
        lineHeight: 20,
    },
})