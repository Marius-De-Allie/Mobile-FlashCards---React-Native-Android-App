import React from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const DeckListItem = ({title, cards, deckId}) => {
    const navigation = useNavigation();
    // Navigate to Deck route.
    const goToDeck = () => {
        navigation.push('Deck', {
            deckId
        })
    };

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={goToDeck}>
                <View style={{alignItems: 'center'}}>
                    <Text style={styles.deckNametext}>
                        <MaterialCommunityIcons 
                            name="cards"
                            size={35}
                        />
                        {title}
                    </Text>
                    <Text style={{fontSize: 22}}>{`${cards} card(s)`}</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
};

// CSS styles object.
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightblue',
        width: 250,
        padding: 50,
        borderRadius: 5,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        marginBottom: 30,
        marginTop: 30,
    },
    deckNametext: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff'
    }
})


export default DeckListItem;