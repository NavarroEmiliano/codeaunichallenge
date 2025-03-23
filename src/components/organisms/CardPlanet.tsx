import React from 'react';
import { StyleSheet, View } from 'react-native';
import CardTitle from '../atoms/CardTitle';
import CardLabelValue from '../molecules/CardLabelValue';
import { TranslatedPlanet } from '../../types/Planets';

type Props = {
  item: TranslatedPlanet;
};

const CardPlanet = (props: Props) => {
  return (
    <View style={styles.card}>
      <CardTitle title={props.item.nombre} />
      <CardLabelValue label={'Population:'} value={props.item.poblacion} />
      <CardLabelValue label={'Diameter:'} value={props.item.diametro} />
    </View>
  );
};

export default CardPlanet;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
});
