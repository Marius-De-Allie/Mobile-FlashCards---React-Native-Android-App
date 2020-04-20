import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import MainStackNavigator from './navigation/stackNavigator';
import reducer from './reducers';
import logger from './middleware/logger';
import { handleReceiveDecks } from './actions';

// Create redux store.
const store = createStore(reducer, applyMiddleware(thunk, logger));

class App extends React.Component {

  componentDidMount() {
    // Call thunk action creator to get initial decks data and update store.
    store.dispatch(handleReceiveDecks());
  }

  render() {
    return (
      <NavigationContainer>
        <Provider store={store}>
          <MainStackNavigator />
        </Provider>
      </NavigationContainer>
    );
  }
};

export default App;

