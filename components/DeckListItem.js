import React from 'react';
import { View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const DeckListItem = ({title, cards}) => (
    <View>
        <Text><MaterialCommunityIcons name="cards" />{title}</Text>
        <Text>{`${cards} card(s)`}</Text>
    </View>
);

export default DeckListItem;