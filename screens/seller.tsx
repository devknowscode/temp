import React from 'react';
import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import {ScreenWrapper, SearchBar, Text, Png} from '../components';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {HStack, VStack} from 'native-base';
import {SubHeader, Banner, Category, ProductView} from '../layouts';
import Feather from 'react-native-vector-icons/Feather';
import theme from '../styles/theme';

const SellerScreen = ({
  navigation,
}: {
  navigation: NavigationProp<ParamListBase>;
}) => {
  return (
    <ScreenWrapper>
      <VStack space={5} padding={2}>
        <View style={styles.headerContainer}>
          <View style={{flex: 1, padding: 5}}>
            <Text
              size={theme.font.sizes.header}
              color={theme.font.colors.secondary}
              bold>
              Seller
            </Text>
          </View>
          <TouchableOpacity style={styles.icon}>
            <Feather
              name="shopping-cart"
              size={theme.icon.sizes.searsmall}
              color="black"
            />
          </TouchableOpacity>
        </View>
        <ScrollView>
          <VStack space={5} alignItems="center">
            <View style={styles.listingContainer}>
              <Text style={styles.listingText} bold>
                To create a listing, please list on the website
              </Text>
            </View>
            <View style={styles.priceContainer}>
              <Text size={theme.font.sizes.largexl} bold>
                $0.00
              </Text>
              <Text>90-day total</Text>
            </View>
            <HStack space={5}>
              <View style={styles.statusContainer}>
                <Text
                  size={theme.font.sizes.largexl}
                  color={theme.font.colors.secondary}
                  bold>
                  0
                </Text>
                <Text>Active</Text>
              </View>
              <View style={styles.statusContainer}>
                <Text
                  size={theme.font.sizes.largexl}
                  color={theme.font.colors.secondary}
                  bold>
                  0
                </Text>
                <Text>Sold</Text>
              </View>
              <View style={styles.statusContainer}>
                <Text
                  size={theme.font.sizes.largexl}
                  color={theme.font.colors.secondary}
                  bold>
                  0
                </Text>
                <Text>Unsold</Text>
              </View>
            </HStack>
          </VStack>
        </ScrollView>
      </VStack>
    </ScreenWrapper>
  );
};

export default SellerScreen;

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
  listingContainer: {
    backgroundColor: '#fce9e8',
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    marginVertical: 10,
  },
  listingText: {
    textAlign: 'center',
    color: '#fff',
  },
  priceContainer: {
    alignItems: 'center',
  },
  statusContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
