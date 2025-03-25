import React from 'react';
import FilmsLayout from '../templates/FilmsLayout';
import useFilms from '../../queries/useFilms';
import { ActivityIndicator } from 'react-native';

const FilmsScreen = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useFilms();

  const films = data?.pages.flatMap(page => page.results) || [];

  if (isLoading) {
    return <ActivityIndicator size="large" />;
  }
  return (
    <FilmsLayout
      films={films}
      hasNextPage={hasNextPage}
      fetchNextPage={fetchNextPage}
      isFetchingNextPage={isFetchingNextPage}
    />
  );
};

export default FilmsScreen;
