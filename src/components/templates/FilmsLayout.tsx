import React from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import CardFilm from '../organisms/CardFilm';
import { TranslatedFilm } from '../../types/Films';

type Props = {
  films: TranslatedFilm[];
  hasNextPage: boolean;
  fetchNextPage: () => any;
  isFetchingNextPage: boolean;
};

const FilmsLayout = (props: Props) => {
  return (
    <FlatList
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
