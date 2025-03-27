import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { typography } from '../../theme';
import useColors from '../../theme/colors';

type Props = {
  value: string | number;
};

const CardValue = (props: Props) => {
  const { cardValue } = useColors();

  return (
    <View>
      <Text style={{ ...styles.value, color: cardValue }}>{props.value}</Text>
    </View>
  );
};

export default CardValue;

const styles = StyleSheet.create({
  value: {
    fontSize: typography.fontSize.md,
    fontWeight: 'bold',
  },
});
