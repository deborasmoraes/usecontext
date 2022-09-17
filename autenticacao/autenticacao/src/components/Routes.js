import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Compromisso from './Compromisso';
import Home from './Home';
import Login from './Login';

const Stack = createNativeStackNavigator()

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='home'
                component={Home}
            />
            <Stack.Screen
                name='login'
                component={Login} />

            <Stack.Screen
                name='compromisso'
                component={Compromisso} />
        </Stack.Navigator>
    )
}