import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
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
            <TouchableOpacity 
                onPress={goToDeck}
                style={styles.container}
            >
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                    <MaterialCommunityIcons
                        name="cards"
                        size={35}
                        color="#2ecc71"
                    />
                    <Text style={styles.deckNametext}>
                        {` ${title}`}
                    </Text>
                </View>
                <Text style={{fontSize: 20, paddingVertical: 3, alignSelf: 'center'}}>{`${cards} card(s)`}</Text>
            </TouchableOpacity>
    );
};

// CSS styles object.
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3498db',
        paddingHorizontal: 50,
        paddingVertical: 15,
        borderRadius: 5,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        marginBottom: 30,
        marginTop: 30,
        alignItems: 'center'
    },
    deckNametext: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        paddingVertical: 3
    }
})


export default DeckListItem;