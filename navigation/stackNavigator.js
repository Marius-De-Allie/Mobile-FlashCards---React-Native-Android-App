import { createStackNavigator } from '@react-navigation/stack';
import Deck from '../components/Deck';

const Stack = createStackNavigator();

const StackNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Deck" component={Deck} />
        <Stack.Screen name="Quiz" component={Quiz} />
        <Stack.Screen name="New Card" component={NewQuestion} />
    </Stack.Navigator>
);