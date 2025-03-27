import { StyleSheet, View } from 'react-native';
import CardTitle from '../atoms/CardTitle';
import CardLabel from '../atoms/CardLabel';
import useColors from '../../theme/colors';

type Props = {
  title: string;
  data: string[] | [];
};

const DetailsSection = (props: Props) => {
  const { backgroundCard } = useColors();

  return (
    <View style={{...styles.container, backgroundColor: backgroundCard}}>
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
    padding: 15,
    marginBottom: 20,
    borderRadius: 8,
    elevation: 3,
  },
});
