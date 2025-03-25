import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { TranslatedPerson } from '../../types/People';
import { useSpecie } from '../../queries/useSpecie';
import { queryClient } from '../../api/QueryClientProvider';
import { TranslatedFilm } from '../../types/Films';
import { TranslatedPlanet } from '../../types/Planets';
import useStarships from '../../queries/useStarships';
import useVehicles from '../../queries/useVehicles';
import { StackScreenProps } from '@react-navigation/stack';

type RootStackParamList = {
  MainTabs: undefined;
  Details: { person: TranslatedPerson };
};

type Props = StackScreenProps<RootStackParamList, 'Details'>;

const DetailsScreen = ({ route }: Props) => {
  const { person } = route.params;
  const { data: personSpecies } = useSpecie(person.especies);
  const { data: starships } = useStarships(person.naves_espaciales);
  const { data: vehicles } = useVehicles(person.vehiculos);

  const speciesNames = personSpecies?.map(i => i.nombre);

  const filmsCached = queryClient.getQueryData<{
    pages: { results: TranslatedFilm[] }[];
  }>(['films']);
  const planetsCached = queryClient.getQueryData<{
    pages: { results: TranslatedPlanet[] }[];
  }>(['planets']);

  const films =
    filmsCached?.pages
      .flatMap(page => page.results)
      .filter(f => person.peliculas.includes(f.url)) || [];

  const planets =
    planetsCached?.pages
      .flatMap(page => page.results)
      .filter(f => person.mundo_natal.includes(f.url)) || [];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Información General</Text>
        <Text style={styles.item}>Nombre: {person.nombre}</Text>
        <Text style={styles.item}>Género: {person.genero}</Text>
        <Text style={styles.item}>Altura: {person.altura} cm</Text>
        <Text style={styles.item}>Color de ojos: {person.color_ojos}</Text>
        <Text style={styles.item}>Color de pelo: {person.color_pelo}</Text>
        <Text style={styles.item}>Color de piel: {person.color_piel}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Especies</Text>
        {speciesNames?.map(i => (
          <Text key={i} style={styles.item}>
            {i}
          </Text>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Películas</Text>
        {films?.map(i => (
          <Text key={i.url} style={styles.item}>
            {i.titulo}
          </Text>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Planeta Natal</Text>
        {planets?.map(i => (
          <Text key={i.url} style={styles.item}>
            {i.nombre}
          </Text>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Naves Espaciales</Text>
        {starships?.map(i => (
          <Text key={i.url} style={styles.item}>
            {i.nombre}
          </Text>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Vehículos</Text>
        {vehicles?.map(i => (
          <Text key={i.url} style={styles.item}>
            {i.nombre}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 10,
  },
  section: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  item: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
});

export default DetailsScreen;
