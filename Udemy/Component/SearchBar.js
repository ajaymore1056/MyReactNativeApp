import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Search} from 'react-native-feather';
import {TextInput} from 'react-native-gesture-handler';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
  return (
    <View style={styles.background}>
      <Search height={30} width={50} />
      <TextInput
        autoCapitalize='none'
        autoCorrect={false}
        style={styles.input}
        placeholder="Search"
        value={term}
        onChangeText={onTermChange}
        onEndEditing ={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flexDirection: 'row',
    backgroundColor: 'grey',
    height: 50,
    borderRadius: 10,
    marginHorizontal: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    fontSize: 20,
  },
});

export default SearchBar;

