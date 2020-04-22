import React, { Component } from 'react';
import { View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { addDeck } from '../actions';
class NewDeck extends Component {
    state = {
        deckTitle: ''
    };

    onInputChange = (text) => {
        let deckTitle = text.trimStart();
        this.setState(() => ({
            deckTitle
        }))
    };

    // What action to take when creat Deck button is pressed.
    onDeckSubmit = () => {
        // Remove all whitespace from DeckTitle property value in component state.
        const deckId = this.state.deckTitle.replace(/\s+/g,'');
        const deckObj = {
            [deckId]: {
                title: this.state.deckTitle,
                questions: []
            }
        }

        

    };
    
    render() {
        const {deckTitle} = this.state;
        return (
            <KeyboardAvoidingView>
                <Text>Create New Deck</Text>
                <TextInput 
                    value={deckTitle}
                    onChangeText={(text) => this.onInputChange(text)}
                    placeholder="Please enter title for new deck"
                />
                <TouchableOpacity>
                    <Text>Create Deck</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        );
    }
};

// Access the following store state as props on this component.
const mapStateToProps = (state) => ({
    decks: state
});

export default connect(mapStateToProps)(NewDeck);