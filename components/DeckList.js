import React, { Component }from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import DeckListItem from './DeckListItem';

const DeckList = (props) => {
    const { decks } = props;
    // Array of all decks.
    const deckIds = Object.keys(decks);
    console.log('DECKIDS', deckIds);
    return (
        <View style={styles.container}>
            <Text>Your Decks</Text>
            {deckIds.map(id => 
                <DeckListItem 
                    key={id} 
                    title={decks[id].title}
                    cards={decks[id].questions.length}
                    deckId={id} 
                />
            )}
        </View>
    );
} 

const mapStateToProps = (state) => ({
    decks: state
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
    }
});

export default connect(mapStateToProps)(DeckList);