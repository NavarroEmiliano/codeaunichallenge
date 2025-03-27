import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FilmsScreen from '../components/pages/FilmsScreen';
import PeopleScreen from '../components/pages/PeopleScreen';
import PlanetsScreen from '../components/pages/PlanetsScreen';
import { typography } from '../theme';
import useColors from '../theme/colors';

const Tab = createMaterialTopTabNavigator();

const MyTabs = () => {
  const { navigationBackground, navigationText } = useColors();
  return (
    <Tab.Navigator
      initialRouteName="Movies"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: navigationBackground,
          height: 50,
        },
        tabBarLabelStyle: {
          fontSize: typography.fontSize.md,
          fontWeight: 'bold',
          color: navigationText,
        },
      }}>
      <Tab.Screen
        name="Movies"
        component={FilmsScreen}
        options={{ tabBarLabel: 'MOVIES' }}
      />
      <Tab.Screen
        name="People"
        component={PeopleScreen}
        options={{ tabBarLabel: 'PEOPLE' }}
      />
      <Tab.Screen
        name="Planets"
        component={PlanetsScreen}
        options={{ tabBarLabel: 'PLANETS' }}
      />
    </Tab.Navigator>
  );
};

export default MyTabs;
