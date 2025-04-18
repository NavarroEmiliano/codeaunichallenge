import { BaseApi, BaseTranslated } from './Base';

export type VehicleApi = BaseApi & {
  name: string;
  model: string;
  vehicle_class: string;
  manufacturer: string;
  length: string;
  cost_in_credits: string;
  crew: string;
  passengers: string;
  max_atmosphering_speed: string;
  cargo_capacity: string;
  consumables: string;
  films: string[];
  pilots: string[];
};

export type TranslatedVehicle = BaseTranslated & {
  nombre: string;
  modelo: string;
  clase_vehiculo: string;
  fabricante: string;
  longitud: string;
  costo_en_creditos: string;
  personal: string;
  pasajeros: string;
  velocidad_maxima_atmosfera: string;
  capacidad_carga: string;
  consumibles: string;
  peliculas: string[];
  pilotos: string[];
};
