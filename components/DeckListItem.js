import React from 'react';
import { View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const DeckListItem = ({title, cards}) => (
    <View>
        <Text><MaterialCommunityIcons name="cards" />{title}</Text>
    </View>
);

export default DeckListItem;