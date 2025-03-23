import { useEffect, useState } from 'react';
import { TranslatedPerson } from '../../types/People';
import fetchPeople from '../../queries/usePeople';
import PeopleLayout from '../templates/PeopleLayout';

const PeopleScreen = () => {
  const [people, setPeople] = useState<TranslatedPerson[]>([]);

  useEffect(() => {
    (async () => {
      const dataPeople = await fetchPeople();
      setPeople(dataPeople);
    })();
  }, []);
  return <PeopleLayout people={people} />;
};

export default PeopleScreen;
