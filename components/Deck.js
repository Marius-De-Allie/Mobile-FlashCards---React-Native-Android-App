import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

const Deck = ({route, decks}) => {
    return (
        <View style={{alignItems: 'center', justifyContent: 'space-evenly'}}>
            <Text>{`${decks[route.params.deckId].title} deck`}</Text>
            <Text>{`${decks[route.params.deckId].questions.length} card(s)`}</Text>
        </View>
    );
};
// Access the following store state as props on this component.
const mapStateToProps = (state) => ({
    decks: state
});

export default connect(mapStateToProps)(Deck);