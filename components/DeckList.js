import React, { Component }from 'react';
import { View, Text } from 'react-native';

const DeckList = (props) => (
    <View>
        <Text>Deck List View Comp</Text>
    </View>
); 

const mapStateToProps = ({decks}) => ({
    decks,
    deckIds: Object.keys(decks)
})

export default DeckList;