import { createStackNavigator } from '@react-navigation/stack';
import MyTabs from './MyTabs';
import DetailsScreen from '../components/pages/DetailsScreen';
import { TranslatedPerson } from '../types/People';
import { typography } from '../theme';
import useColors from '../theme/colors';

type RootStackParamList = {
  MainTabs: undefined;
  Details: { person: TranslatedPerson };
};

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  const { navigationBackground, navigationText } = useColors();
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
            backgroundColor: navigationBackground,
            height: 52,
          },
          headerTitleStyle: {
            fontSize: typography.fontSize.xl,
            fontWeight: 'bold',
            color: navigationText,
          },
          headerTitleAlign: 'center',
          headerTintColor: navigationText,
        }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;

