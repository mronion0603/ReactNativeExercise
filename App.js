import React, { Component } from 'react';
import {
    AppRegistry,
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

//import FlexDiceTest from "./src/02_flex/FlexDiceTest";
import FlexDirectionDemo from "./src/02_flex/FlexDirectionDemo";
import FlexWrapDemo from "./src/02_flex/FlexWrapDemo";
import JustifyContentDemo from "./src/02_flex/JustifyContentDemo";
import AlignItemsDemo from "./src/02_flex/AlignItemsDemo";
import AlignSelfDemo from "./src/02_flex/AlignSelfDemo";
import FlexDemo from "./src/02_flex/FlexDemo";
import PositionDemo from "./src/02_flex/PositionDemo";

import GridDemo from "./src/02_flex/GridDemo";
import ComicMainDemo from "./src/02_flex/ComicMainDemo";

import PropsDemo from "./src/03_props_state_lifecycle/PropsDemo";


export default class ExerciseProject extends Component {
    render() {
        return (
            <PropsDemo />
        );
    }
}
AppRegistry.registerComponent('ExerciseProject', () => ExerciseProject);
