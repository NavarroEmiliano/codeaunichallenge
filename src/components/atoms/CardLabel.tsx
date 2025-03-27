import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../theme';

type Props = {
  label: string;
};

const CardLabel = (props: Props) => {
  return (
    <View>
      <Text style={styles.label}>{props.label}</Text>
    </View>
  );
};

export default CardLabel;


const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    color: colors.cardLabel,
  },
});
