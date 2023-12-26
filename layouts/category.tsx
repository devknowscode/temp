import React from 'react';
import {Avatar, HStack, Heading, VStack, Text, ScrollView} from 'native-base';

interface CategoryType {
  name: string;
  uri: string;
}

class Component {
  Carousel = () => {
    const categories = [
      {uri: 'https://ir.ebaystatic.com/cr/v/c01/01_P_A.jpg', name: 'Mechanics'},
      {
        uri: 'https://ir.ebaystatic.com/cr/v/c01/02_Treding%20Cards.jpg',
        name: 'Trading Cards',
      },
      {
        uri: 'https://ir.ebaystatic.com/cr/v/c01/03_Pre-loved%20Luxury.jpg',
        name: 'Pre-Loved Luxury',
      },
      {
        uri: 'https://ir.ebaystatic.com/cr/v/c01/04_Sneakers.jpg',
        name: 'Sneaker',
      },
      {
        uri: 'https://ir.ebaystatic.com/cr/v/c01/05_Watches.jpg',
        name: 'Watches',
      },
      {
        uri: 'https://ir.ebaystatic.com/cr/v/c01/06_Handbags.jpg',
        name: 'Handbags',
      },
    ];
    return (
      <VStack space={5}>
        <Heading color="#333" size="lg">
          Shop Categories
        </Heading>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <HStack space={5} justifyContent="space-around">
            {categories.map(({uri, name}: CategoryType) => {
              return (
                <VStack key={uri + name} space={2}>
                  <Avatar
                    source={{
                      uri: uri,
                    }}
                    size="2xl"
                    borderRadius="full"
                  />
                  <Text textAlign="center">{name}</Text>
                </VStack>
              );
            })}
          </HStack>
        </ScrollView>
      </VStack>
    );
  };

  Grid = () => {
    const categories = [
      {uri: 'https://ir.ebaystatic.com/cr/v/c01/01_P_A.jpg', name: 'Mechanics'},
      {
        uri: 'https://ir.ebaystatic.com/cr/v/c01/02_Treding%20Cards.jpg',
        name: 'Trading Cards',
      },
      {
        uri: 'https://ir.ebaystatic.com/cr/v/c01/03_Pre-loved%20Luxury.jpg',
        name: 'Pre-Loved Luxury',
      },
      {
        uri: 'https://ir.ebaystatic.com/cr/v/c01/04_Sneakers.jpg',
        name: 'Sneaker',
      },
      {
        uri: 'https://ir.ebaystatic.com/cr/v/c01/05_Watches.jpg',
        name: 'Watches',
      },
      {
        uri: 'https://ir.ebaystatic.com/cr/v/c01/06_Handbags.jpg',
        name: 'Handbags',
      },
    ];
    return (
      <VStack space={5}>
        <Heading color="#333" size="lg">
          Explore Popular Categories
        </Heading>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <VStack space={5}>
            <HStack justifyContent="space-between">
              {categories.slice(0, 3).map(({uri, name}: CategoryType) => {
                return (
                  <VStack key={uri + name} space={2}>
                    <Avatar
                      source={{
                        uri: uri,
                      }}
                      size="2xl"
                      borderRadius="full"
                    />
                    <Text textAlign="center">{name}</Text>
                  </VStack>
                );
              })}
            </HStack>
            <HStack justifyContent="space-between">
              {categories.slice(3, 6).map(({uri, name}: CategoryType) => {
                return (
                  <VStack key={uri + name} space={2}>
                    <Avatar
                      source={{
                        uri: uri,
                      }}
                      size="2xl"
                      borderRadius="full"
                    />
                    <Text textAlign="center">{name}</Text>
                  </VStack>
                );
              })}
            </HStack>
          </VStack>
        </ScrollView>
      </VStack>
    );
  };
}

export default new Component();
