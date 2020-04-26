import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { connect } from 'react-redux';

const Deck = ({route, decks, navigation}) => {
    
    const goToQuiz = () => {
        navigation.push('Quiz', {
            deckId: route.params.deckId
        })
    };

    const goToNewCard = () => {
        navigation.navigate('Add Card', {
            deckId: route.params.deckId
        })
    };

    return (
        <View style={styles.container}>
            <View>
                <Text>{`${decks[route.params.deckId].title} deck`}</Text>
                <Text>{`${decks[route.params.deckId].questions.length} card(s)`}</Text>
            </View>
            <View>
                <TouchableOpacity
                    disabled={decks[route.params.deckId].questions.length <= 0}
                    onPress={goToQuiz}
                >
                    <Text>Take Quiz</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={goToNewCard}
                >
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

// Style object.
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    deckTextContainer: {
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal:  50,
        paddingVertical: 15,
        backgroundColor: 'lightblue',
        borderRadius: 5

    }
})

export default connect(mapStateToProps)(Deck);