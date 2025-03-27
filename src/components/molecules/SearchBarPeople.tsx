import React from 'react';
import { StyleSheet, View } from 'react-native';
import FontAwesome6 from '@react-native-vector-icons/fontawesome6';
import { TextInput } from 'react-native-gesture-handler';
import useColors from '../../theme/colors';

type Props = {
  searchText: string;
  setSearchText: (text: string) => void;
};

const SearchBarPeople = (props: Props) => {
  const { inputBackground, inputText, placeholder } = useColors();

  return (
    <View style={{ ...styles.container, backgroundColor: inputBackground }}>
      <FontAwesome6
        name="magnifying-glass"
        color={placeholder}
        iconStyle="solid"
      />
      <TextInput
        value={props.searchText}
        onChangeText={props.setSearchText}
        placeholder="Search"
        placeholderTextColor={'#000'}
        style={{ ...styles.searchInput, color: inputText }}
      />
    </View>
  );
};

export default SearchBarPeople;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
    elevation: 3,
  },
  icon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
  },
});
