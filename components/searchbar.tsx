import React, { useEffect, useRef } from 'react';
import Styled from 'styled-components/native';
import theme from '../styles/theme';
import {s} from '../utils/scale';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

interface ITextInput {
  ref?: unknown;
  value: string;
  placeholder?: string;
  onChange?: (text: string) => void;
  isSecure?: boolean;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
  textAlign?: 'left' | 'center' | 'right';
  isFocusableSearch: boolean;
  backgroundColor: string;
  onFocus: () => void;
  onBlur: () => void;
  handleSearch: () => void;
}

const Input = Styled.TextInput<ITextInput>`
    width: 80%;
    font-size: ${s(14)}px;
    background-color: ${props => props.backgroundColor};
    text-align: ${props => props.textAlign};
    color: ${theme.font.colors.primary};
`;

const SearchBar = Styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 ${s(10)}px;
    background-color: ${theme.colors.light};
    borderRadius: ${s(20)}px;
`;

const Render = ({
  value = '',
  placeholder = '',
  onChange = () => {},
  isSecure = false,
  autoCapitalize = 'none',
  textAlign = 'left',
  backgroundColor = 'transparent',
  isFocusableSearch = false,
  onFocus = () => {},
  onBlur = () => {},
  handleSearch = () => {},
}: ITextInput) => {
  const inputRef = useRef<typeof Input>(null);

  useEffect(() => {
    if (inputRef.current && isFocusableSearch) {
      (inputRef.current as any)?.focus();
    }
    if (inputRef.current && !isFocusableSearch) {
      (inputRef.current as any)?.blur();
    }
  }, [isFocusableSearch]);

  return (
    <View style={styles.searchContainer}>
      <SearchBar>
        <Icon name="search" size={20} color="#41413f" />
        <Input
          ref={inputRef}
          textAlign={textAlign}
          secureTextEntry={isSecure}
          autoCapitalize={autoCapitalize}
          placeholder={placeholder}
          onChangeText={text => onChange(text)}
          value={value}
          backgroundColor={backgroundColor}
          focusable={isFocusableSearch}
          onFocus={onFocus}
          onBlur={onBlur}
          placeholderTextColor={theme.font.colors.primary}
          onSubmitEditing={handleSearch}
        />
        <Icon name="camera" size={20} color="#41413f" />
      </SearchBar>
    </View>
  );
};

export default Render;

const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
