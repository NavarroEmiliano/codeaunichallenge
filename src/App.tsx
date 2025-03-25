import { StyleSheet, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';
import MyTabs from './navigation/MyTabs';
import ReactQueryProvider from './api/QueryClientProvider';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ReactQueryProvider>
        <NavigationContainer>
          <MyTabs />
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
