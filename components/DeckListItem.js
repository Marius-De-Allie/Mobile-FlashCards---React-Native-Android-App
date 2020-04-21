import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const DeckListItem = ({title, cards, deckId}) => {
    const navigation = useNavigation();
    // Navigate to Deck route.
    const goToDeck = () => {
        navigation.push('Deck', {
            deckId: title
        })
    };

    return (
        <View>
            <TouchableWithoutFeedback onPress={goToDeck}>
                <View>
                    <Text><MaterialCommunityIcons name="cards" />{title}</Text>
                    <Text>{`${cards} card(s)`}</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
};


export default DeckListItem;