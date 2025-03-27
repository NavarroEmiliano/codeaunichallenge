import React from 'react';
import { StyleSheet, View } from 'react-native';
import CardLabel from '../atoms/CardLabel';
import CardValue from '../atoms/CardValue';

type Props = {
  label: string;
  value: string | number;
};

const CardLabelValue = (props: Props) => {
  return (
    <View style={styles.container}>
      <CardLabel label={props.label} />
      <CardValue value={props.value} />
    </View>
  );
};

export default CardLabelValue;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
});
