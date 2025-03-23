import { TranslatedFilm } from '../types/Films';
import { TranslatedPerson } from '../types/People';
import { TranslatedPlanet } from '../types/Planets';

const translations: Record<string, string> = {
  birth_year: 'anio_nacimiento',
  eye_color: 'color_ojos',
  films: 'peliculas',
  gender: 'genero',
  hair_color: 'color_pelo',
  height: 'altura',
  homeworld: 'mundo_natal',
  mass: 'peso',
  name: 'nombre',
  skin_color: 'color_piel',
  species: 'especies',
  starships: 'naves_espaciales',
  vehicles: 'vehiculos',
  characters: 'personajes',
  director: 'director',
  episode_id: 'id_episodio',
  opening_crawl: 'texto_apertura',
  planets: 'planetas',
  producer: 'productor',
  release_date: 'fecha_lanzamiento',
  title: 'titulo',
  climate: 'clima',
  diameter: 'diametro',
  gravity: 'gravedad',
  orbital_period: 'periodo_orbital',
  population: 'poblacion',
  residents: 'residentes',
  rotation_period: 'periodo_rotacion',
  surface_water: 'aguas_superficiales',
  terrain: 'terreno',
  created: 'creado',
  edited: 'editado',
};

type TranslatedData = { [key: string]: string | string[] | number };

const propertyTranslator = (data: Record<string, any>) => {
  return Object.keys(data).reduce((acc: TranslatedData, key: string) => {
    const newKey = translations[key] || key;
    acc[newKey] = data[key];
    return acc;
  }, {}) as TranslatedFilm | TranslatedPerson | TranslatedPlanet;
};

export default propertyTranslator;
