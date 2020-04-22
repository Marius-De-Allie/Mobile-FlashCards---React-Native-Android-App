import React, { Component } from 'react';
import { View, Text } from 'react-native';

class NewQuestion extends Component {
    
    render() {
        console.log(this.props.deckId, this.props.decks);
        return (
            <View>
                <Text>New Question View Comp</Text>
            </View>
        );
    }
};

const mapStateToProps = (state, ownProps) => ({
    decks: state,
    deckId: ownProps.route.params.deckId
});

export default NewQuestion;