export type SpecieApi = {
  name: string;
  classification: string;
  designation: string;
  average_height: string;
  average_lifespan: string;
  eye_colors: string;
  hair_colors: string;
  skin_colors: string;
  language: string;
  homeworld: string;
  people: string[];
  films: string[];
  url: string;
  created: string;
  edited: string;
};

export type TranslatedSpecie = {
  nombre: string;
  clasificacion: string;
  designacion: string;
  altura_media: string;
  vida_media: string;
  colores_ojos: string;
  colores_pelo: string;
  colores_piel: string;
  idioma: string;
  mundo_natal: string;
  personas: string[];
  peliculas: string[];
  url: string;
  creado: string;
  editado: string;
};
