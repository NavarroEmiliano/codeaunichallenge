import { useInfiniteQuery } from '@tanstack/react-query';
import propertyTranslator from '../utils/propertyTranslator';
import { PersonApi } from '../types/People';
import axios from 'axios';

const fetchPeople = async ({ pageParam }: { pageParam: string }) => {
  const { data } = await axios.get(pageParam);
  const translatedData = data.results.map((person: PersonApi) =>
    propertyTranslator(person),
  );
  return { ...data, results: translatedData };
};

const usePeople = () => {
  return useInfiniteQuery({
    queryKey: ['people'],
    queryFn: fetchPeople,
    getNextPageParam: lastPage => lastPage.next,
    initialPageParam: 'https://swapi.py4e.com/api/people/',
  });
};

export default usePeople;
