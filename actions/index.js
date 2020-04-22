import { _getDecks } from '../_DATA';

const RECEIVE_DECKS = 'RECEIVE_DECKS';
const ADD_DECK = 'ADD_DECK';

const receiveDecks = (decks) => ({
    type: RECEIVE_DECKS,
    decks
});

// Thunk action creator.
const handleReceiveDecks = () => {
    return(dispatch) => {
        _getDecks()
        .then(decks => {
            console.log(decks);
            dispatch(receiveDecks(decks));
        })
    } 
};

export {RECEIVE_DECKS, handleReceiveDecks};

// catch(e) {
//     console.log('Error retreiving decks, please try again', e);
// }