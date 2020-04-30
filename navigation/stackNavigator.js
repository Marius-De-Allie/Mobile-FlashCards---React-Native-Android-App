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
        <Stack.Screen 
            name="Deck" 
            component={Deck} 
            options={({route}) => ({title: `${route.params.deckId} Deck`})}

        />
        <Stack.Screen name="Quiz" component={Quiz} />
    </Stack.Navigator>
);

const NewDeckStack = () => (
    <Stack.Navigator
        initialRouteName="Add Deck"
    >
        <Stack.Screen name="Add Deck" component={NewDeck} />
        <Stack.Screen name="Add Card" component={NewQuestion} />
    </Stack.Navigator>
)

export {MainStackNavigator as default, NewDeckStack};