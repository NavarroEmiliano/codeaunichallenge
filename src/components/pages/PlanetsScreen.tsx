import { useEffect, useState } from 'react';
import { TranslatedPlanet } from '../../types/Planets';
import fetchPlanets from '../../queries/usePlanets';
import PlanetsLayout from '../templates/PlanetsLayout';

const PlanetsScreen = () => {
  const [planets, setPlanets] = useState<TranslatedPlanet[]>([]);

  useEffect(() => {
    (async () => {
      const dataPlanets = await fetchPlanets();
      setPlanets(dataPlanets);
    })();
  }, []);
  return <PlanetsLayout planets={planets} />;
};

export default PlanetsScreen;
