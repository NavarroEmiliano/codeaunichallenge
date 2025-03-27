import usePeople from '../../queries/usePeople';
import LoadingLarge from '../atoms/LoadingLarge';
import PeopleLayout from '../templates/PeopleLayout';

const PeopleScreen = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    usePeople();

  const people = data?.pages.flatMap(page => page.results) || [];

  if (isLoading) {
    return <LoadingLarge loading={true} />;
  }

  return (
    <PeopleLayout
      people={people}
      hasNextPage={hasNextPage}
      fetchNextPage={fetchNextPage}
      isFetchingNextPage={isFetchingNextPage}
    />
  );
};

export default PeopleScreen;
