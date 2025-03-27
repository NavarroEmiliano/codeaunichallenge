import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
} from 'react-native';
import CardFilm from '../organisms/CardFilm';
import { TranslatedFilm } from '../../types/Films';
import useColors from '../../theme/colors';

type Props = {
  films: TranslatedFilm[];
  hasNextPage: boolean;
  fetchNextPage: () => any;
  isFetchingNextPage: boolean;
};

const FilmsLayout = (props: Props) => {
  const {background} = useColors();
  return (
    <FlatList
    style={{...styles.container, backgroundColor: background}}
      data={props.films}
      renderItem={({ item }) => <CardFilm item={item} />}
      onEndReached={() => {
        if (props.hasNextPage) {
          props.fetchNextPage();
        }
      }}
      onEndReachedThreshold={0.5}
      ListFooterComponent={
        props.isFetchingNextPage ? <ActivityIndicator size="large" style={styles.spin} /> : null
      }
    />
  );
};

export default FilmsLayout;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  spin: {
    marginBottom: 20,
  },
});
