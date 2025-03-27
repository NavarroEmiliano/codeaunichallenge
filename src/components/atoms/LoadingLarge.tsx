import { ActivityIndicator, StyleSheet } from 'react-native';

type Props = {
  loading: boolean;
};

const LoadingLarge = ({ loading }: Props) => {
  if (!loading) {
    return null;
  }
  return <ActivityIndicator style={styles.container} size="large" />;
};

export default LoadingLarge;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
});
