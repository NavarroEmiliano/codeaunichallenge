import React from 'react';
import FilmsLayout from '../templates/FilmsLayout';
import useFilms from '../../queries/useFilms';
import LoadingLarge from '../atoms/LoadingLarge';

const FilmsScreen = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useFilms();

  const films = data?.pages.flatMap(page => page.results) || [];

  if (isLoading) {
    return <LoadingLarge loading={true} />;
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
