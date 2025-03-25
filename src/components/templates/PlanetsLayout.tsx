import React from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import { TranslatedPlanet } from '../../types/Planets';
import CardPlanet from '../organisms/CardPlanet';

type Props = {
  planets: TranslatedPlanet[];
  hasNextPage: boolean;
  fetchNextPage: () => any;
  isFetchingNextPage: boolean;
};

const PlanetsLayout = (props: Props) => {

  return (
    <FlatList
      data={props.planets}
      renderItem={({ item }) => <CardPlanet item={item} />}
      onEndReached={() => {
        if (props.hasNextPage) {
          props.fetchNextPage();
        }
      }}
      onEndReachedThreshold={1}
      ListFooterComponent={
        props.isFetchingNextPage ? <ActivityIndicator size="small" /> : null
      }
    />
  );
};

export default PlanetsLayout;
