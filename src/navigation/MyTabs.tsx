import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FilmsScreen from '../components/pages/FilmsScreen';
import PeopleScreen from '../components/pages/PeopleScreen';
import PlanetsScreen from '../components/pages/PlanetsScreen';

const Tab = createMaterialTopTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator initialRouteName="Movies">
      <Tab.Screen
        name="Movies"
        component={FilmsScreen}
        options={{ tabBarLabel: 'Movies' }}
      />
      <Tab.Screen
        name="People"
        component={PeopleScreen}
        options={{ tabBarLabel: 'People' }}
      />
      <Tab.Screen
        name="Planets"
        component={PlanetsScreen}
        options={{ tabBarLabel: 'Planets' }}
      />
    </Tab.Navigator>
  );
};

export default MyTabs;
