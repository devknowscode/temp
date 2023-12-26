import React from 'react';
import {
  VStack,
  Heading,
  Text,
  Button,
  Box,
  Image,
  ScrollView,
  HStack,
} from 'native-base';

interface BannerProps {
  variant: string;
  colorText: string;
  backgroundBanner: string;
  colorButton: string;
  backgroundButton: string;
  headingText: string;
  descriptionText: string;
  buttonText: string;
}

const Component = ({
  variant = 'primary',
  colorText,
  backgroundBanner,
  colorButton,
  backgroundButton,
  headingText,
  descriptionText,
  buttonText,
}: BannerProps): React.JSX.Element => {
  return (
    <Box rounded={5} background={backgroundBanner}>
      <VStack space={3} paddingX={4} paddingY={6}>
        <Heading color={colorText}>{headingText}</Heading>
        <Text color={colorText} bold>
          {descriptionText}
        </Text>
        <Box alignItems="flex-start">
          <Button
            rounded={20}
            background={backgroundButton}
            _text={{
              color: colorButton,
              fontWeight: 'bold',
            }}>
            {buttonText}
          </Button>
        </Box>
        {variant === 'collectible' && (
          <ScrollView horizontal showsHorizontalScrollIndicator>
            <HStack space={5}>
              <Button background="#fdcd27" rounded={10}>
                <Image
                  source={{
                    uri: 'https://i.ebayimg.com/images/g/8loAAOSw-19lXLmx/s-l640.webp',
                  }}
                  alt={'Alternate Text'}
                  size="xl"
                  resizeMode="cover"
                />
              </Button>
              <Button background="#fdcd27" rounded={10}>
                <Image
                  source={{
                    uri: 'https://i.ebayimg.com/images/g/aR4AAOSwwmtlXLm4/s-l640.webp',
                  }}
                  alt={'Alternate Text'}
                  size="xl"
                  resizeMode="cover"
                />
              </Button>
              <Button background="#fdcd27" rounded={10}>
                <Image
                  source={{
                    uri: 'https://i.ebayimg.com/images/g/AT4AAOSwxdxlXLm~/s-l640.webp',
                  }}
                  alt={'Alternate Text'}
                  size="xl"
                  resizeMode="cover"
                />
              </Button>
            </HStack>
          </ScrollView>
        )}
        {variant === 'banner' && (
          <Box flex={1}>
            <Image
              source={{
                uri: 'https://i.ebayimg.com/images/g/vYgAAOSwZN5lXg7A/s-l960.webp',
              }}
              alt={'Alternate Text'}
              size="xl"
              resizeMode="cover"
              width="full"
              height={150}
            />
          </Box>
        )}
      </VStack>
    </Box>
  );
};

export default Component;
