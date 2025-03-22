import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = {
  title: string;
};

const CardTitle = (props: Props) => {
    console.log(props)
  return (
    <View>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

export default CardTitle;

const styles = StyleSheet.create({
  title: {
    borderWidth: 1,
    fontSize: 28,
    fontWeight: 500,
  },
});
