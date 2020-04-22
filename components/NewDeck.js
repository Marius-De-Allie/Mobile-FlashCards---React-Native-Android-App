import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class NewDeck extends Component {
    
    render() {
        return (
            <View>
                <Text>New Deck View Comp</Text>
            </View>
        );
    }
};

// Access the following store state as props on this component.
const mapStateToProps = (state) => ({
    decks: state
});

export default connect(mapStateToProps)(NewDeck);