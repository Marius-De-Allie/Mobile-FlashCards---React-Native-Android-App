import React from 'react';
import { View, StatusBar } from 'react-native';
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
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import {  setLocalNotifications } from './_DATA';
// const persistConfig = {
//   timeout: 10000,
//   key: 'root',
//   storage: AsyncStorage,
//   stateReconciler: autoMergeLevel2
// };

// const persistedReducer = persistReducer(persistConfig, reducer);

// // Create redux store.
// const configureStore = () => {
//   const store = createStore(persistedReducer, applyMiddleware(thunk, logger));
//   let persistor = persistStore(store);
//   return {persistor, store}
// };

// const {store, persistor} = configureStore();
const store = createStore(reducer, applyMiddleware(thunk, logger));


class App extends React.Component {

  componentDidMount() {
      // Call thunk action creator to get initial decks data and update store.
      store.dispatch(handleReceiveDecks());
      setLocalNotifications();
      // persistor.persist();
  }

  render() {
    return (
      <NavigationContainer>
        <Provider store={store}>
          <StatusBar backgroundColor="#3498db" barStyle="light-content"/>
          <TabNavigator />
        </Provider>
      </NavigationContainer>
    );
  }
};

export default App;

