import React from 'react';
import { ActivityIndicator, FlatList, StyleSheet } from 'react-native';
import { TranslatedPlanet } from '../../types/Planets';
import CardPlanet from '../organisms/CardPlanet';
import { colors } from '../../theme';

type Props = {
  planets: TranslatedPlanet[];
  hasNextPage: boolean;
  fetchNextPage: () => any;
  isFetchingNextPage: boolean;
};

const PlanetsLayout = (props: Props) => {

  return (
    <FlatList
      style={styles.container}
      data={props.planets}
      renderItem={({ item }) => <CardPlanet item={item} />}
      onEndReached={() => {
        if (props.hasNextPage) {
          props.fetchNextPage();
        }
      }}
      onEndReachedThreshold={1}
      ListFooterComponent={
        props.isFetchingNextPage ? <ActivityIndicator size="large" /> : null
      }
    />
  );
};

export default PlanetsLayout;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    padding: 10,
  },
});