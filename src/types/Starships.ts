import { BaseApi, BaseTranslated } from './Base';

export type StarshipApi = BaseApi & {
  name: string;
  model: string;
  starship_class: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  crew: string;
  passengers: string;
  max_atmosphering_speed: string;
  hyperdrive_rating: string;
  MGLT: string;
  cargo_capacity: string;
  consumables: string;
  pilots: string;
};

export type TranslatedStarship = BaseTranslated & {
  nombre: string;
  modelo: string;
  clase_nave_espacial: string;
  fabricante: string;
  costo_en_creditos: string;
  longitud: string;
  personal: string;
  pasajeros: string;
  velocidad_maxima_atmosfera: string;
  calificacion_hyperdrive: string;
  MGLT: string;
  capacidad_carga: string;
  consumibles: string;
  pilotos: string;
};
