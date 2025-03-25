import { createStackNavigator } from '@react-navigation/stack';
import MyTabs from './MyTabs';
import Details from '../screens/Details';

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainTabs"
        component={MyTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{ headerTitle: 'Details' }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
