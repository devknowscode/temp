import React from 'react';
import {
  VStack,
  HStack,
  Image,
  Text,
  Center,
  IconButton,
  Pressable,
} from 'native-base';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

class Component {
  Small = () => {
    return (
      <VStack space={3} w="48">
        <Center
          backgroundColor="white"
          shadow="2"
          rounded={12}
          h="48"
          overflow="hidden">
          <Image
            source={{
              uri: 'https://i.ebayimg.com/images/g/mIAAAOSwNZpk388s/s-l225.webp',
            }}
            alt={'Alternate Text'}
            size="xl"
            resizeMode="cover"
            width="full"
          />
        </Center>
        <VStack space={1}>
          <Text fontSize="md" bold isTruncated noOfLines={3}>
            Pokemon 151 Ultra Premium Collection Box - Brand New and Factory
            Sealed
          </Text>
          <Text fontSize="lg" bold>
            731,463.31VND
          </Text>
        </VStack>
      </VStack>
    );
  };

  Gallery = () => {
    return (
      <VStack space={3} w="48">
        <Center
          backgroundColor="white"
          shadow="2"
          rounded={12}
          h="48"
          overflow="hidden">
          <IconButton
            icon={<FontAwesome5 name="heart" size={18} color="#888" />}
            position="absolute"
            top={2}
            right={2}
            rounded={20}
            zIndex={2}
            backgroundColor="#f7f7f7"
            shadow={1}
          />
          <Image
            source={{
              uri: 'https://i.ebayimg.com/images/g/mIAAAOSwNZpk388s/s-l225.webp',
            }}
            alt={'Alternate Text'}
            size="xl"
            resizeMode="cover"
            width="full"
          />
        </Center>
        <VStack space={1}>
          <Text fontSize="md" bold isTruncated noOfLines={3}>
            Pokemon 151 Ultra Premium Collection Box - Brand New and Factory
            Sealed
          </Text>
          <Text fontSize="lg" bold>
            731,463.31VND
          </Text>
        </VStack>
      </VStack>
    );
  };

  List = () => {
    const handlePress = () => {
      console.log('navigate to product details');
    };

    return (
      <Pressable onPress={handlePress}>
        <HStack space={3} w="full">
          <Center
            backgroundColor="white"
            rounded={12}
            h="40"
            w="40%"
            overflow="hidden">
            <IconButton
              icon={<FontAwesome5 name="heart" size={16} color="#444" />}
              position="absolute"
              top={2}
              right={2}
              rounded={20}
              zIndex={2}
              backgroundColor="#f7f7f7"
              shadow={1}
            />
            <Image
              source={{
                uri: 'https://i.ebayimg.com/thumbs/images/g/vm4AAOSwq99lA6gb/s-l500.jpg',
              }}
              alt={'Alternate Text'}
              size="full"
              resizeMode="cover"
            />
          </Center>
          <VStack space={1} flex={1}>
            <Text fontSize="md" bold isTruncated noOfLines={3}>
              Tezuka Moderno Character Astro Boy Block Memo 100 pieces
              Stationery Anime 2720
            </Text>
            <Text fontSize="lg" bold>
              731,463.31VND
            </Text>
          </VStack>
        </HStack>
      </Pressable>
    );
  };
}

export default new Component();
