import React, { Component } from 'react'
import {
    Text,
    View,
    Image,
    Dimensions
} from 'react-native'
import Swiper from 'react-native-swiper'
const { width } = Dimensions.get('window')

const styles = {
    container: {
        height:200
    },

    wrapper: {
    },

    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },

    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },

    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },

    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },

    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },

    image: {
        width,
        height:200

    },
}

export default class SwiperDemo2 extends Component {
    render () {
        return (
            <View style={styles.container}>
                <Swiper style={styles.wrapper} height={200} horizontal={true} autoplay ={true} >
                    <View style={styles.slide1}>
                        <Image resizeMode='stretch' style={styles.image} source={require('../images/1.jpg')} />
                    </View>
                    <View style={styles.slide2}>
                        <Image resizeMode='stretch' style={styles.image} source={require('../images/2.jpg')} />
                    </View>
                    <View style={styles.slide3}>
                        <Image resizeMode='stretch' style={styles.image} source={require('../images/3.jpg')} />
                    </View>
                </Swiper>
            </View>
        )
    }
}