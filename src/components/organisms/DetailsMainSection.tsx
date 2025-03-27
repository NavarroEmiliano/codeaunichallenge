import { StyleSheet, View } from 'react-native';
import CardTitle from '../atoms/CardTitle';
import CardLabelValue from '../molecules/CardLabelValue';
import { TranslatedPerson } from '../../types/People';
import useColors from '../../theme/colors';

type Props = {
  person: TranslatedPerson;
};

const DetailsMainSection = ({ person }: Props) => {
  const { backgroundCard } = useColors();
  return (
    <View style={{ ...styles.container, backgroundColor: backgroundCard }}>
      <CardTitle title={'Personal Information'} />
      <CardLabelValue label={'Name:'} value={person.nombre} />
      <CardLabelValue label={'Gender:'} value={person.genero} />
      <CardLabelValue label={'Birth Year:'} value={person.anio_nacimiento} />
      <CardLabelValue label={'Height:'} value={`${person.altura} cm`} />
      <CardLabelValue label={'Eye Color:'} value={person.color_ojos} />
      <CardLabelValue label={'Hair Color:'} value={person.color_pelo} />
      <CardLabelValue label={'Skin Color:'} value={person.color_piel} />
    </View>
  );
};

export default DetailsMainSection;

const styles = StyleSheet.create({
  container: {
    gap: 4,
    padding: 15,
    marginBottom: 20,
    borderRadius: 8,
    elevation: 3,
  },
});
