import usePeople from '../../queries/usePeople';
import PeopleLayout from '../templates/PeopleLayout';
import { ActivityIndicator } from 'react-native';

const PeopleScreen = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    usePeople();

  const people = data?.pages.flatMap(page => page.results) || [];
  if (isLoading) {
    return <ActivityIndicator size="large" />;
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
