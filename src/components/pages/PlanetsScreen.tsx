import { usePlanets } from '../../queries/usePlanets';
import PlanetsLayout from '../templates/PlanetsLayout';
import { ActivityIndicator } from 'react-native';

const PlanetsScreen = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    usePlanets();

  const planets = data?.pages.flatMap(page => page.results) || [];

  if (isLoading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <PlanetsLayout
      planets={planets}
      hasNextPage={hasNextPage}
      fetchNextPage={fetchNextPage}
      isFetchingNextPage={isFetchingNextPage}
    />
  );
};

export default PlanetsScreen;
