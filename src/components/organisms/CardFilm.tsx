import React from 'react';
import { StyleSheet, View } from 'react-native';
import CardTitle from '../atoms/CardTitle';
import CardLabelValue from '../molecules/CardLabelValue';
import { TranslatedFilm } from '../../types/Films';
import { colors } from '../../theme';

type Props = {
  item: TranslatedFilm;
};

const CardFilm = (props: Props) => {
  return (
    <View style={styles.container}>
      <CardTitle title={props.item.titulo} />
      <CardLabelValue label={'Episode:'} value={props.item.id_episodio} />
      <CardLabelValue label={'Director:'} value={props.item.director} />
      <CardLabelValue
        label={'Release Date:'}
        value={props.item.fecha_lanzamiento}
      />
    </View>
  );
};

export default CardFilm;

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
