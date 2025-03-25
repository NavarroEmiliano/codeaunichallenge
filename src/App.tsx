import { StyleSheet, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';
import ReactQueryProvider from './api/QueryClientProvider';
import RootNavigator from './navigation/RootNavigation';
import { colors } from './theme';

const App = () => {
  return (
    <SafeAreaView style={styles.statusBar}>
      <ReactQueryProvider>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </ReactQueryProvider>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  statusBar: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 30 : 0,
    backgroundColor: colors.primary,
  },
});
