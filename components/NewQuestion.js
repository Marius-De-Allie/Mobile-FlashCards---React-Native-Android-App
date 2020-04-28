import React, { Component } from 'react';
import { View, Text, TextInput, KeyboardAvoidingView, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import RadioGroup, { Radio } from "react-native-radio-input";
import { addCard } from '../actions';

class NewQuestion extends Component {
    // Component State.
    state = {
        question: '',
        answer: ''
    };

    // Perform this when text in question InputText field changes.
    onQuestionChange = (input) => {
        const question = input.trimStart();
        // Update component state question property value to text in input field.
        this.setState(() => ({
            question
        }));
    };

    // Perform this when text in answer InputText field changes.
    onAnswerSelect = (value) => {
        // Update component state answer property value to currently selected value of RadioGroup component.
        this.setState(() => ({
            answer: value
        }));
        console.log(this.state.answer);
    };

    onCardSubmit = () => {
        const {question, answer} = this.state;
        const {deckId} = this.props;
        // Check whether both input fields are not empty.
        if(question !== '' && answer !== '') {
            // if they are not empty, create a question object.
            const questionObj = {
                question,
                answer,
                answered: false
            };
            // Dispacth action to add question object to that's deck's question array.
            this.props.dispatch(addCard(questionObj, deckId));
            // Redirect to the previous Deck view.
            this.props.navigation.goBack();
        }
    };

    render() {
        const {question, answer} = this.state;
        return (
            <KeyboardAvoidingView 
                behavior="height"
                style={styles.container}
            >
                <Text style={styles.headerText}>{`Add new card to the ${this.props.decks[this.props.deckId].title} deck`}</Text>
                <View style={{marginBottom: 30}}>
                    <TextInput 
                        value={question}
                        onChangeText={(text) => this.onQuestionChange(text)}
                        placeholder="Please enter question in a yes/no format."
                        style={styles.textInput}
                    />
                </View>
                <View>
                    <Text>Please select the correct answer to your new question from the two choices below(yes or no)</Text>
                    <RadioGroup getChecked={value => this.onAnswerSelect(value)}>
                        <Radio iconName={"lens"} label={"Yes"} value={"yes"}/>
                        <Radio iconName={"lens"} label={"No"} value={"no"}/>
                    </RadioGroup>
                </View>
                <TouchableOpacity onPress={this.onCardSubmit}>
                    <Text>Add Card</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        );
    }
};

const mapStateToProps = (state, ownProps) => ({
    decks: state,
    deckId: ownProps.route.params.deckId
});

// style object.
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginHorizontal: 30,
        marginVertical: 30
    },
    headerText: {
        fontSize: 32,
        marginBottom: 30,
        textAlign: 'center'
    },
    textInput: {
        borderBottomWidth: 1, 
        borderTopWidth: 1, 
        borderRightWidth: 1, 
        borderLeftWidth: 1,
        borderBottomColor: '#3498db', 
        borderTopColor: '#3498db', 
        borderRightColor: '#3498db', 
        borderLeftColor: '#3498db',
        padding:10, 
        borderRadius: 5, 
        fontSize: 18,
        color: '#2ecc71'
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        marginTop: 30,
        borderRadius: 5,
    }
});

export default connect(mapStateToProps)(NewQuestion);