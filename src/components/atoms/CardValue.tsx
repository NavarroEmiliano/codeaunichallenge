import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = {
  value: string | number;
};

const CardValue = (props: Props) => {
  return (
    <View>
      <Text style={styles.value}>{props.value}</Text>
    </View>
  );
};

export default CardValue;


const styles = StyleSheet.create({
  value: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});
