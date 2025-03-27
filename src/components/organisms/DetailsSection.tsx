import { StyleSheet, View } from 'react-native';
import CardTitle from '../atoms/CardTitle';
import { colors } from '../../theme';
import CardLabel from '../atoms/CardLabel';

type Props = {
  title: string;
  data: string[] | [];
};

const DetailsSection = (props: Props) => {
  return (
    <View style={styles.container}>
      <CardTitle title={props.title} />
      {props.data?.map(i => (
        <CardLabel key={i} label={i} />
      ))}
    </View>
  );
};

export default DetailsSection;

const styles = StyleSheet.create({
  container: {
    gap: 4,
    backgroundColor: colors.white,
    padding: 15,
    marginBottom: 20,
    borderRadius: 8,
    elevation: 3,
  },
});
