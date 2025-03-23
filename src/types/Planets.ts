export type PlanetApi = {
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

export type TranslatedPlanet = {
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
  creado: string;
  editado: string;
  url: string;
};
