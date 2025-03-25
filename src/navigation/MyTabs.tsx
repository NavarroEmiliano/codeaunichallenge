import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FilmsScreen from '../components/pages/FilmsScreen';
import PeopleScreen from '../components/pages/PeopleScreen';
import PlanetsScreen from '../components/pages/PlanetsScreen';
import { colors, typography } from '../theme';

const Tab = createMaterialTopTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Movies"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: colors.primary,
          height: 50,
        },
        tabBarLabelStyle: {
          fontSize: typography.fontSize.md,
          fontWeight: 'bold',
          color: colors.white,
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
