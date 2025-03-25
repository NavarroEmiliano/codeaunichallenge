import { useQuery } from '@tanstack/react-query';
import propertyTranslator from '../utils/propertyTranslator';
import axios from 'axios';
import { TranslatedVehicle } from '../types/Vehicles';

const fetchVehicles = async (urls: string[]) => {
  const promises = urls.map(url => axios.get(url));
  const responses = await Promise.all(promises);
  const translatedData = responses.map(
    r => propertyTranslator(r.data) as TranslatedVehicle,
  );
  return translatedData;
};

export const useVehicles = (urls: string[]) => {
  return useQuery({
    queryKey: ['vehicles'],
    queryFn: () => fetchVehicles(urls),
  });
};

export default useVehicles;
