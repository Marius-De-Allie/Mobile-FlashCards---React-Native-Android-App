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
import { setAsyncData } from './utils/api';

// Create redux store.
export const store = createStore(reducer, applyMiddleware(thunk, logger));

class App extends React.Component {

  componentDidMount() {
    // Call thunk action creator to get initial decks data and update store.
    store.dispatch(handleReceiveDecks());
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

