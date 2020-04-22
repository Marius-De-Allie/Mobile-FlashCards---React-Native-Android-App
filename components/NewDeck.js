import React, { Component } from 'react';
import { View, Text, KeyboardAvoidingView, TextInput } from 'react-native';
import { connect } from 'react-redux';

class NewDeck extends Component {
    state = {
        deckTitle: ''
    };

    onInputChange = (text) => {
        let deckTitle = text.trim(start);
        this.setState(() => ({
            deckTitle
        }))
    };
    
    render() {
        return (
            <KeyboardAvoidingView>
                <Text>Create New Deck</Text>
            </KeyboardAvoidingView>
        );
    }
};

// Access the following store state as props on this component.
const mapStateToProps = (state) => ({
    decks: state
});

export default connect(mapStateToProps)(NewDeck);