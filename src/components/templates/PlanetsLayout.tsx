import React from 'react';
import { FlatList } from 'react-native';
import { TranslatedPlanet } from '../../types/Planets';
import CardPlanet from '../organisms/CardPlanet';

type Props = {
  planets: TranslatedPlanet[];
};

const PlanetsLayout = (props: Props) => {
  return (
    <FlatList
      data={props.planets}
      renderItem={({ item }) => <CardPlanet item={item} />}
    />
  );
};

export default PlanetsLayout;
