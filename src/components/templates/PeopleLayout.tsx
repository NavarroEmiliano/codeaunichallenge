import React, { useState } from 'react';
import { FlatList, TextInput, View } from 'react-native';
import CardPerson from '../organisms/CardPerson';
import { TranslatedPerson } from '../../types/People';

type Props = {
  people: TranslatedPerson[];
};

const PeopleLayout = (props: Props) => {
  const [filteredPeople, setFilteredPeople] = useState<TranslatedPerson[]>(
    props.people,
  );

  const HandleInput = (text: string) => {
    setFilteredPeople(
      props.people.filter(p =>
        p.nombre.toLowerCase().includes(text.toLowerCase()),
      ),
    );
  };

  return (
    <View>
      <TextInput onChangeText={HandleInput} />
      <FlatList
        data={filteredPeople}
        renderItem={({ item }) => <CardPerson item={item} />}
      />
    </View>
  );
};

export default PeopleLayout;
