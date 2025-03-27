import React from 'react';
import { ActivityIndicator, FlatList, StyleSheet } from 'react-native';
import { TranslatedPlanet } from '../../types/Planets';
import CardPlanet from '../organisms/CardPlanet';
import useColors from '../../theme/colors';

type Props = {
  planets: TranslatedPlanet[];
  hasNextPage: boolean;
  fetchNextPage: () => any;
  isFetchingNextPage: boolean;
};

const PlanetsLayout = (props: Props) => {
  const {background} = useColors();
  return (
    <FlatList
      style={{...styles.container, backgroundColor: background}}
      data={props.planets}
      renderItem={({ item }) => <CardPlanet item={item} />}
      onEndReached={() => {
        if (props.hasNextPage) {
          props.fetchNextPage();
        }
      }}
      onEndReachedThreshold={0.5}
      ListFooterComponent={
        props.isFetchingNextPage ? <ActivityIndicator size="large" style={styles.spin} /> : null
      }
    />
  );
};

export default PlanetsLayout;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  spin: {
    marginBottom: 20,
  },
});
