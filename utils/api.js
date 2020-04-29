import { AsyncStorage } from 'react-native';
import { store } from '../App';

// Setup asyncStorage item to hold app data.
export const setDecks = async () => {
    try {
        await AsyncStorage.setItem('decks', JSON.stringify(store.getState()));
    } catch(e) {
        console.log('Unable to create AsyncStorage item');
    }
};

// Retrieve AsyncStorage item 'decks'.
export const getAsyncData = async () => {
    try {
        let results = await AsyncStorage.getItem('decks');
        results = JSON.parse(results);
        return results;
    } catch(e) {
        console.log('Unable to load async data');
    }
  }; 
