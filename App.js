import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import TabNavigator from './navigation/tabNavigator';
import reducer from './reducers';
import logger from './middleware/logger';
import { handleReceiveDecks } from './actions';
import { setAsyncData, getAsyncData } from './utils/api';
import { AsyncStorage } from 'react-native';


// Create redux store.
export const store = createStore(reducer, applyMiddleware(thunk, logger));
// Call setAsyncData function to create AsyncStorage decks item.
setAsyncData();




class App extends React.Component {

  componentDidMount() {
    // Return 'decks' asyncStorage item.
    getAsyncData()
    .then(data => {
      if(data === null || Object.keys(data).length <= 0) {
        // Call thunk action creator to get initial decks data and update store.
        store.dispatch(handleReceiveDecks());

      } else {
          // Do nothing
      }
    })
  }

  render() {
    console.log('APP', store.getState())
    return (
      <NavigationContainer>
        <Provider store={store}>
          <TabNavigator />
        </Provider>
      </NavigationContainer>
    );
  }
};

export default App;

