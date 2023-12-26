import React, {useState} from 'react';
import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import {ScreenWrapper, SearchBar, Text} from '../components';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {HStack, VStack} from 'native-base';
import {SubHeader, Banner, Category, ProductView} from '../layouts';
import Feather from 'react-native-vector-icons/Feather';
import theme from '../styles/theme';

const Render = ({navigation}: {navigation: NavigationProp<ParamListBase>}) => {
  const [searchText, setSearchText] = useState<string>('');

  return (
    <ScreenWrapper>
      <VStack space={5} padding={2}>
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
        <HStack>
          <SearchBar
            value={searchText}
            placeholder="Search for anything"
            onChange={setSearchText}
            backgroundColor="transparent"
            isFocusableSearch={false}
            onFocus={() => {
              navigation.navigate('Search');
            }}
          />
        </HStack>
        <ScrollView>
          <VStack space={8}>
            <SubHeader.Home />
            <VStack space={3}>
              <Banner
                variant="primary"
                colorText="#fff"
                backgroundBanner="#013147"
                colorButton="#042f3f"
                backgroundButton="#fff"
                headingText="Get local tire installation"
                descriptionText="Have your new set installed by our network of experts."
                buttonText="Shop top brands"
              />
              <Banner
                variant="primary"
                colorText="#055130"
                headingText="Up to 50% off fitness essentials"
                descriptionText="Go for your goals with eBay Refurbished finds, plus a warranty."
                colorButton="#8ddf94"
                buttonText="Shop now"
                backgroundButton="#07512c"
                backgroundBanner="#9df4a6"
              />
            </VStack>
            <Category.Carousel />
            <Banner
              variant="collectible"
              colorText="#592e13"
              headingText="Are you looking for timeless treasures?"
              descriptionText="Visit collectibles and follow your passion."
              colorButton="#fdcd27"
              buttonText="Collectibles for you"
              backgroundButton="#592e13"
              backgroundBanner="#f7e277"
            />
            <ProductView />
            <Category.Grid />
            <Banner
              variant="banner"
              colorText="#181818"
              headingText="Are you looking for timeless treasures?"
              descriptionText="Visit collectibles and follow your passion."
              colorButton="#f7f7f7"
              buttonText="Collectibles for you"
              backgroundButton="#181818"
              backgroundBanner="#f7f7f7"
            />
          </VStack>
        </ScrollView>
      </VStack>
    </ScreenWrapper>
  );
};

export default Render;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
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
