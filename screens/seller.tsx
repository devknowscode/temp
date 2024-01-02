import React from 'react';
import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import {ScreenWrapper, Text, Spacer} from '../components';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {HStack, VStack, Divider} from 'native-base';
import Feather from 'react-native-vector-icons/Feather';
import theme from '../styles/theme';

const SellerScreen = ({
  navigation,
}: {
  navigation: NavigationProp<ParamListBase>;
}) => {
  const handleProfileClick = () => {
    // navigation.navigate('Selling');
    console.log('chủ tus không biết chuyển tab');
  };
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
          <Spacer height={20} />
          <Text size={theme.font.sizes.medium} bold>
            How it Works
          </Text>
          {/* Icon 1 */}
          <Spacer height={5} />
          <HStack space={5} alignItems="center" marginRight={20} marginLeft={4}>
            <Feather name="camera" size={50} color="black" />
            <VStack>
              <Text size={theme.font.sizes.rm}>List in minutes. </Text>
              <Text>
                Snap some photos and write a great description. We'll help you
                price your item to sell.
              </Text>
            </VStack>
          </HStack>
          {/* Icon 2 */}
          <Spacer height={10} />
          <HStack space={5} alignItems="center" marginRight={20} marginLeft={4}>
            <Feather name="tag" size={50} color="black" />
            <VStack>
              <Text size={theme.font.sizes.rm}>
                Get paid quickly and safely.
              </Text>
              <Text>
                When your item sells, we make the payment process easy for you
                and the buyer.
              </Text>
            </VStack>
          </HStack>
          {/* Icon 3 */}
          <Spacer height={10} />
          <HStack space={5} alignItems="center" marginRight={20} marginLeft={4}>
            <Feather name="save" size={50} color="black" />
            <VStack>
              <Text size={theme.font.sizes.rm}>Ship it to its new home.</Text>
              <Text>
                Box it up, print a label directly on eBay, and say farewell.
                It's that simple.
              </Text>
            </VStack>
          </HStack>
          <Divider marginY={2} thickness={2} />
          <TouchableOpacity
            style={{alignSelf: 'flex-end', marginRight: 20}}
            onPress={handleProfileClick} 
          >
            <Text size={theme.font.sizes.rm} color={theme.colors.primary}>
              Learn more
            </Text>
          </TouchableOpacity>
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
