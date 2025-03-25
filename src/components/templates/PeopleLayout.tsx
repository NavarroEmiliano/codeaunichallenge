import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import CardPerson from '../organisms/CardPerson';
import { TranslatedPerson } from '../../types/People';
import { colors } from '../../theme';

type Props = {
  people: TranslatedPerson[];
  hasNextPage: boolean;
  fetchNextPage: () => any;
  isFetchingNextPage: boolean;
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

  useEffect(() => {
    setFilteredPeople(props.people);
  }, [props.people]);

  return (
    <View style={styles.container}>
      <TextInput onChangeText={HandleInput} style={styles.searchBar} />
      <FlatList
        style={styles.list}
        data={filteredPeople}
        renderItem={({ item }) => <CardPerson item={item} />}
        onEndReached={() => {
          if (props.hasNextPage) {
            props.fetchNextPage();
          }
        }}
        onEndReachedThreshold={1}
        ListFooterComponent={
          props.isFetchingNextPage ? <ActivityIndicator size="small" /> : null
        }
      />
    </View>
  );
};

export default PeopleLayout;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    backgroundColor: colors.background,
    paddingBlockStart: 10,
    minHeight: '100%',
  },
  list: {
    backgroundColor: colors.background,
    padding: 10,
  },
  searchBar: {
    marginInline: 10,
    backgroundColor: colors.white,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
});
