import React from 'react';
import {StyleSheet, View, Pressable, TouchableOpacity} from 'react-native';
import {Text, ScreenWrapper, Spacer, Png} from '../components';
import Icon from 'react-native-vector-icons/Feather';
import theme from '../styles/theme';
import {NavigationProp, ParamListBase} from '@react-navigation/native';

const Screen = ({navigation}: {navigation: NavigationProp<ParamListBase>}) => {
  const handleProfileClick = () => {
    navigation.navigate('Login');
  };

  const items = [
    {id: 1, iconName: 'mail', text: 'Messages'},
    {id: 2, iconName: 'heart', text: 'Watchlist'},
    {id: 3, iconName: 'bookmark', text: 'Saved'},
    {id: 4, iconName: 'rotate-cw', text: 'Buy again'},
    {id: 5, iconName: 'box', text: 'Purchases'},
    {id: 6, iconName: 'eye', text: 'Recently viewed'},
    {id: 7, iconName: 'info', text: 'Help & Support'},
    {id: 8, iconName: 'settings', text: 'Settings'},
  ];

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <View style={styles.box}>
          <View style={styles.row}>
            <Pressable style={styles.row} onPress={handleProfileClick}>
              <Png width={40} height={40} rounded={100} name="defaultUser" />
              <Spacer width={10} />
              <View>
                <Text
                  size={theme.font.sizes.medium}
                  bold
                  color={theme.font.colors.primary}>
                  {'Sign in'}
                </Text>
                {/* <Text
                  size={theme.font.sizes.medium}
                  bold
                  color={theme.font.colors.primary}>
                  {'Raiden Shogun'}
                </Text>
                <Text
                  size={theme.font.sizes.regular}
                  bold
                  color={theme.font.colors.grey}>
                  Member since 2022
                </Text> */}
              </View>
            </Pressable>
          </View>
          <TouchableOpacity style={styles.icon}>
            <Icon
              name="shopping-cart"
              size={theme.icon.sizes.small}
              color="black"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.listButton}>
          {items.map(item => (
            <TouchableOpacity
              key={item.id}
              style={styles.button}
              onPress={() => console.log('Pressed button:', item.text)}>
              <View style={styles.buttonContent}>
                <Icon name={item.iconName} size={24} color="black" />
                <Spacer width={10} />
                <Text
                  size={theme.font.sizes.regular}
                  color={theme.font.colors.primary}>
                  {item.text}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    marginVertical: 10,
  },
  box: {
    width: '100%',
    height: '10%',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  row: {
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
  listButton: {
    width: '100%',
  },
  button: {
    padding: 15,
    borderRadius: 5,
    backgroundColor: 'transparent',
    marginVertical: 8,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    marginLeft: 15,
  },
});
