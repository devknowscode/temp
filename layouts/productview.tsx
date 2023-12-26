import React from 'react';
import {VStack, HStack, Heading, Text, ScrollView} from 'native-base';
import {ProductCard} from '../components';

const ProductView = () => {
  return (
    <VStack space={5}>
      <HStack justifyContent="space-between" alignItems="flex-end">
        <Heading color="#333" size="lg">
          Daily Deals
        </Heading>
        <Text bold underline>
          See all
        </Text>
      </HStack>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <HStack space={3}>
          <ProductCard.Small />
          <ProductCard.Small />
          <ProductCard.Small />
          <ProductCard.Small />
          <ProductCard.Small />
          <ProductCard.Small />
          <ProductCard.Small />
        </HStack>
      </ScrollView>
    </VStack>
  );
};

export default ProductView;
