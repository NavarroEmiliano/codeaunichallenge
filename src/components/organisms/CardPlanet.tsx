import React from 'react';
import { StyleSheet, View } from 'react-native';
import CardTitle from '../atoms/CardTitle';
import CardLabelValue from '../molecules/CardLabelValue';
import { TranslatedPlanet } from '../../types/Planets';
import { colors } from '../../theme';

type Props = {
  item: TranslatedPlanet;
};

const CardPlanet = (props: Props) => {
  return (
    <View style={styles.container}>
      <CardTitle title={props.item.nombre} />
      <CardLabelValue label={'Population:'} value={props.item.poblacion} />
      <CardLabelValue label={'Diameter:'} value={props.item.diametro} />
    </View>
  );
};

export default CardPlanet;

const styles = StyleSheet.create({
  container: {
    gap: 4,
    backgroundColor: colors.white,
    padding: 15,
    marginBottom: 20,
    borderRadius: 8,
    elevation: 3,
  },
});
