import { useQuery } from '@tanstack/react-query';
import propertyTranslator from '../utils/propertyTranslator';
import axios from 'axios';
import { TranslatedStarship } from '../types/Starships';

const fetchStarships = async (urls: string[]) => {
    const promises = urls.map(url => axios.get(url));
    const responses = await Promise.all(promises);
  const translatedData = responses.map(
    r => propertyTranslator(r.data) as TranslatedStarship,
  );
  return translatedData;
};

export const useStarships = (urls: string[]) => {
  return useQuery({
    queryKey: ['starships'],
    queryFn: () => fetchStarships(urls),
  });
};

export default useStarships;
