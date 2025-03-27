import { useQuery } from '@tanstack/react-query';
import propertyTranslator from '../utils/propertyTranslator';
import axios from 'axios';
import { TranslatedStarship } from '../types/Starships';

const fetchStarships = async (urls: string[]) => {
  if (!urls.length) {
    return [];
  }

  const promises = urls.map(url => axios.get(url));
  const responses = await Promise.all(promises);
  return responses.map(r => propertyTranslator(r.data) as TranslatedStarship);
};

export const useStarships = (urls: string[]) => {
  return useQuery({
    queryKey: ['starships', urls],
    queryFn: () => fetchStarships(urls),
    enabled: urls.length > 0,
  });
};

export default useStarships;
