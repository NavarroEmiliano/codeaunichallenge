import React, { useEffect, useState } from 'react';
import fetchFilms from '../../queries/useFilms';
import FilmsLayout from '../templates/FilmsLayout';
import { TranslatedFilm } from '../../types/Films';



const FilmsScreen = () => {
  const [films, setFilms] = useState<TranslatedFilm[]>([]);

  useEffect(() => {
    (async () => {
      const dataFilms = await fetchFilms();
      setFilms(dataFilms);
    })();
  }, []);
  return <FilmsLayout films={films} />;
};

export default FilmsScreen;

