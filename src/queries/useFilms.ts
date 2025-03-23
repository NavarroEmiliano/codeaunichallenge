import apiClient from '../api/apiClient';
import { FilmApi } from '../types/Films';
import propertyTranslator from '../utils/propertyTranslator';



const fetchFilms = async () => {
  const { data } = await apiClient.get('/films/');
  return data.results.map((f: FilmApi) => propertyTranslator(f));
};

export default fetchFilms;
