import { ActivityIndicator, StyleSheet } from 'react-native';
import useColors from '../../theme/colors';

type Props = {
  loading: boolean;
};

const LoadingLarge = ({ loading }: Props) => {
  const {background} = useColors();

  if (!loading) {
    return null;
  }
  return <ActivityIndicator style={{...styles.container, backgroundColor:background}} size="large" />;
};

export default LoadingLarge;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
