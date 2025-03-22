import apiClient from '../api/apiClient';
import propertyTranslator from '../utils/propertyTranslator';

export type Film = {
  characters: string[];
  director: string;
  episode_id: string;
  opening_crawl: string;
  planets: string[];
  producer: string;
  release_date: string;
  species: string[];
  starships: string[];
  title: string;
  vehicles: string[];
  url: string;
  created: string;
  edited: string;
};

const fetchFilms = async () => {
  const { data } = await apiClient.get('/films/');
  return data.results.map((f: Film) => propertyTranslator(f));
};

export default fetchFilms;
