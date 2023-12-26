import React from 'react';
import {Box, Flex, Text, Divider} from 'native-base';
import {Png, ScreenWrapper} from '../components';

const NotificationScreen = () => {
  const handleDismiss = () => {
    // Handle dismiss logic here
  };

  return (
    <ScreenWrapper>
      <Flex flex={1} flexDirection={'column'}>
        {/* Notification Items */}
        <Flex flexDirection="column" alignItems="flex-start" w="full">
          {/* Notification Item 1 */}
          <Flex
            marginBottom={3}
            flexDirection="row"
            alignItems="flex-start"
            justifyContent="space-between"
            w="full">
            <Flex flexDirection="row" alignItems="center">
              <Png width={40} height={40} rounded={100} name="albedo" />
              {/* Notification Content */}
              <Box marginLeft={2} flex={1}>
                <Text fontSize="lg" fontWeight="bold">
                  New message
                </Text>
                <Text fontSize="lg">Hey, how's it going?</Text>
              </Box>
              <Text fontSize="md" color="gray">
                2 hours ago
              </Text>
            </Flex>
          </Flex>

          <Divider marginY={1} thickness={2} />

          {/* Notification Item 2 */}
          <Flex
            marginBottom={3}
            flexDirection="row"
            alignItems="flex-start"
            justifyContent="space-between"
            w="full">
            <Flex flexDirection="row" alignItems="center">
              <Png width={40} height={40} rounded={100} name="raiden" />
              {/* Notification Content */}
              <Box marginLeft={2} flex={1}>
                <Text fontSize="lg" fontWeight="bold">
                  New friend
                </Text>
                <Text fontSize="lg">Accept or decline? </Text>
              </Box>
              <Text fontSize="md" color="gray">
                1 day ago
              </Text>
            </Flex>
          </Flex>

          <Divider marginY={1} thickness={2} />
        </Flex>
      </Flex>
    </ScreenWrapper>
  );
};

export default NotificationScreen;
