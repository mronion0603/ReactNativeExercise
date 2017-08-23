/**
 * Created by Mr.Onion on 17/8/21.
 * 仿漫画App首页
 */
import React, {Component} from 'react';
import {
    Text,
    View,
    ScrollView,
    Image
} from 'react-native';

export default class ComicMainDemo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.banner}>
                        <Image style={styles.bannerimage}
                               source={{uri: 'https://manhua.qpic.cn/operation/0/15_00_20_3ffa389e446f5206e24c82ad5c24fd14_1500049213201.jpg/0'}}/>
                    </View>
                    <View style={styles.category}>
                        <View style={styles.categorybox}>
                            <Image style={styles.categoryimage} source={require('../images/vip_account.png')}/>
                            <Text style={styles.categorytext}>男生榜</Text>
                        </View>
                        <View style={styles.categorybox}>
                            <Image style={styles.categoryimage} source={require('../images/user_crown_is_vip.png')}/>
                            <Text style={styles.categorytext}>人气榜</Text>
                        </View>
                        <View style={styles.categorybox}>
                            <Image style={styles.categoryimage} source={require('../images/vip_finish.png')}/>
                            <Text style={styles.categorytext}>热卖榜</Text>
                        </View>
                        <View style={styles.categorybox}>
                            <Image style={styles.categoryimage} source={require('../images/vip_cloud.png')}/>
                            <Text style={styles.categorytext}>排行榜</Text>
                        </View>
                        <View style={styles.categorybox}>
                            <Image style={styles.categoryimage} source={require('../images/color_for_danmu_select.png')}/>
                            <Text style={styles.categorytext}>分类</Text>
                        </View>
                    </View>
                    <View style={styles.recommend}>
                        <View style={styles.recommendtitlecontainer}>
                            <View style={styles.recommendspaceview}></View>
                            <View style={styles.recommendtitle}>
                                <Text style={styles.recommendtitletext}>主编推荐</Text>
                            </View>
                            <View style={styles.recommendspaceview}>
                                <Image style={styles.recommendmoreimage} source={require('../images/more_boy.png')}/>
                            </View>
                        </View>
                        <View style={styles.recommendcomic}>
                            <Image style={styles.recommendcomicimage}
                                   source={{uri: 'https://manhua.qpic.cn/vertical/0/21_14_21_96ed95f31667b3966cb0e0521ce13703_1498026084112.jpg/420'}}/>
                            <Image style={styles.recommendcomicimage}
                                   source={{uri: 'https://manhua.qpic.cn/vertical/0/21_14_21_96ed95f31667b3966cb0e0521ce13703_1498026084112.jpg/420'}}/>
                            <Image style={styles.recommendcomicimage}
                                   source={{uri: 'https://manhua.qpic.cn/vertical/0/21_14_21_96ed95f31667b3966cb0e0521ce13703_1498026084112.jpg/420'}}/>
                            <Image style={styles.recommendcomicimage}
                                   source={{uri: 'https://manhua.qpic.cn/vertical/0/21_14_21_96ed95f31667b3966cb0e0521ce13703_1498026084112.jpg/420'}}/>
                            <Image style={styles.recommendcomicimage}
                                   source={{uri: 'https://manhua.qpic.cn/vertical/0/21_14_21_96ed95f31667b3966cb0e0521ce13703_1498026084112.jpg/420'}}/>
                            <Image style={styles.recommendcomicimage}
                                   source={{uri: 'https://manhua.qpic.cn/vertical/0/21_14_21_96ed95f31667b3966cb0e0521ce13703_1498026084112.jpg/420'}}/>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.foot}>
                    <Image style={styles.footimage} source={require('../images/home_boy.png')}/>
                    <Image style={styles.footimage} source={require('../images/book_boy.png')}/>
                    <Image style={styles.footimage} source={require('../images/ground_boy.png')}/>
                    <Image style={styles.footimage} source={require('../images/mine_boy.png')}/>
                </View>
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#d0d0d0'
    },
    foot: {
        height: 50,
        backgroundColor: '#ffffff',
        flexDirection: "row",
        justifyContent: "space-around"
    },
    footimage: {
        height: 50,
        width: 50
    },
    banner: {
        height: 200,
        backgroundColor: '#d0d0d0',
    },
    category: {
        height: 100,
        backgroundColor: '#ffffff',
        flexDirection: "row",
        justifyContent: "space-around",
        paddingTop: 10,

    },
    recommend: {
        flex: 1,
        backgroundColor: '#ffffff',
        marginTop: 8,
    },
    bannerimage: {
       flex:1,
    },
    categorybox: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: "center"
    },
    categoryimage: {
        height: 50,
        width: 50,
    },
    categorytext: {
        alignSelf: 'center',
        fontSize: 12,
        color: '#333333',
    },
    recommendtitlecontainer: {
        height: 50,
        justifyContent:"center",
        flexDirection:"row"
    },
    recommendspaceview: {
        justifyContent:"center",
        width:100,
    },
    recommendtitle: {
        flex:1,
        justifyContent:"center",
    },
    recommendtitletext: {
        alignSelf: 'center',
        fontSize: 14,
        color: '#333333',
    },
    recommendmoreimage: {
        height: 35,
        width:80,
        alignSelf: 'center',
    },
    recommendcomic: {
        flex: 1,
        backgroundColor: '#ffffff',
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 5,
        flexWrap:"wrap",
        paddingBottom:10,
    },
    recommendcomicimage: {
        height: 160,
        width:140,
        marginTop:10,
    },
};

