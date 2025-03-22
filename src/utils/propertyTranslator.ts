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

const propertyTranslator = (data: any) => {
  return Object.keys(data).reduce((acc: any, key: string) => {
    const newKey = translations[key] || key;
    acc[newKey] = data[key];
    return acc;
  }, {});
};

export default propertyTranslator;
