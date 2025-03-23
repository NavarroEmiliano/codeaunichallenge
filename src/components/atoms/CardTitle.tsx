import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = {
  title: string;
};

const CardTitle = (props: Props) => {
  return (
    <View>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

export default CardTitle;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
