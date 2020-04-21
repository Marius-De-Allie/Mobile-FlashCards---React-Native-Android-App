import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

const Deck = ({route, decks}) => {
    return (
        <View>
            <Text>{`${decks[route.params.deckId].title} deck`}</Text>
            <Text>{`${decks[route.params.deckId].questions.length} card(s)`}</Text>
            <View>
                <TouchableOpacity>
                    <Text>Take Quiz</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Add Card</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
// Access the following store state as props on this component.
const mapStateToProps = (state) => ({
    decks: state
});

export default connect(mapStateToProps)(Deck);