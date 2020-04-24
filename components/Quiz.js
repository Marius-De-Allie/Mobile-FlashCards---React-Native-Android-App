import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
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
        const {decks, deckId} = this.props;
        // Calcluate number of questions in current deck.
        const totalQuestions = decks[deckId].questions.length;
        return (
            <View>
                <Text>{`${decks[deckId].title} Quiz`}</Text>
                <Text>{`Page ${this.state.page + 1}/${totalQuestions}`}</Text>

                <Text>{`correct ${this.state.correct} | ${this.state.page + 1} answered`}</Text>{/* Need to update this when i add answered prop to questions array */}
                <View>
                    <TouchableOpacity>
                        <Text>Back</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>Forward</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );    
    }
};

const mapStateToProps = (state, ownProps) => ({
    decks: state,
    deckId: ownProps.route.params.deckId
});

export default connect(mapStateToProps)(Quiz);