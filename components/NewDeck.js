import React, { Component } from 'react';
import { View, Text, KeyboardAvoidingView, TextInput } from 'react-native';
import { connect } from 'react-redux';

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
            </KeyboardAvoidingView>
        );
    }
};

// Access the following store state as props on this component.
const mapStateToProps = (state) => ({
    decks: state
});

export default connect(mapStateToProps)(NewDeck);