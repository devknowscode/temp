import React from 'react';
import {
  ScrollView,
  Box,
  Button,
  Icon,
  Text,
  Flex,
  Divider,
  VStack,
  HStack,
} from 'native-base';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

class Component {
  Home = () => {
    const nav = [
      {
        name: 'Saved',
        icon: 'heart',
        component: FontAwesome6,
      },
      {
        name: 'Deals',
        icon: 'bolt-lightning',
        component: FontAwesome6,
      },
      {
        name: 'Categories',
        icon: 'category',
        component: MaterialIcons,
      },
      {
        name: 'Electronics',
        icon: 'headphones',
        component: FontAwesome6,
      },
      {
        name: 'Handbags',
        icon: 'handbag',
        component: SimpleLineIcons,
      },
      {
        name: 'Watchs',
        icon: 'watch',
        component: MaterialCommunityIcons,
      },
    ];

    return (
      <VStack space={5}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <HStack space={2}>
            {nav.map(({name, icon, component}) => (
              <Button
                key={component + '.' + icon}
                variant="outline"
                colorScheme={'gray'}
                size={'xs'}
                rounded={'full'}
                // style.={styles.spacer}
                leftIcon={<Icon as={component} name={icon} size={4} />}>
                {name}
              </Button>
            ))}
          </HStack>
        </ScrollView>
        <VStack space={4} alignItems="center">
          <Box marginX={10}>
            <Text fontSize={'md'} color="#6e6e6e" bold textAlign="center">
              Sign in so we can personalize your eBay experience
            </Text>
          </Box>
          <Flex
            w={'full'}
            direction="row"
            justifyContent="space-evenly"
            alignItems="center">
            <Box flex={1} alignItems="center">
              <Text color="#3662ed" bold>
                Create an account
              </Text>
            </Box>
            <Divider orientation="vertical" />
            <Box flex={1} alignItems="center">
              <Text color="#3662ed" bold>
                Sign in
              </Text>
            </Box>
          </Flex>
        </VStack>
      </VStack>
    );
  };

  Search = () => {
    return (
      <HStack
        justifyContent="space-between"
        alignItems="center"
        paddingX={2}
        paddingBottom={2}
        borderBottomWidth={0.5}
        borderBottomColor="#dcdcdc"
        marginBottom={3}>
        <Box flex={1}>
          <Text fontSize={'sm'} color="#3665f3" bold>
            10,000+ resutls
          </Text>
        </Box>
        <HStack space={5} flexDirection="row" justifyContent="space-between">
          <HStack space={2} flexDirection="row" alignItems="center">
            <FontAwesome6 name="sort" color="#3665f3" />
            <Text fontSize={'sm'} color="#3665f3" bold>
              Sort
            </Text>
          </HStack>
          <HStack space={2} flexDirection="row" alignItems="center">
            <Ionicons name="filter" color="#3665f3" />
            <Text fontSize={'sm'} color="#3665f3" bold>
              Filter
            </Text>
          </HStack>
        </HStack>
      </HStack>
    );
  };
}

export default new Component();
