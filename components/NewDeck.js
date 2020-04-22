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
        // Create an array of all current Deck keys(ids).
        const currentDeckIds = Object.keys(this.props.decks);
        // Deck title property
        const title = this.state.deckTitle;
        // Deck questions property
        const questions = [];

        // Dispatch action creator to add new deck to store.
        this.props.addDeck(deckId, title, questions);
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

// Map addDeck action creator as prop on component
const mapDispatchToProps = () => ({
    addDeck
});

export default connect(mapStateToProps, mapDispatchToProps)(NewDeck);