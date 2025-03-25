import { useInfiniteQuery } from '@tanstack/react-query';
import { FilmApi } from '../types/Films';
import propertyTranslator from '../utils/propertyTranslator';
import axios from 'axios';

const fetchFilms = async ({ pageParam }: { pageParam: string }) => {
  const { data } = await axios.get(pageParam);
  const translatedData = data.results.map((f: FilmApi) =>
    propertyTranslator(f),
  );
  return { ...data, results: translatedData };
};

export const useFilms = () => {
  return useInfiniteQuery({
    queryKey: ['films'],
    queryFn: fetchFilms,
    getNextPageParam: lastPage => lastPage.next,
    initialPageParam: 'https://swapi.py4e.com/api/films/',
  });
};

export default useFilms;
