import { _getDecks } from '../_DATA';
const RECEIVE_DECKS = 'RECEIVE_DECKS';

const receiveDecks = (decks) => ({
    type: RECEIVE_DECKS,
    decks
});

