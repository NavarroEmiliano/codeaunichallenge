import React from 'react';
import { FlatList } from 'react-native';
import CardFilm from '../organisms/CardFilm';
import { TranslatedFilm } from '../../types/Films';

type Props = {
  films: TranslatedFilm[];
};

const FilmsLayout = (props: Props) => {
  return (
      <FlatList
        data={props.films}
        renderItem={({ item }) => <CardFilm item={item} />}
      />
  );
};

export default FilmsLayout;
