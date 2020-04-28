import React, { Component }from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import DeckListItem from './DeckListItem';

const DeckList = (props) => {
    const { decks } = props;
    // Array of all decks.
    const deckIds = Object.keys(decks);
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Your Decks</Text>
            {deckIds.map(id => <DeckListItem 
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
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        marginHorizontal: 30,
        marginVertical: 30
    },
    text: {
        fontSize: 32,
        // marginTop: 30,
        marginBottom: 30,
        alignSelf: 'center'
    }
});

export default connect(mapStateToProps)(DeckList);