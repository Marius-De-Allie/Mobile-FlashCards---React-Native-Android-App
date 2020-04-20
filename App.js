import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStore } from 'redux';
import MainStackNavigator from './navigation/stackNavigator';
import reducer from './reducers';
import logger from './middleware/logger';

export default function App() {
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
}

