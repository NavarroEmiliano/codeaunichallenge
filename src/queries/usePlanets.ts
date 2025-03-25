import { useInfiniteQuery } from '@tanstack/react-query';
import { PlanetApi } from '../types/Planets';
import propertyTranslator from '../utils/propertyTranslator';
import axios from 'axios';

const fetchPlanets = async ({ pageParam }: { pageParam: string }) => {
  const { data } = await axios.get(pageParam);
  const translatedData = data.results.map((p: PlanetApi) =>
    propertyTranslator(p),
  );
  return { ...data, results: translatedData };
};

export const usePlanets = () => {
  return useInfiniteQuery({
    queryKey: ['planets'],
    queryFn: fetchPlanets,
    getNextPageParam: lastPage => lastPage.next,
    initialPageParam: 'https://swapi.py4e.com/api/planets',
  });
};

export default usePlanets;
