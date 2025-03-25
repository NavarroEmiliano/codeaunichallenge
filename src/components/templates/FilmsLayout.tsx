import React from 'react';
import { ActivityIndicator, FlatList, StyleSheet } from 'react-native';
import CardFilm from '../organisms/CardFilm';
import { TranslatedFilm } from '../../types/Films';
import { colors } from '../../theme';

type Props = {
  films: TranslatedFilm[];
  hasNextPage: boolean;
  fetchNextPage: () => any;
  isFetchingNextPage: boolean;
};

const FilmsLayout = (props: Props) => {
  return (
    <FlatList
      style={styles.container}
      data={props.films}
      renderItem={({ item }) => <CardFilm item={item} />}
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
  );
};

export default FilmsLayout;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    padding: 10,
  },
});
