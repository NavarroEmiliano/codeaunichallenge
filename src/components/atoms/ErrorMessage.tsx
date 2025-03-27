import { View, Text, StyleSheet } from 'react-native';

type Props = {
  error: string | null;
};

const ErrorMessage = ({ error }: Props) => {
  if (!error) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>⚠️ Error: {error}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#ffcccc',
    borderRadius: 8,
    margin: 10,
  },
  text: {
    color: '#900',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ErrorMessage;
