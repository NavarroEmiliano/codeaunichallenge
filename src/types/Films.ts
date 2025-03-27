import { BaseApi, BaseTranslated } from './Base';

export type TranslatedFilm = BaseTranslated & {
  personajes: string[];
  director: string;
  id_episodio: string;
  texto_apertura: string;
  planetas: string[];
  productor: string;
  fecha_lanzamiento: string;
  especies: string[];
  naves_espaciales: string[];
  titulo: string;
  vehiculos: string[];
};

export type FilmApi = BaseApi & {
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
};
