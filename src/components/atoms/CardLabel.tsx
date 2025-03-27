import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { typography } from '../../theme';
import useColors from '../../theme/colors';

type Props = {
  label: string;
};

const CardLabel = (props: Props) => {
  const { cardLabel } = useColors();
  return (
    <View>
      <Text style={{ ...styles.label, color: cardLabel }}>{props.label}</Text>
    </View>
  );
};

export default CardLabel;

const styles = StyleSheet.create({
  label: {
    fontSize: typography.fontSize.md,
  },
});
