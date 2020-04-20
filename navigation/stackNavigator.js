import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Deck from '../components/Deck';
import Quiz from '../components/Quiz';
import NewQuestion from '../components/NewQuestion';

const Stack = createStackNavigator();

const MainStackNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Deck" component={Deck} />
        <Stack.Screen name="Quiz" component={Quiz} />
        <Stack.Screen name="New Card" component={NewQuestion} />
    </Stack.Navigator>
);

export default MainStackNavigator;