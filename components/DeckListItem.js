import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const DeckListItem = ({title, cards}) => {
    const navigation = useNavigation();
    return (
        <View>
            <TouchableWithoutFeedback>
                <View>
                    <Text><MaterialCommunityIcons name="cards" />{title}</Text>
                    <Text>{`${cards} card(s)`}</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
};


export default DeckListItem;