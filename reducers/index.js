import { RECEIVE_DECKS, ADD_DECK, ADD_CARD } from '../actions';

const decks = (state = {}, action) => {
    switch(action.type) {
        case RECEIVE_DECKS:
            return {
                ...state,
                ...action.decks
            }
        case ADD_DECK:
            return {
                ...state,
                [action.deckId]: {                
                    title: action.title,
                    questions: action.questions
                }
            }
        case ADD_CARD:
            return {
                ...state,
                [action.deckId]: {
                    ...state[action.deckId],
                    questions: state[action.deckId].questions.concat([{...action.cardObj}])
                }
            }
        default:
            return state;
    }
};

export default decks;