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
    };

    renderMainUI = () => {
        const {decks, deckId} = this.props;
        if(this.state.showAnswer === true) {
            return (
                <View>
                    <Text>{decks[deckId].questions[this.state.page].answer}</Text>
                    <TouchableOpacity>
                        <Text>Back to question</Text>
                    </TouchableOpacity>
                </View>
            )
        } else {
            return (
                <View>
                    <View>
                        <TouchableOpacity>
                            <Text>Retake</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text>Submit</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity>
                        <Text>Show Answer</Text>
                    </TouchableOpacity>
                </View>
            )
        }
    };
    
    // Function for handling next page button onPress event.
    onPressForwardBtn = () => {
        console.log('forward pressed')
        this.setState(prevState => ({
            page: prevState.page >= this.props.decks[this.props.deckId].questions.length - 1 ? prevState.page : prevState.page + 1
        }));
        console.log(this.state.page)
        console.log(this.props.decks[this.props.deckId].questions.length)
    };

    // Function for handling back button onPress event.
    onPressBackBtn = () => {
        this.setState(prevState => ({
            page: prevState.page <= 0 ? 0 : prevState.page - 1
        }));
    };

    render() {
        const {decks, deckId} = this.props;
        // Calcluate number of questions in current deck.
        const totalQuestions = decks[deckId].questions.length;
        return (
            <View>
                <Text>{`${decks[deckId].title} Quiz`}</Text>
                <Text>{`Page ${this.state.page + 1}/${totalQuestions}`}</Text>
                <Text>{decks[deckId].questions[this.state.page].question}</Text>
                {this.renderMainUI()}
                <Text>{`correct ${this.state.correct} | ${this.state.page + 1} answered`}</Text>{/* Need to update this when i add answered prop to questions array */}
                <View>
                    <TouchableOpacity onPress={this.onPressBackBtn}>
                        <Text>Back</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.onPressForwardBtn}>
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