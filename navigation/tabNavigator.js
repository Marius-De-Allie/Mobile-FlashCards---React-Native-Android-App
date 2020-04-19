import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DeckList from '../components/DeckList';
import NewDeck from '../components/NewDeck';

const Tab = createMaterialTopTabNavigator();

const TabNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen name="Decks" component={DeckList} />
        <Tab.Screen name="New Deck" component={NewDeck} />
    </Tab.Navigator>
);