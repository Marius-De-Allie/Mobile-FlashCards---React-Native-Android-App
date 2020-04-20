import { _getDecks } from '../_DATA';

const RECEIVE_DECKS = 'RECEIVE_DECKS';

const receiveDecks = (decks) => ({
    type: RECEIVE_DECKS,
    decks
});

// Thunk action creator.
const handleReceiveDecks = async () => {
    return(dispatch) => {
        try {
            const decks = await _getDecks();
            receiveDecks(decks);
        } catch(e) {
            console.log('Error retreiving decks, please try again', e);
        }
    }
};

export {RECEIVE_DECKS, handleReceiveDecks};

