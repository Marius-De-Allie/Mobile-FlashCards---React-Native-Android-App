import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import RadioGroup, { Radio } from 'react-native-radio-input';
import { connect } from 'react-redux';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { selectAnswer, resetDeck } from '../actions';

class Quiz extends React.Component {
    // Component state.
    state = {
        showAnswer: false,
        page: 0,
        answer: null,
        correct: 0,
        formKey: true
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
        this.setState(() => ({
            answer: value
        }));
        console.log(this.state.answer);
    };

    onAnswerSubmit = () => {
        const {decks, deckId, dispatch} = this.props;
        // Update current questions array element by toggling the answered property on the question object.
        let updatedQuestionEl = this.props.decks[this.props.deckId].questions[this.state.page];
//         console.log('before', updatedQuestionEl);
        updatedQuestionEl = {...updatedQuestionEl, answered: !updatedQuestionEl.answered} 
//         console.log('after', updatedQuestionEl);
        
        // Dispatch SELECT_ANSWER action.
        dispatch(selectAnswer(deckId, this.state.page, this.state.answer));

        // Check whether answer in component state is equal to question's answer property value in redux store.
        if(this.state.answer === decks[deckId].questions[this.state.page].answer) {
            // If answer is correct, update component correct state property by incrementing by 1.
            console.log('CORRECT');
            this.setState((prevState) => ({
                correct: prevState.correct + 1
            }))
        } else {
            // If answer is incorrect, return component correct state property as is, no change.
            this.setState((prevState) => ({
                correct: prevState.correct
            }))
        }
        this.setState(prevState => ({
            formKey: !prevState.formKey
        }));
    };

    onRetakebtnPress = () => {
        const {dispatch, deckId} = this.props;
        // Dispatch resetDeck action creator.
        dispatch(resetDeck(deckId));
        // Reset component state to default values.
        this.setState(() => ({
            showAnswer: false,
            page: 0,
            answer: null,
            correct: 0
        }))
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
            // Return an array of questions where the question's answered property is equal to true.
            const answeredQuestions = decks[deckId].questions.filter(question => question.answered === true);
            // Gte length of answeredQuestions array.
            const answeredQuestionsLength = answeredQuestions.length;
            return (
                <View>
                    {decks[deckId].questions[this.state.page].answered === false ?
                        <View>
                            <Text style={{marginBottom: 10, fontSize: 20}}>Select your answer(yes or no)</Text>
                            <RadioGroup 
                                getChecked={value => this.onAnswerChange(value)} 
                                key={this.state.formKey}
                            >
                                <Radio iconName={"lens"} label={"Yes"} value={"yes"}  />
                                <Radio iconName={"lens"} label={"No"} value={"no"} />
                            </RadioGroup> 
                        </View> :
                        <Text style={styles.yourAnsText}>Your Answer: 
                            <Text style={{color: '#2ecc71'}}>{' ' + decks[deckId].questions[this.state.page].userAnswer.toUpperCase()}</Text>
                        </Text>
                    }
                    <View style={styles.quizBtnsContainer}>
                        <TouchableOpacity
                            onPress={this.onRetakebtnPress}
                            disabled={this.state.page < decks[deckId].questions.length -1 || decks[deckId].questions.length !== answeredQuestionsLength}
                            style={[styles.quizButton, {marginRight: 30}]}
                        >
                            <MaterialIcons name="refresh" size={18} color="#fff" />
                            <Text style={styles.quizBtnText}>{`  Retake`}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={this.onAnswerSubmit}
                            disabled={decks[deckId].questions[this.state.page].answered === true || this.state.answer === null}
                            style={[styles.quizButton, {marginLeft: 30}]}
                        >
                            <Ionicons name="md-checkbox-outline" size={18} color="#fff" />
                            <Text style={styles.quizBtnText}>{`  Submit`}</Text>
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
            showAnswer: false,
            formKey: !prevState.formKey
        }));
        console.log(this.state.page)
        console.log(this.props.decks[this.props.deckId].questions.length)
    };

    // Function for handling back button onPress event.
    onPressBackBtn = () => {
        this.setState(prevState => ({
            page: prevState.page <= 0 ? 0 : prevState.page - 1,
            showAnswer: false,
            formKey: !prevState.formKey
        }));
    };

    render() {
        const {decks, deckId} = this.props;
        // Return an array with all answered questions in current deck.
        const answeredQuestions = decks[deckId].questions.filter(question => question.answered === true);
        // Calcluate number of questions in current deck.
        const totalQuestions = decks[deckId].questions.length;
        return (
            <View>
                <Text style={styles.quizTitle}>{`${decks[deckId].title} Quiz`}</Text>
                <Text style={styles.pageCountText}>{`Page ${this.state.page + 1}/${totalQuestions}`}</Text>
                <View style={styles.mainContentContainer}>
                    <Text style={styles.questionText}>{decks[deckId].questions[this.state.page].question}</Text>
                    {this.renderMainUI()}
                </View>
                <Text>{`correct ${this.state.correct} | ${answeredQuestions.length} answered`}</Text>
                <View>
                    <TouchableOpacity 
                        onPress={this.onPressBackBtn}
                        disabled={this.state.page <= 0}
                    >
                        <Text>Back</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={this.onPressForwardBtn}
                        disabled={this.state.page >= decks[deckId].questions.length -1 || decks[deckId].questions[this.state.page].answered === false}
                    >
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

// Style object.
const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
        // alignItems: 'stretch'
    // }
    quizTitle: {
        alignSelf: 'center',
        fontSize: 32,
        // marginVertical: 30
    },
    pageCountText: {
        fontSize: 18, 
        color: '#2ecc71'
    },
    mainContentContainer: {
        paddingHorizontal: 30,
        alignItems: 'stretch'
    },
    questionText: {
        marginBottom: 15, 
        fontSize: 24
    },
    quizBtnsContainer: {
        // flex: 1,
        flexDirection: 'row',
        paddingVertical: 15,
        // paddingHorizontal: 30,
        justifyContent: 'space-between',
        marginTop: 30
    },
    quizButton: {
        backgroundColor: '#2ecc71',
        padding: 15,
        borderRadius: 5,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    quizBtnText: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
    },
    yourAnsText: {
        fontSize: 20, 
        alignSelf: 'center'
    },
    showAnsButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center', 
        backgroundColor: '#3498db', 
        paddingVertical: 15, 
        paddingHorizontal: 50, 
        marginTop: 15, 
        borderRadius: 5
    }
});

export default connect(mapStateToProps)(Quiz);