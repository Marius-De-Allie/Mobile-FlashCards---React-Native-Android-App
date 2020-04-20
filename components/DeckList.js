import React, { Component }from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

const DeckList = (props) => {
    console.log(props);
    return (
        <View>
            <Text>Deck List View Comp</Text>
        </View>

    );
} 

const mapStateToProps = (state) => ({
    decks: state,
})

export default DeckList;