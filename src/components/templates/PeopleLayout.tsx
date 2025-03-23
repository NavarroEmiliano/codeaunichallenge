import React from 'react';
import { FlatList } from 'react-native';
import CardPerson from '../organisms/CardPerson';
import { TranslatedPerson } from '../../types/People';

type Props = {
  people: TranslatedPerson[];
};

const PeopleLayout = (props: Props) => {
  return (
    <FlatList
      data={props.people}
      renderItem={({ item }) => <CardPerson item={item} />}
    />
  );
};

export default PeopleLayout;
