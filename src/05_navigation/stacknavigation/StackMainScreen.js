import React from 'react';
import {
    AppRegistry,
    Text,
    View,
    Button,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import ChatScreen from "./ChatScreen";
class StackMainScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    render() {
        const { navigate } = this.props.navigation;
        return(
        <View>
            <Text>Hello, Chat App!</Text>
            <Button
                onPress={() => navigate('Chat', { user: 'Lucy' })}
                title="Chat with Lucy"
            />
        </View>);
    }
}

const SimpleApp = StackNavigator(
    {
       Home: { screen: StackMainScreen },
       Chat: { screen: ChatScreen },
     },
    {
       mode: 'card',
       headerMode:'screen',
     }
);

export default SimpleApp;