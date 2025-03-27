import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';
import CardPerson from '../organisms/CardPerson';
import { TranslatedPerson } from '../../types/People';
import SearchBarPeople from '../molecules/SearchBarPeople';
import useColors from '../../theme/colors';

type Props = {
  people: TranslatedPerson[];
  hasNextPage: boolean;
  fetchNextPage: () => any;
  isFetchingNextPage: boolean;
};

const PeopleLayout = (props: Props) => {
  const [searchText, setSearchText] = useState('');
  const [filteredPeople, setFilteredPeople] = useState<TranslatedPerson[]>(
    props.people,
  );
  const { background } = useColors();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setFilteredPeople(
        props.people.filter(person =>
          person.nombre.toLowerCase().includes(searchText.toLowerCase()),
        ),
      );
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [searchText, props.people]);

  return (
    <View style={{ ...styles.container, backgroundColor: background }}>
      <SearchBarPeople searchText={searchText} setSearchText={setSearchText} />

      <FlatList
        style={{ ...styles.list, backgroundColor: background }}
        data={filteredPeople}
        renderItem={({ item }) => <CardPerson item={item} />}
        keyExtractor={item => item.url}
        onEndReached={() => {
          if (props.hasNextPage) {
            props.fetchNextPage();
          }
        }}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          props.isFetchingNextPage ? (
            <ActivityIndicator size="large" style={styles.spin} />
          ) : null
        }
      />
    </View>
  );
};

export default PeopleLayout;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    paddingBlockStart: 10,
    minHeight: '100%',
  },
  list: {
    padding: 10,
  },
  spin: {
    marginBottom: 20,
  },
});
