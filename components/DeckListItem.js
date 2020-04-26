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
        <View>
            <TouchableWithoutFeedback onPress={goToDeck}>
                <View>
                    <Text ><MaterialCommunityIcons name="cards"/>{title}</Text>
                    <Text>{`${cards} card(s)`}</Text>
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
    }
})


export default DeckListItem;