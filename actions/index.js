import { _getDecks } from '../_DATA';

const RECEIVE_DECKS = 'RECEIVE_DECKS';
const ADD_DECK = 'ADD_DECK';
const ADD_CARD = 'ADD_CARD';
const SELECT_ANSWER = 'SELECT_ANSWER';
const RESET_DECK = 'RESET_DECK';

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

// ADD DECK ACTION CREATOR.
const addDeck = (deckId, title, questions) => ({
    type: ADD_DECK,
    deckId,
    title,
    questions
});

// ADD CARD ACTION CREATOR.
const addCard = (cardObj, deckId) => ({
    type: ADD_CARD,
    cardObj,
    deckId
});

// SELECT ANSWER ACTION CREATOR.
const selectAnswer = (deckId, questionIndex, answer) => ({
    type: SELECT_ANSWER,
    deckId,
    questionIndex,
    answer
});

// RESET DECK ACTION CREATOR.
const resetDeck = (deckId) => ({
    type: RESET_DECK,
    deckId
});
 



export {
    RECEIVE_DECKS, 
    ADD_DECK, 
    ADD_CARD, 
    SELECT_ANSWER,
    RESET_DECK,
    handleReceiveDecks, 
    addDeck, 
    addCard, 
    selectAnswer,
    resetDeck,
};

// catch(e) {
//     console.log('Error retreiving decks, please try again', e);
// }