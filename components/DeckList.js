import React from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import DeckListItem from './DeckListItem';

class DeckList extends React.Component {

    componentDidMount() {
        const {decks} = this.props;
        const deckIds = Object.keys(decks);
        if(deckIds.includes(id => decks[id].completedOn === new Date().toLocaleDateString())) {
            console.log('notificaton cancelled for today')
            // Do not send notification on this day.
            clearLocalNotifications()
            // Set notification for next calendar day
            .then(setLocalNotifications)
            } else {
                // Do nothing i.e. notification will execute on this day as normal.
                console.log('notificaton will go off today')
            }
            
    }

    render() {
        const { decks } = this.props;
        // Array of all decks.
        const deckIds = Object.keys(decks);
        const renderUI= () => {
            Object.keys(decks).length > 0 ? 
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.text}>Your Decks</Text>
                {deckIds.map(id => <DeckListItem 
                                        key={id} 
                                        title={decks[id].title}
                                        cards={decks[id].questions.length}
                                        deckId={id} 
                                    />
                )}
            </ScrollView> :
            <ScrollView>
                <Text style={styles.text}>Your Decks</Text>
                <Text>You currently have no decks, Swipe left to add new deck</Text>
            </ScrollView>
        }
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.text}>Your Decks</Text>
                {deckIds.map(id => <DeckListItem 
                                        key={id} 
                                        title={decks[id].title}
                                        cards={decks[id].questions.length}
                                        deckId={id} 
                                    />
                )}
            </ScrollView>
        );
    }
};

const mapStateToProps = (state) => ({
    decks: state
});

// Style object.
const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        marginHorizontal: 30,
        marginVertical: 30
    },
    text: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 30,
        alignSelf: 'center'
    }
});

export default connect(mapStateToProps)(DeckList);

