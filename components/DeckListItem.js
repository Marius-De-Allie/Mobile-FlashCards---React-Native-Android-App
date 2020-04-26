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
                <View style={{alignItems: 'center'}}>
                    <Text style={styles.deckNametext}>
                        <MaterialCommunityIcons 
                            name="cards"
                            size={35}
                            color="gray"
                        />
                        {title}
                    </Text>
                    <Text style={{fontSize: 22, paddingVertical: 3}}>{`${cards} card(s)`}</Text>
                </View>
            </TouchableOpacity>
    );
};

// CSS styles object.
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightblue',
        paddingHorizontal: 50,
        paddingVertical: 15,
        borderRadius: 5,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        marginBottom: 30,
        marginTop: 30,
    },
    deckNametext: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
    }
})


export default DeckListItem;