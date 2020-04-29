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
import { persistStore, persistReducer } from 'redux-persist';
import { AsyncStorage } from 'react-native';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage
};

const persistedReducer = persistReducer(persistConfig, reducer);

// Create redux store.
export const store = createStore(persistReducer, applyMiddleware(thunk, logger));
// Call setAsyncData function to create AsyncStorage decks item.
setAsyncData();




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

