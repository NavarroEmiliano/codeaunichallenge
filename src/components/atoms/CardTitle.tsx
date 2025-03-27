import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { typography } from '../../theme';
import useColors from '../../theme/colors';

type Props = {
  title: string;
};

const CardTitle = (props: Props) => {
  const { cardTitle } = useColors();

  return (
    <View>
      <Text style={{ ...styles.title, color: cardTitle }}>{props.title}</Text>
    </View>
  );
};

export default CardTitle;

const styles = StyleSheet.create({
  title: {
    fontSize: typography.fontSize.lg,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
