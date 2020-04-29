import { AsyncStorage } from 'react-native';
import { store } from '../App';

// Setup asyncStorage item to hold app data.
export const setAsyncData = async () => {
    try {
        await AsyncStorage.setItem('decks', JSON.stringify(store.getState()));
    } catch(e) {
        console.log('Unable to create AsyncStorage item');
    }
};


