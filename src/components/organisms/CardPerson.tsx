import { Pressable, StyleSheet } from 'react-native';
import CardTitle from '../atoms/CardTitle';
import CardLabelValue from '../molecules/CardLabelValue';
import { TranslatedPerson } from '../../types/People';
import { useNavigation } from '@react-navigation/native';

type Props = {
  item: TranslatedPerson;
};

const CardPerson = (props: Props) => {
  const navigation = useNavigation<any>();
  const handlePress = () => {
    navigation.navigate('Details', { person: props.item });
  };

  return (
    <Pressable style={styles.card} onPress={handlePress}>
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
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
});
