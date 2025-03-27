import axios from 'axios';
import propertyTranslator from '../utils/propertyTranslator';
import { useQuery } from '@tanstack/react-query';
import { TranslatedSpecie } from '../types/Specie';

const fetchSpecie = async (urls: string[]) => {
  if (!urls.length) {
    return [];
  }

  const promises = urls.map(url => axios.get(url));
  const responses = await Promise.all(promises);

  return responses.map(r => propertyTranslator(r.data) as TranslatedSpecie);
};

export const useSpecie = (urls: string[]) => {
  return useQuery({
    queryKey: ['specie', urls],
    queryFn: () => fetchSpecie(urls),
    enabled: urls.length > 0,
  });
};
