import apiClient from '../api/apiClient';
import { PersonApi } from '../types/People';
import propertyTranslator from '../utils/propertyTranslator';

const fetchPeople = async () => {
  const { data } = await apiClient.get('/people/');
  return data.results.map((p: PersonApi) => propertyTranslator(p));
};

export default fetchPeople;

/* export const usePeople = () => {
  return useQuery({
    queryKey: ['people'],
    queryFn: fetchPeople,
  });
};
 */
