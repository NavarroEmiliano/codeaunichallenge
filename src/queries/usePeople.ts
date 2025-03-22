import apiClient from '../api/apiClient';
import propertyTranslator from '../utils/propertyTranslator';

export type Person = {
  name: string;
  birth_year: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  mass: string;
  skin_color: string;
  homeworld: string;
  films: string[];
  species: string[];
  starships: string[];
  vehicles: string[];
  url: string;
  created: string;
  edited: string;
};

const fetchPeople = async () => {
  const { data } = await apiClient.get('/people/');
  return data.results.map((p: Person) => propertyTranslator(p));
};

export default fetchPeople;

/* export const usePeople = () => {
  return useQuery({
    queryKey: ['people'],
    queryFn: fetchPeople,
  });
};
 */
