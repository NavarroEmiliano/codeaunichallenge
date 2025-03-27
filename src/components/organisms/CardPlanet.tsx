import React from 'react';
import { StyleSheet, View } from 'react-native';
import CardTitle from '../atoms/CardTitle';
import CardLabelValue from '../molecules/CardLabelValue';
import { TranslatedPlanet } from '../../types/Planets';

import useColors from '../../theme/colors';

type Props = {
  item: TranslatedPlanet;
};


const CardPlanet = ({item}: Props) => {
  const { backgroundCard } = useColors();
  return (
    <View style={{ ...styles.container, backgroundColor: backgroundCard }}>
      <CardTitle title={item.nombre} />
      <CardLabelValue label={'Population:'} value={item.poblacion} />
      <CardLabelValue label={'Diameter:'} value={item.diametro} />
      <CardLabelValue label={'Gravity:'} value={item.gravedad} />
      <CardLabelValue label={'Terrain:'} value={item.terreno} />
    </View>
  );
};

export default CardPlanet;

const styles = StyleSheet.create({
  container: {
    gap: 4,
    padding: 15,
    marginBottom: 20,
    borderRadius: 8,
    elevation: 3,
  },
});
