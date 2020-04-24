import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import RadioGroup, { Radio } from 'react-native-radio-input';
import { connect } from 'react-redux';

class Quiz extends React.Component {
    // Component state.
    state = {
        showAnswer: false,
        page: 0,
        answer: '',
        correct: 0
    };

    // Function for handling the show answer button onPress event.
    onPressShowAnswer = () => {
        this.setState(() => ({
            showAnswer: true
        }))
    };

    // Function for handling the back to question button onPress event.
    onPressShowQuestion = () => {
        this.setState(() => ({
            showAnswer: false
        }))
    };

    onAnswerChange = (value) => {
        const {answer} = this.state;
        this.setState(() => ({
            answer: value
        }));
    };

    renderMainUI = () => {
        const {decks, deckId} = this.props;
        if(this.state.showAnswer === true) {
            return (
                <View>
                    <Text>{decks[deckId].questions[this.state.page].answer}</Text>
                    <TouchableOpacity onPress={this.onPressShowQuestion}>
                        <Text>Back to question</Text>
                    </TouchableOpacity>
                </View>
            )
        } else {
            return (
                <View>
                    <View>
                        <Text>Select your answer(yes or no)</Text>
                        <RadioGroup getChecked={value => this.onAnswerChange(value)}>
                            <Radio iconName={"lens"} label={"Yes"} value={"yes"}/>
                            <Radio iconName={"lens"} label={"No"} value={"no"}/>
                        </RadioGroup>
                    </View>
                    <View>
                        <TouchableOpacity>
                            <Text>Retake</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            disabled={decks[deckId].questions[this.state.page].answered === true || this.state.answer == ''}
                        >
                            <Text>Submit</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={this.onPressShowAnswer}>
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
            page: prevState.page >= this.props.decks[this.props.deckId].questions.length - 1 ? prevState.page : prevState.page + 1,
            showAnswer: false
        }));
        console.log(this.state.page)
        console.log(this.props.decks[this.props.deckId].questions.length)
    };

    // Function for handling back button onPress event.
    onPressBackBtn = () => {
        this.setState(prevState => ({
            page: prevState.page <= 0 ? 0 : prevState.page - 1,
            showAnswer: false
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