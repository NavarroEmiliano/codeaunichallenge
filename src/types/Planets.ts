import { BaseApi, BaseTranslated } from './Base';

export type PlanetApi = BaseApi & {
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
};

export type TranslatedPlanet = BaseTranslated & {
  nombre: string;
  periodo_rotacion: string;
  periodo_orbital: string;
  diametro: string;
  clima: string;
  gravedad: string;
  terreno: string;
  aguas_superficiales: string;
  poblacion: string;
  residentes: string[];
  peliculas: string[];
};
