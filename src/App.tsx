import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View, Platform } from 'react-native';
import fetchPlanets from './queries/usePlanets';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaView } from 'react-native';
import FilmsScreen from './components/pages/FilmsScreen';
import PeopleScreen from './components/pages/PeopleScreen';

const PlanetsScreen = () => {
  const [planets, setPlanets] = useState<TranslatedPlanet[]>([]);

  useEffect(() => {
    (async () => {
      const dataPlanets = await fetchPlanets();
      setPlanets(dataPlanets);
    })();
  }, []);

  return (
    <View>
      <FlatList
        data={planets}
        renderItem={({ item }) => (
          <View>
            <Text>{item.nombre}</Text>
          </View>
        )}
      />
    </View>
  );
};

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
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
}

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  screenTitle: {
    fontSize: 28,
    textAlign: 'center',
  },
  episode: {
    fontSize: 14,
    color: '#555',
  },
  director: {
    fontSize: 14,
    color: '#555',
  },
  releaseDate: {
    fontSize: 14,
    color: '#555',
  },
});
