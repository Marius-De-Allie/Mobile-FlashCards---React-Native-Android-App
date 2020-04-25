import { RECEIVE_DECKS, ADD_DECK, ADD_CARD, TOGGLE_ANSWERED, ADD_USERANSWER } from '../actions';

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
        case TOGGLE_ANSWERED:
            return {
                ...state,
                [action.deckId]: {
                    ...state[action.deckId],
                    questions: state[action.deckId].questions.map((el, index) => index === action.questionIndex ? action.updatedQuestionEl : el)
                }
            }
        case ADD_USERANSWER:
            return {
                ...state,
                [action.deckId]: {
                    ...state[action.deckId],
                    questions: state[action.deckId].questions.map((el, index) => index === action.questionIndex ? {...el, userAnswer: action.answer} : el)
                }
            }
        default:
            return state;
    }
};

export default decks;