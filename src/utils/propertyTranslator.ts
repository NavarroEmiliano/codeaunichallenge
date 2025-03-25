import { TranslatedFilm } from '../types/Films';
import { TranslatedPerson } from '../types/People';
import { TranslatedPlanet } from '../types/Planets';
import { TranslatedSpecie } from '../types/Specie';
import { TranslatedStarship } from '../types/Starships';
import { TranslatedVehicle } from '../types/Vehicles';

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
  classification: 'clasificacion',
  designation: 'designacion',
  average_height: 'altura_media',
  average_lifespan: 'vida_media',
  language: 'idioma',
  people: 'personas',
  eye_colors: 'colores_ojos',
  hair_colors: 'colores_pelo',
  skin_colors: 'colores_piel',
  model: 'modelo',
  starship_class: 'clase_nave_espacial',
  manufacturer: 'fabricante',
  cost_in_credits: 'costo_en_creditos',
  length: 'longitud',
  crew: 'personal',
  passengers: 'pasajeros',
  max_atmosphering_speed: 'velocidad_maxima_atmosfera',
  hyperdrive_rating: 'calificacion_hyperdrive',
  MGLT: 'MGLT',
  cargo_capacity: 'capacidad_carga',
  consumables: 'consumibles',
  pilots: 'pilotos',
  vehicle_class: 'clase_vehiculo',
};


type TranslatedData = { [key: string]: string | string[] | number };

const propertyTranslator = (data: Record<string, any>) => {
  return Object.keys(data).reduce((acc: TranslatedData, key: string) => {
    const newKey = translations[key] || key;
    acc[newKey] = data[key];
    return acc;
  }, {}) as
    | TranslatedFilm
    | TranslatedPerson
    | TranslatedPlanet
    | TranslatedSpecie
    | TranslatedStarship
    | TranslatedVehicle;
};

export default propertyTranslator;
