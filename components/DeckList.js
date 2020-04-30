import React from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import DeckListItem from './DeckListItem';

const DeckList = (props) => {
    const { decks } = props;
    // Array of all decks.
    const deckIds = Object.keys(decks);
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.text}>Your Decks</Text>
            {deckIds.map(id => <DeckListItem 
                                    key={id} 
                                    title={decks[id].title}
                                    cards={decks[id].questions.length}
                                    deckId={id} 
                                />
            )}
        </ScrollView>
    );
} ;

const mapStateToProps = (state) => ({
    decks: state
});

// Style object.
const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        marginHorizontal: 30,
        marginVertical: 30
    },
    text: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 30,
        alignSelf: 'center'
    }
});

export default connect(mapStateToProps)(DeckList);

