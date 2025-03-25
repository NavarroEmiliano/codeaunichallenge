import { StyleSheet, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';
import ReactQueryProvider from './api/QueryClientProvider';
import RootNavigator from './navigation/RootNavigation';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ReactQueryProvider>
        <NavigationContainer>
          <RootNavigator/>
        </NavigationContainer>
      </ReactQueryProvider>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 20 : 0,
    paddingBottom: Platform.OS === 'android' ? 20 : 0,
    backgroundColor: '#000',
  },
});
