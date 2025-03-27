import { useQuery } from '@tanstack/react-query';
import propertyTranslator from '../utils/propertyTranslator';
import axios from 'axios';
import { TranslatedVehicle } from '../types/Vehicles';

const fetchVehicles = async (urls: string[]) => {
  if (!urls.length) {
    return [];
  }

  const promises = urls.map(url => axios.get(url));
  const responses = await Promise.all(promises);
  return responses.map(r => propertyTranslator(r.data) as TranslatedVehicle);
};

export const useVehicles = (urls: string[]) => {
  return useQuery({
    queryKey: ['vehicles', urls],
    queryFn: () => fetchVehicles(urls),
    enabled: urls.length > 0,
  });
};

export default useVehicles;
