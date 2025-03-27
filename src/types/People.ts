import { BaseApi, BaseTranslated } from './Base';

export type PersonApi = BaseApi & {
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
};

export type TranslatedPerson = BaseTranslated & {
  altura: string;
  anio_nacimiento: string;
  color_ojos: string;
  color_pelo: string;
  color_piel: string;
  especies: string[];
  genero: string;
  mundo_natal: string;
  naves_espaciales: string[];
  nombre: string;
  peliculas: string[];
  peso: string;
  vehiculos: string[];
};
