import { Pressable, StyleSheet } from 'react-native';
import CardTitle from '../atoms/CardTitle';
import CardLabelValue from '../molecules/CardLabelValue';
import { TranslatedPerson } from '../../types/People';
import { useNavigation } from '@react-navigation/native';
import useColors from '../../theme/colors';

type Props = {
  item: TranslatedPerson;
};

const CardPerson = (props: Props) => {
  const navigation = useNavigation<any>();
  const handlePress = () => {
    navigation.navigate('Details', { person: props.item });
  };
  const { backgroundCard } = useColors();

  return (
    <Pressable style={{...styles.container, backgroundColor: backgroundCard}} onPress={handlePress}>
      <CardTitle title={props.item.nombre} />
      <CardLabelValue label={'Gender:'} value={props.item.genero} />
      <CardLabelValue
        label={'Birth Year:'}
        value={props.item.anio_nacimiento}
      />
    </Pressable>
  );
};

export default CardPerson;

const styles = StyleSheet.create({
  container: {
    gap: 4,
    padding: 15,
    marginBottom: 20,
    borderRadius: 8,
    elevation: 3,
  },
});
