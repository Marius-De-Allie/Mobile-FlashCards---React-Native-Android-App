import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class Quiz extends React.Component {
    // Component state.
    state = {
        showAnswer: false,
        page: 0,
        answer: '',
        correct: 0
    }

    render() {
        return (
            <View>
                <Text>Quiz Comp</Text>
            </View>
        );    
    }
};

const mapStateToProps = (state, ownProps) => ({
    decks: state,
    deckId: ownProps.route.params.deckId
});

export default Quiz;