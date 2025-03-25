import axios from 'axios';
import propertyTranslator from '../utils/propertyTranslator';
import { useQuery } from '@tanstack/react-query';
import { TranslatedSpecie } from '../types/Specie';

const fetchSpecie = async (urls: string[]) => {
  const promises = urls.map(url => axios.get(url));
  const responses = await Promise.all(promises);
  const translatedData = responses.map(r => propertyTranslator(r.data) as TranslatedSpecie);
  return translatedData;
};

export const useSpecie = (urls: string[]) => {
  return useQuery({
    queryKey: ['specie'],
    queryFn: () => fetchSpecie(urls),
  });
};
