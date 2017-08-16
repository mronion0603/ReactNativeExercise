import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    View,
    Button,
} from 'react-native';
// import { StackNavigator,TabNavigator  } from 'react-navigation';
// import ChatScreen from "./src/day_03_navigation/ChatScreen";
// import MainScreen from "./src/day_03_navigation/MainScreen";
//
// const ExerciseProject  = StackNavigator({
//     Home: { screen: MainScreen },
//     Chat: { screen: ChatScreen },
// });
import SectionListDemo from "./src/01_componts/SectionListDemo";
import FlatListDemo from "./src/01_componts/FlatListDemo";
import ScrollViewDemo from "./src/01_componts/ScrollViewDemo";
import TextinputDemo from "./src/01_componts/TextinputDemo";
import ImageDemo from "./src/01_componts/ImageDemo";
import ViewDemo from "./src/01_componts/ViewDemo";
import TextDemo from "./src/01_componts/TextDemo";
import CompontsTest from "./src/01_componts/CompontsTest";
export default class ExerciseProject extends Component {
    render() {
        return (

            <SectionListDemo />

        );
    }

}
AppRegistry.registerComponent('ExerciseProject', () => ExerciseProject);
