import React, { useEffect } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { TranslatedPerson } from '../../types/People';
import { useSpecie } from '../../queries/useSpecie';
import { queryClient } from '../../api/QueryClientProvider';
import { TranslatedFilm } from '../../types/Films';
import { TranslatedPlanet } from '../../types/Planets';
import useStarships from '../../queries/useStarships';
import useVehicles from '../../queries/useVehicles';
import { StackScreenProps } from '@react-navigation/stack';
import { colors } from '../../theme';
import DetailsSeccion from '../organisms/DetailsSection';
import DetailsMainSection from '../organisms/DetailsMainSection';
import LoadingLarge from '../atoms/LoadingLarge';
import ErrorMessage from '../atoms/ErrorMessage';

type RootStackParamList = {
  MainTabs: undefined;
  Details: { person: TranslatedPerson };
};

type Props = StackScreenProps<RootStackParamList, 'Details'>;

const DetailsScreen = ({ route }: Props) => {
  const { person } = route.params;
  const {
    data: personSpecies,
    isLoading: speciesLoading,
    error: speciesError,
  } = useSpecie(person.especies);
  const {
    data: starships,
    isLoading: starshipsLoading,
    error: starshipsError,
  } = useStarships(person.naves_espaciales);
  const {
    data: vehicles,
    isLoading: vehiclesLoading,
    error: vehiclesError,
  } = useVehicles(person.vehiculos);

  const isLoading = speciesLoading || starshipsLoading || vehiclesLoading;
  const errorMessage =
    speciesError?.message || starshipsError?.message || vehiclesError?.message;

  const speciesNames = personSpecies?.map(i => i.nombre);
  const starshipsNames = starships?.map(i => i.nombre);
  const vehiclesNames = vehicles?.map(i => i.nombre);

  const filmsCached = queryClient.getQueryData<{
    pages: { results: TranslatedFilm[] }[];
  }>(['films']);
  const planetsCached = queryClient.getQueryData<{
    pages: { results: TranslatedPlanet[] }[];
  }>(['planets']);

  const films =
    filmsCached?.pages
      .flatMap(page => page.results)
      .filter(f => person.peliculas.includes(f.url))
      .map(f => f.titulo) || [];

  const planets =
    planetsCached?.pages
      .flatMap(page => page.results)
      .filter(f => person.mundo_natal.includes(f.url))
      .map(f => f.nombre) || [];

  useEffect(() => {
    queryClient.invalidateQueries({ queryKey: ['vehicles'] });
    queryClient.invalidateQueries({ queryKey: ['starships'] });
    queryClient.invalidateQueries({ queryKey: ['specie'] });
  }, [person]);

  if (isLoading) {
    return <LoadingLarge loading={true} />;
  }

  if (errorMessage) {
    return <ErrorMessage error={errorMessage} />;
  }

  return (
    <ScrollView style={styles.container}>
      <DetailsMainSection person={person} />

      <DetailsSeccion title={'Species'} data={speciesNames || []} />
      <DetailsSeccion title={'Movies'} data={films || []} />
      <DetailsSeccion title={'Natural Planet'} data={planets || []} />
      <DetailsSeccion title={'Starships'} data={starshipsNames || []} />
      <DetailsSeccion title={'Vehicles'} data={vehiclesNames || []} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 10,
  },
});

export default DetailsScreen;
