import { StyleSheet, View } from 'react-native';
import CardTitle from '../atoms/CardTitle';
import CardLabelValue from '../molecules/CardLabelValue';
import { TranslatedPerson } from '../../types/People';

type Props = {
  item: TranslatedPerson;
};

const CardPerson = (props: Props) => {
  return (
    <View style={styles.card}>
      <CardTitle title={props.item.nombre} />
      <CardLabelValue label={'Gender:'} value={props.item.genero} />
      <CardLabelValue
        label={'Birth Year:'}
        value={props.item.anio_nacimiento}
      />
    </View>
  );
};

export default CardPerson;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
});
