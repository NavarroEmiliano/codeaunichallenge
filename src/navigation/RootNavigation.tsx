import { createStackNavigator } from '@react-navigation/stack';
import MyTabs from './MyTabs';
import DetailsScreen from '../components/pages/DetailsScreen';
import { TranslatedPerson } from '../types/People';
import { colors } from '../theme';

type RootStackParamList = {
  MainTabs: undefined;
  Details: { person: TranslatedPerson };
};

const Stack = createStackNavigator<RootStackParamList>();

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
        component={DetailsScreen}
        options={{
          headerTitle: 'Details',
          headerStyle: {
            backgroundColor: colors.primary,
            height: 52,
          },
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: 'bold',
            color: 'white',
          },
          headerTitleAlign: 'center',
          headerTintColor: 'white',
        }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;

