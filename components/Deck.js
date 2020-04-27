import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

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
            <View style={styles.deckTextContainer}>
                <Text style={styles.deckNameText}>{`${decks[route.params.deckId].title} deck`}</Text>
                <Text style={{fontSize: 20}}>{`${decks[route.params.deckId].questions.length} card(s)`}</Text>
            </View>
            <View style={styles.btnsContainer}>
                <TouchableOpacity
                    disabled={decks[route.params.deckId].questions.length <= 0}
                    onPress={goToQuiz}
                    style={[styles.buttons, {marginRight: 30}]}
                >
                    <Ionicons name="md-play" size={18} color="#fff" />
                    <Text style={styles.buttonText}>{`  Take Quiz`}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={goToNewCard}
                    style={[styles.buttons, {marginLeft: 30}]}
                >
                    <MaterialIcons name="add-box" size={18} color="#fff" />
                    <Text style={styles.buttonText}>{`  Add Card`}</Text>
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
        paddingHorizontal: 30
    },
    deckTextContainer: {
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal:  50,
        paddingVertical: 15,
        backgroundColor: '#3498db',
        borderRadius: 5,
        marginVertical: 30,
    },
    deckNameText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        paddingBottom: 3
    },
    btnsContainer: {
        paddingVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30
    },
    buttons: {
        backgroundColor: '#2ecc71',
        padding: 15,
        borderRadius: 5,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
    }
})

export default connect(mapStateToProps)(Deck);