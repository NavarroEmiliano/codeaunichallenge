import apiClient from '../api/apiClient';
import propertyTranslator from '../utils/propertyTranslator';

export type Planet = {
  characters: string[];
  director: string;
  episode_id: string;
  opening_crawl: string;
  planets: string[];
  producer: string;
  release_date: string;
  species: string[];
  starships: string[];
  title: string[];
  vehicles: string[];
  url: string;
  created: string;
  edited: string;
};


const fetchPlanets = async () => {
  const { data } = await apiClient.get('/planets');
  return data.results.map((p: Planet) => propertyTranslator(p));
};

export default fetchPlanets;
