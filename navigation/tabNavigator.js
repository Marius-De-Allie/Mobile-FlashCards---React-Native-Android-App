import React from 'react';
import { Dimensions } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MainStackNavigator, { NewDeckStack } from './stackNavigator';

const Tab = createMaterialTopTabNavigator();

const TabNavigator = () => (
    <Tab.Navigator
        initialRouteName="Decks"
        // initialLayout={{width: Dimensions.get('window').width}}
        tabBarOptions={{
            activeTintColor: '#3498db',
            inactiveTintColor: 'gray',
            indicatorStyle: {
                backgroundColor: '#3498db'
            }
        }}
    >
        <Tab.Screen name="Decks" component={MainStackNavigator} />
        <Tab.Screen name="New Deck" component={NewDeckStack} />
    </Tab.Navigator>
);

export default TabNavigator;