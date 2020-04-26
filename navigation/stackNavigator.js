import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Deck from '../components/Deck';
import Quiz from '../components/Quiz';
import NewQuestion from '../components/NewQuestion';
import DeckList from '../components/DeckList';
import NewDeck from '../components/NewDeck';
import TabNavigator from './tabNavigator';

const Stack = createStackNavigator();

const MainStackNavigator = () => (
    <Stack.Navigator
        initialRouteName="Home"
    >
        <Stack.Screen name="Home" component={DeckList} />
        <Stack.Screen name="Deck" component={Deck} />
        <Stack.Screen name="Quiz" component={Quiz} />
    </Stack.Navigator>
);

const NewDeckStack = () => (
    <Stack.Navigator>
        <Stack.Screen name="New Deck" component={NewDeck} />
        <Stack.Screen name="New Card" component={NewQuestion} />
    </Stack.Navigator>
)

export {MainStackNavigator as default, NewDeckStack};