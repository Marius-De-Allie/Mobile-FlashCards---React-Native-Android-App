import React, { Component } from 'react';
import { View, Text, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

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
    onAnswerChange = (input) => {
        const answer = input.trimStart();
        // Update component state answer property value to text in input field.
        this.setState(() => ({
            answer
        }));
    };

    render() {
        const {question, answer} = this.state;
        return (
            <View>
                <Text>{`Add new card to the ${this.props.decks[this.props.deckId].title} deck`}</Text>
                <View>
                    <TextInput 
                        value={question}
                        onChangeText={(text) => this.onQuestionChange(text)}
                        placeholder="Please enter your question."
                    />
                </View>
                <View>
                    <TextInput 
                        value={answer}
                        onChangeText={(text) => this.onAnswerChange(text)}
                        placeholder="Please enter the answer to the question."
                    />
                </View>
            </View>
        );
    }
};

const mapStateToProps = (state, ownProps) => ({
    decks: state,
    deckId: ownProps.route.params.deckId
});

export default connect(mapStateToProps)(NewQuestion);