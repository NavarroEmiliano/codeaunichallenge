import { usePlanets } from '../../queries/usePlanets';
import LoadingLarge from '../atoms/LoadingLarge';
import PlanetsLayout from '../templates/PlanetsLayout';

const PlanetsScreen = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    usePlanets();

  const planets = data?.pages.flatMap(page => page.results) || [];

  if (isLoading) {
    return <LoadingLarge loading={true} />;
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
