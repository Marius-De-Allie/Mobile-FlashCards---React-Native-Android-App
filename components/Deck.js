import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

const Deck = ({routes, deckId}) => {
    return (
        <View>
            <Text>Deck Comp</Text>
        </View>
    );
};
// Access the following store state as props on this component.
const mapStateToProps = (state) => ({
    decks: state
});

export default connect(mapStateToProps)(Deck);