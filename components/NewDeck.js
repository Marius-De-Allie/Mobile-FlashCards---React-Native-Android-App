import React, { Component } from 'react';
import { Text, KeyboardAvoidingView, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { MaterialIcons } from '@expo/vector-icons';
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
        let deckId = this.state.deckTitle.replace(/\s+/g,'');
        // Set newly created deck's deck id to lower case. 
        deckId = deckId.toLowerCase()
        // Create an array of all current Deck keys(ids).
        const currentDeckIds = Object.keys(this.props.decks);
        // Set each deck id element in array to lower case. 
        currentDeckIds.forEach(id => id.toLowerCase());
        // Check whether newly created Deck's id is equal to the deck Id of currently existing deck.
        if(!currentDeckIds.includes(deckId)) {
        /* If not add this new deck to the store. */

            // Deck title property
            const title = this.state.deckTitle;
            // Deck questions property
            const questions = [];
    
            // Dispatch action creator to add new deck to store.
            this.props.dispatch(addDeck(deckId, title, questions));
            // Clear input field after submission.
            this.setState(() => ({
                deckTitle: ''
            }));
            // Redirect to Decks List view.
            this.props.navigation.navigate('Deck', {deckId});
        } else {
            /* Else output an error message to user */
            alert('Sorry a deck with this name already exists, please use a different deck title.')
        }
    };
    
    render() {
        const {deckTitle} = this.state;
        return (
            <KeyboardAvoidingView 
                behavior="height"
                style={styles.container}
            >
                <Text style={styles.headerText}>Create New Deck</Text>
                <TextInput 
                    value={deckTitle}
                    onChangeText={(text) => this.onInputChange(text)}
                    placeholder="Please enter title for new deck"
                    style={styles.textInput}
                />
                <TouchableOpacity 
                    onPress={this.onDeckSubmit}
                    disabled={deckTitle === ''}
                    style={[styles.button, {backgroundColor: deckTitle === '' ? '#F2F2F2' : '#2ecc71',
                    borderTopWidth: deckTitle === '' ? 1 : 0, 
                    borderRightWidth: deckTitle === '' ? 1 : 0, 
                    borderBottomWidth: deckTitle === '' ? 1 : 0, 
                    borderLeftWidth: deckTitle === '' ? 1 : 0,
                }]}
                >


                    <MaterialIcons name="note-add" size={18} color={deckTitle === '' ? '#3498db' : '#fff' } />
                    <Text style={[styles.buttonText, {color: deckTitle === '' ? '#3498db' : '#fff' }]}>{`  Create Deck`}</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        );
    }
};

// Access the following store state as props on this component.
const mapStateToProps = (state) => ({
    decks: state
});

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
        fontWeight: 'bold',
        marginBottom: 30
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
        padding: 10, 
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
        borderBottomColor: '#3498db', 
        borderTopColor: '#3498db', 
        borderRightColor: '#3498db', 
        borderLeftColor: '#3498db'
    },
    buttonText: {
        fontSize: 18,
    }
});

export default connect(mapStateToProps)(NewDeck);