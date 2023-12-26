/* eslint-disable prettier/prettier */
import React from 'react';
import {Box, Flex, Text, Button, Image, Divider} from 'native-base'; // Import Divider from native-base
import Icon from 'react-native-vector-icons/FontAwesome';

const CartScreen = () => {
  const handleRemove = () => {
    // Xử lý logic xóa ở đây
  };

  const handleCheckout = () => {
    console.log('Redirecting to Checkout page');
  };

  const handleSaveForLater = () => {
    // Xử lý logic lưu để sau ở đây
  };

  return (
    <>
      <Flex
        flex={1}
        flexDirection={'column'}
        marginVertical={10}
        marginHorizontal={10}>
        {/* Cart Items */}
        <Flex flexDirection="column" alignItems="flex-start" w="full">
          {/* Mục Cart (Mã nguồn giả định) */}
          <Flex
            marginBottom={3}
            flexDirection="row"
            alignItems="flex-start"
            w="full">
            <Image
              source={require('../assets/images/logo.png')}
              style={{width: 130, height: 130, borderRadius: 8}}
            />
            {/* Thông tin sản phẩm */}
            <Box marginLeft={2} flex={1}>
              <Text fontSize="lg" fontWeight="bold">
                Louis Vuitton Novelty Canvas Eco Tote bag exhibition2022{' '}
                <Text fontSize="md">New without tags</Text>
              </Text>
              <Text fontSize="2xl" fontWeight="bold">
                $99.99
              </Text>
              <Flex flexDirection="row" alignItems="center" marginTop={2}>
                <Text fontSize="lg" fontWeight="bold">
                  Quantity: 2
                </Text>
                <Button
                  variant="unstyled"
                  onPress={handleSaveForLater}
                  marginLeft={2}>
                  <Icon name="heart-o" size={20} color="gray" />
                </Button>
                <Button
                  variant="unstyled"
                  onPress={handleRemove}
                  marginLeft={2}>
                  <Icon name="trash-o" size={20} color="red" />
                </Button>
              </Flex>
            </Box>
          </Flex>

          {/* Divider */}
          <Divider marginY={2} thickness={2} />

          <Flex
            marginBottom={3}
            flexDirection="row"
            alignItems="flex-start"
            w="full">
            <Image
              source={require('../assets/images/logo.png')}
              style={{width: 130, height: 130, borderRadius: 8}}
            />
            {/* Thông tin sản phẩm */}
            <Box marginLeft={2} flex={1}>
              <Text fontSize="lg" fontWeight="bold">
                Louis Vuitton Novelty Canvas Eco Tote bag exhibition2022{' '}
                <Text fontSize="md">New without tags</Text>
              </Text>
              <Text fontSize="2xl" fontWeight="bold">
                $99.99
              </Text>
              <Flex flexDirection="row" alignItems="center" marginTop={2}>
                <Text fontSize="lg" fontWeight="bold">
                  Quantity: 2
                </Text>
                <Button
                  variant="unstyled"
                  onPress={handleSaveForLater}
                  marginLeft={2}>
                  <Icon name="heart-o" size={20} color="gray" />
                </Button>
                <Button
                  variant="unstyled"
                  onPress={handleRemove}
                  marginLeft={2}>
                  <Icon name="trash-o" size={20} color="red" />
                </Button>
              </Flex>
            </Box>
          </Flex>

          <Divider marginY={2} thickness={2} />
        </Flex>

        <Flex flexDirection="row" justifyContent="space-between" marginTop={4}>
          <Text fontSize="lg" fontWeight="bold">
            Subtotal (2 items)
          </Text>
          <Text fontSize="3xl" fontWeight="bold">
            $199.98
          </Text>
        </Flex>

        <Divider marginY={2} thickness={2} />

        {/* Button Go to Checkout */}
        <Button
          bgColor="#3665f3"
          borderRadius={35}
          onPress={handleCheckout}
          marginTop={5}
          width="full"
          paddingY={3}
          fontWeight="bold"
          fontSize="lg">
          Go to checkout
        </Button>
      </Flex>
    </>
  );
};

export default CartScreen;
