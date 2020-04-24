import React from 'react';
import { View, Text } from 'react-native';

class Quiz extends React.Component {
    // Component state.
    state = {
        showAnswer: false,
        page: 0,
        answer: '',
        correct: 0
    }

    render() {
        return (
            <View>
                <Text>Quiz Comp</Text>
            </View>
        );    
    }
};

export default Quiz;