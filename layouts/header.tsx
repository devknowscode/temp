import React, {useEffect, useRef, useState} from 'react';
import {HStack, Box, Input, IconButton, Text, Pressable} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import {SearchBar, Spacer} from '../components';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import theme from '../styles/theme';
import Feather from 'react-native-vector-icons/Feather';

class Component {
  Home = () => {
    const [searchText, setSearchText] = useState<string>('');
    const [isFocusableSearch, setIsFocusableSearch] = useState(false);

    return (
      <>
        <View style={styles.headerContainer}>
          <View style={{flex: 1, padding: 5}}>
            <Text
              size={theme.font.sizes.header}
              color={theme.font.colors.secondary}
              bold>
              Home
            </Text>
          </View>
          <TouchableOpacity style={styles.icon}>
            <Feather
              name="shopping-cart"
              size={theme.icon.sizes.small}
              color="black"
            />
          </TouchableOpacity>
        </View>
        <Spacer height={5} />
        <SearchBar
          value={searchText}
          placeholder="Search for anything"
          onChange={setSearchText}
          backgroundColor="transparent"
        />
      </>
    );
  };

  Search = () => {
    const [searchText, setSearchText] = useState<string>('');
    const [isFocusableSearch, setIsFocusableSearch] = useState(true);
    const inputRef = useRef<typeof Input>(null);

    useEffect(() => {
      if (inputRef.current && isFocusableSearch) {
        (inputRef.current as any)?.focus();
      }
      if (inputRef.current && !isFocusableSearch) {
        (inputRef.current as any)?.blur();
      }
    }, [isFocusableSearch]);

    const onFocus = () => {
      setIsFocusableSearch(true);
    };

    const onBlur = () => {
      setIsFocusableSearch(false);
    };

    const handleSearch = () => {
      console.log('Searching...');
    };

    return (
      <HStack space={2} alignItems={'center'} justifyContent="space-between">
        <SearchBar
          value={searchText}
          placeholder="Search for anything"
          onChange={setSearchText}
          backgroundColor="transparent"
          isFocusableSearch={isFocusableSearch}
          onFocus={onFocus}
          onBlur={onBlur}
          handleSearch={handleSearch}
        />
        {/* Searching */}
        {isFocusableSearch ? (
          <Text fontSize={16} color="#3665f3" bold onPress={onBlur}>
            Cancel
          </Text>
        ) : (
          <TouchableOpacity style={styles.icon}>
            <Feather
              name="shopping-cart"
              size={theme.icon.sizes.small}
              color="black"
            />
          </TouchableOpacity>
        )}
      </HStack>
    );
  };
}

export default new Component();

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    backgroundColor: 'white',
    width: 40,
    height: 40,
    borderRadius: 50 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
});
