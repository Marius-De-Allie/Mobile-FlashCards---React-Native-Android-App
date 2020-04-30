import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import RadioGroup, { Radio } from 'react-native-radio-input';
import { connect } from 'react-redux';
import { MaterialIcons, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { selectAnswer, resetDeck } from '../actions';
import { clearLocalNotifications, setLocalNotifications } from '../_DATA';

class Quiz extends React.Component {
    // Component state.
    state = {
        showAnswer: false,
        page: 0,
        answer: null,
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

    onPressCorrect = () => {
        const answer= this.state.answer === 'yes' ? this.state.answer : 'yes';
        this.setState(() => ({
            answer
        }));
        console.log(this.state.answer);
    };

    onPressIncorrect = () => {
        const answer= this.state.answer === 'no' ? this.state.answer : 'no';
        this.setState(() => ({
            answer
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
        this.setState(() => ({
            answer: null
        }));
        // If user has completed atleast one quiz turn off notifcation for that day and set notification for next day.
        const answeredQuestions = decks[deckId].questions.filter(question => question.answered === true);
        const totalQuestions = decks[deckId].questions.length;
        if(answeredQuestions.length >= totalQuestions) {
            clearLocalNotifications()
            .then(setLocalNotifications)
        } else {
            // Do nothing
        }
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

    onGotoDeck = () => {
        const {deckId, navigation} = this.props;
        navigation.navigate('Deck', {deckId})
    };

    renderMainUI = () => {
        const {decks, deckId} = this.props;
        // Declare yes and no variables to be passed into onAnswerChange method.
        const yes = 'yes';
        const no = 'no';
        if(this.state.showAnswer === true) {
            return (
                <View style={styles.correctAnsContainer}>
                    <Text style={styles.correctAnsText}>{decks[deckId].questions[this.state.page].answer.toUpperCase()}</Text>
                    <TouchableOpacity 
                        onPress={this.onPressShowQuestion}
                        style={styles.backtoQuestionButton}
                    >
                        <MaterialCommunityIcons name="hand-pointing-left" size={18} color="#fff" />
                        <Text style={styles.btnText}>{`  Back to question`}</Text>
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
                        <View style={styles.ansBtnContainer}>
                            <Text style={{marginBottom: 10, fontSize: 20}}>Make your selection</Text>
                            <TouchableOpacity
                                onPress={this.onPressCorrect}
                                style={[styles.ansButton, {flexDirection: 'row', justifyContent: 'center', 
                                backgroundColor: this.state.answer === 'yes' ? '#2ecc71' : '#F2F2F2', 
                                borderTopWidth: this.state.answer === 'yes' ? 0 : 1, borderRightWidth: this.state.answer === 'yes' ? 0 : 1, 
                                borderBottomWidth: this.state.answer === 'yes' ? 0 : 1, borderLeftWidth: this.state.answer === 'yes' ? 0 : 1,
                                borderTopColor: "#2ecc71", borderRightColor: "#2ecc71", 
                                borderBottomColor: "#2ecc71", borderLeftColor: "#2ecc71"
                            }]}
                            >
                                <MaterialCommunityIcons name="check-circle-outline" size={18} color={this.state.answer === 'yes' ? "#fff": "#2ecc71"}  />
                                <Text style={{fontSize: 18, color: this.state.answer === 'yes' ?  '#fff': "#2ecc71"}}>{`  Correct`}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={this.onPressIncorrect}
                                style={[styles.ansButton, {backgroundColor: this.state.answer === 'no' ? '#2ecc71' : '#F2F2F2', marginTop: 15,
                                borderTopWidth: this.state.answer === 'no' ? 0 : 1, borderRightWidth: this.state.answer === 'no' ? 0 : 1, 
                                borderBottomWidth: this.state.answer === 'no' ? 0 : 1, borderLeftWidth: this.state.answer === 'no' ? 0 : 1,
                                borderTopColor: "red", borderRightColor: "red", 
                                borderBottomColor: "red", borderLeftColor: "red"}
                            ]}
                            >
                                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                                    <MaterialCommunityIcons name="close-box-outline" size={18} color={this.state.answer === 'no' ?  '#fff': "red"} />
                                    <Text style={{fontSize: 18, color: this.state.answer === 'no' ?  '#fff': "red"}}>{`  Incorrect`}</Text>
                                </View>
                            </TouchableOpacity>
                        </View> :
                        <Text style={styles.yourAnsText}>Your Answer: 
                            <Text style={{color: '#2ecc71'}}>{' ' + decks[deckId].questions[this.state.page].userAnswer.toUpperCase()}</Text>
                        </Text>
                    }
                    <View style={styles.quizBtnsContainer}>
                        <TouchableOpacity
                            onPress={this.onRetakebtnPress}
                            disabled={decks[deckId].questions.length !== answeredQuestionsLength}
                            style={[styles.quizButton, {marginRight: 30, 
                                backgroundColor: decks[deckId].questions.length !== answeredQuestionsLength ? '#F2F2F2' 
                                : '#2ecc71', borderTopWidth: decks[deckId].questions.length !== answeredQuestionsLength ? 1 : 0, 
                                borderRightWidth: decks[deckId].questions.length !== answeredQuestionsLength ? 1 : 0, 
                                borderBottomWidth: decks[deckId].questions.length !== answeredQuestionsLength ? 1 : 0, 
                                borderLeftWidth: decks[deckId].questions.length !== answeredQuestionsLength ? 1 : 0}]}
                        >
                            <MaterialIcons name="refresh" size={18} color={decks[deckId].questions.length !== answeredQuestionsLength ? "#3498db" 
                            : "#fff"} />
                            <Text style={[styles.quizBtnText, {color: decks[deckId].questions.length !== answeredQuestionsLength ? "#3498db" : "#fff"}]}>
                                {`  Retake`}
                            </Text>
                        </TouchableOpacity>
                        {this.state.page >= decks[deckId].questions.length -1 && decks[deckId].questions.length === answeredQuestionsLength ?
                            <TouchableOpacity
                                onPress={this.onGotoDeck}
                                style={[styles.quizButton, {marginLeft: 30}, 
                                {backgroundColor: '#2ecc71'}]}
                            >
                                <MaterialCommunityIcons name="cards-outline" size={18} color="#fff" />
                                <Text style={[styles.quizBtnText, {color: "#fff"}]}>{`  Back to Deck`}</Text>
                            </TouchableOpacity> :
                            <TouchableOpacity
                                onPress={this.onAnswerSubmit}
                                disabled={decks[deckId].questions[this.state.page].answered === true || this.state.answer === null}
                                style={[styles.quizButton, {marginLeft: 30}, 
                                {backgroundColor: decks[deckId].questions[this.state.page].answered === false && this.state.answer !== null ? '#2ecc71' : '#F2F2F2',
                                    borderTopWidth: decks[deckId].questions[this.state.page].answered === false && this.state.answer !== null ? 0 : 1, 
                                    borderRightWidth: decks[deckId].questions[this.state.page].answered === false && this.state.answer !== null ? 0 : 1, 
                                    borderBottomWidth: decks[deckId].questions[this.state.page].answered === false && this.state.answer !== null ? 0 : 1, 
                                    borderLeftWidth: decks[deckId].questions[this.state.page].answered === false && this.state.answer !== null ? 0 : 1,
                                }]}
                            >
                                <Ionicons name="md-checkbox-outline" size={18} 
                                    color={decks[deckId].questions[this.state.page].answered === false && this.state.answer !== null ? "#fff" : "#3498db"} 
                                />
                                <Text style={[styles.quizBtnText, {color: decks[deckId].questions[this.state.page].answered === false && this.state.answer !== null ? "#fff" : "#3498db"}]}>
                                    {decks[deckId].questions[this.state.page].answered === true ? `  Submitted` : `  Submit`}
                                </Text>
                            </TouchableOpacity>
                        }
                    </View>
                    <TouchableOpacity 
                        style={[styles.showAnsButton, {backgroundColor: decks[deckId].questions[this.state.page].answered === false ? 'gray' : '#3498db', 
                    }]}
                        onPress={this.onPressShowAnswer}
                        disabled={decks[deckId].questions[this.state.page].answered === false}
                    >
                        <MaterialCommunityIcons name="lightbulb-on-outline" size={18} color="#fff" />
                        <Text style={styles.btnText}>{`  Show Answer`}</Text>
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
        // Return an array with all answered questions in current deck.
        const answeredQuestions = decks[deckId].questions.filter(question => question.answered === true);
        // Calcluate number of questions in current deck.
        const totalQuestions = decks[deckId].questions.length;
        return (
            <View>
                <Text style={styles.pageCountText}>{`Page ${this.state.page + 1}/${totalQuestions}`}</Text>
                <Text style={styles.quizTitle}>{`${decks[deckId].title} Quiz`}</Text>
                <View style={styles.mainContentContainer}>
                    <Text style={styles.questionText}>{decks[deckId].questions[this.state.page].question}</Text>
                    {this.renderMainUI()}
                </View>
                {answeredQuestions.length === decks[deckId].questions.length && 
                    <View style={styles.scoreContainer}>
                        <Text
                            style={{fontSize: 24}}
                        >
                            Your Score
                        </Text>
                        <Text 
                            style={[styles.scoreText, {color: Math.round((this.state.correct / totalQuestions) * 100) < 50 ? 'red' : '#2ecc71'}]}
                        >
                            {` ${Math.round((this.state.correct / totalQuestions) * 100)} %`}
                        </Text>
                    </View>
                }
                <View style={styles.navBtnsContainer}>
                    <TouchableOpacity 
                        onPress={this.onPressBackBtn}
                        disabled={this.state.page <= 0}
                        style={styles.navButton}
                    >
                        <MaterialCommunityIcons name="chevron-left-circle" size={40} color={this.state.page <= 0 ? 'gray' : '#2ecc71'} />
                        <Text>{` Back`}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={this.onPressForwardBtn}
                        disabled={this.state.page >= decks[deckId].questions.length -1 || decks[deckId].questions[this.state.page].answered === false}
                        style={styles.navButton}
                    >
                        <Text>{`Forward `}</Text>
                        <MaterialCommunityIcons 
                            name="chevron-right-circle" 
                            size={40} 
                            color={this.state.page >= decks[deckId].questions.length -1 || decks[deckId].questions[this.state.page].answered === false ? 'gray' : '#2ecc71'} />
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
        fontWeight: 'bold',
        marginBottom: 30
    },
    pageCountText: {
        fontSize: 18, 
        color: '#2ecc71',
        marginLeft: 10,
        marginTop: 15
    },
    mainContentContainer: {
        paddingHorizontal: 30,
        // marginHorizontal: 30,
        alignItems: 'stretch'
    },
    questionText: {
        marginBottom: 15, 
        fontSize: 24,
        textAlign: 'center'
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
        padding: 15,
        borderRadius: 5,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopColor: "#3498db",
        borderRightColor: "#3498db",
        borderBottomColor: "#3498db",
        borderLeftColor: "#3498db"
    },
    quizBtnText: {
        fontSize: 18,
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
        paddingVertical: 15, 
        paddingHorizontal: 50, 
        marginTop: 15, 
        borderRadius: 5
    },
    btnText: {
        fontSize: 18,
        color: '#fff'
    },
    scoreContainer: {
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: 30
    },
    scoreText: {
        // alignSelf: 'center',
        fontSize: 24,
        fontWeight: 'bold'
    },
    navBtnsContainer: {
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 10,
        marginVertical: 30
    },
    navButton: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    correctAnsContainer: {
        alignSelf: 'center', 
        alignItems: 'center',
        marginTop: 15
    },
    correctAnsText: {
        color: "#2ecc71", 
        fontWeight: "bold", 
        fontSize: 20
    },
    backtoQuestionButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3498db', 
        paddingVertical: 15, 
        paddingHorizontal: 50, 
        marginTop: 30, 
        borderRadius: 5
    },
    ansBtnContainer: {
        alignSelf: 'center',
        alignItems: 'center'
    },
    ansButton: {
        alignItems: 'center',  
        width: 180,
        padding: 15,
        borderRadius: 5,
    },
});

export default connect(mapStateToProps)(Quiz);