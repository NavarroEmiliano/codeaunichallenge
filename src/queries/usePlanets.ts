import apiClient from '../api/apiClient';
import { PlanetApi } from '../types/Planets';
import propertyTranslator from '../utils/propertyTranslator';


const fetchPlanets = async () => {
  const { data } = await apiClient.get('/planets');
  return data.results.map((p: PlanetApi) => propertyTranslator(p));
};

export default fetchPlanets;
