import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View, Platform } from 'react-native';
import fetchPeople from './queries/usePeople';
import fetchFilms from './queries/useFilms';
import fetchPlanets from './queries/usePlanets';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaView } from 'react-native';

type TranslatedPerson = {
  altura: string;
  anio_nacimiento: string;
  color_ojos: string;
  color_pelo: string;
  color_piel: string;
  created: string;
  edited: string;
  especies: string[];
  genero: string;
  mundo_natal: string;
  naves_espaciales: string[];
  nombre: string;
  peliculas: string[];
  peso: string;
  url: string;
  vehiculos: string[];
};

type TranslatedFilm = {
  personajes: string[];
  director: string;
  id_episodio: string;
  texto_apertura: string;
  planetas: string[];
  productor: string;
  fecha_lanzamiento: string;
  especies: string[];
  naves_espaciales: string[];
  titulo: string;
  vehiculos: string[];
  url: string;
  creado: string;
  editado: string;
};

type TranslatedPlanet = {
  nombre: string;
  periodo_rotacion: string;
  periodo_orbital: string;
  diametro: string;
  clima: string;
  gravedad: string;
  terreno: string;
  aguas_superficiales: string;
  poblacion: string;
  residentes: string[];
  peliculas: string[];
  creado: string;
  editado: string;
  url: string;
};

const MoviesScreen = () => {
  const [films, setFilms] = useState<TranslatedFilm[]>([]);

  useEffect(() => {
    (async () => {
      const dataFilms = await fetchFilms();
      setFilms(dataFilms);
    })();
  }, []);
  return (
    <View>
      <FlatList
        style={styles.list}
        data={films}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View>
              <Text style={styles.movieTitle}>{item.titulo}</Text>
            </View>
            <View style={styles.director}>
              <Text>Director</Text>
              <Text style={styles.directorName}>{item.director}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const PeopleScreen = () => {
  const [people, setPeople] = useState<TranslatedPerson[]>([]);

  useEffect(() => {
    (async () => {
      const dataPeople = await fetchPeople();
      setPeople(dataPeople);
    })();
  }, []);
  return (
    <View>
      <FlatList
        data={people}
        renderItem={({ item }) => (
          <View>
            <Text>{item.nombre}</Text>
          </View>
        )}
      />
    </View>
  );
};

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
        component={MoviesScreen}
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
  list: {
    borderWidth: 2,
  },
  card: {
    padding: 10,
    backgroundColor: '#C18DB4',
    justifyContent: 'space-between',
    marginVertical: 5,
    borderRadius: 10,
    flexWrap: 'nowrap',
    borderColor: '#000',
    gap: 8,
  },
  movieTitle: {
    fontSize: 18,
    fontWeight: 500,
  },
  director: {
    flexDirection: 'row',
    gap: 4,
    justifyContent: 'flex-end',
  },
  directorName: {
    fontWeight: 700,
  },
});
