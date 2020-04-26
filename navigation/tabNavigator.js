import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MainStackNavigator, { NewDeckStack } from './stackNavigator';

const Tab = createMaterialTopTabNavigator();

const TabNavigator = () => (
    <Tab.Navigator
        initialRouteName="Decks"
    >
        <Tab.Screen name="Decks" component={MainStackNavigator} />
        <Tab.Screen name="New Deck" component={NewDeckStack} />
    </Tab.Navigator>
);

export default TabNavigator;