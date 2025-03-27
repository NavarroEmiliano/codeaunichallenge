import { useColorScheme } from 'react-native';

const useColors = () => {
  const colorScheme = useColorScheme();

  const colors = {
    background: colorScheme === 'dark' ? '#00474B' : '#C5E4E7',
    cardTitle: '#333333',
    cardLabel:  colorScheme === 'dark' ? '#333333' : '#555555',
    cardValue: '#333333',
    inputBackground: 'white',
    backgroundCard: colorScheme === 'dark' ? '#C5E4E7' : 'white',
    placeholder: '000',
    inputText: '000',
    navigationText: 'white',
    navigationBackground: '#00474B',
    statusBarBackground: '#00474B',
  };

  return colors;
};

export default useColors;
