// components/productdetail.tsx
import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Modal} from 'react-native';
import Text from './text';
import Button from './button';
import theme from '../styles/theme';
import {Box, Image, ScrollView} from 'native-base';
import {Png, ScreenWrapper, Spacer} from '../components';
import Render from './screenwrapper';
import {black} from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

const ProductDetail = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const values = [
    {
      name: 'Condition',
      value: 'New without tags',
    },
    {
      name: 'Quantity',
      value: '1 available',
    },
    {
      name: 'Item Number',
      value: '296102830556',
    },
    {
      name: 'Brand',
      value: 'Gucci',
    },
    {
      name: 'Exterior Material',
      value: 'Canvas',
    },
    {
      name: 'Style',
      value: 'Tote',
    },
    {
      name: 'Exterior Color',
      value: 'Beige',
    },
    {
      name: 'Department',
      value: 'Unisex Adullts',
    },
    {
      name: 'Product Width',
      value: '38cm',
    },
    {
      name: 'Shape',
      value: 'N/A',
    },
    {
      name: 'Product Height',
      value: 'Beige',
    },
    {
      name: 'Character',
      value: 'CasualTravelWorkwear',
    },
    {
      name: 'Handle/Strap Color',
      value: 'Medium',
    },
    {
      name: 'Occasion',
      value: 'Canvas',
    },
    {
      name: 'Size',
      value: 'Beige',
    },
    {
      name: 'Lining Material',
      value: 'Canvas',
    },
    {
      name: 'Hardware Color',
      value: 'Beige',
    },
  ];

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Box>
          <Png width={310} height={300} rounded={0} name="product1" />
        </Box>
        <Box marginTop={5} marginBottom={8}>
          <Text size={theme.font.sizes.large} bold>
            New Gucci cotton rabbit tote bag 15" 13.5"
          </Text>

          <Box marginTop={4}>
            <Text size={theme.font.sizes.header} bold>
              $99.99
            </Text>
          </Box>
        </Box>

        <Box marginBottom={4}>
          <Button
            text="Buy It Now"
            width={310}
            height={40}
            bold={true}
            textSize={18}
          />
          <Spacer height={10} />

          <Button
            text="Add to cart"
            variant="outline"
            width={310}
            height={40}
            bold={false}
            textSize={18}
            type={'silver'}
            textColor={theme.font.colors.secondary}
          />

          <Spacer height={10} />

          <Button
            text="Add to watchlist"
            variant="outline"
            width={310}
            height={40}
            bold={false}
            textSize={18}
            type={'silver'}
            textColor={theme.font.colors.secondary}
            borderColor={theme.font.colors.secondary}
          />
        </Box>

        <Box>
          <Text bold size={20}>
            About this item
          </Text>
          <Spacer height={10} />

          <TouchableOpacity style={styles.button} onPress={toggleModal}>
            {values.slice(0, 4).map((item, index) => (
              <Box
                key={index}
                flexDirection="row"
                justifyContent="flex-start"
                marginBottom={3}>
                <Box flex={1} marginLeft={2}>
                  <Text size={14} bold>
                    {item.name}
                  </Text>
                </Box>
                <Box flex={1} marginLeft={5}>
                  <Text size={14}>{item.value}</Text>
                </Box>
              </Box>
            ))}
          </TouchableOpacity>
        </Box>
        <Box marginTop={5}>
          <Text bold size={19}>
            Item desciption from the seller
          </Text>
          <Spacer height={5} />

          <Text size={14}>New Gucci cotton tote bag 15"x13"x5"</Text>
        </Box>

        {/* Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={isModalVisible}
          onRequestClose={() => {
            // Handle modal close event
            toggleModal();
          }}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text bold size={16}>
                About this item
              </Text>
              <Spacer height={15} />

              <Box flex={1}>
                {values.map(item => (
                  <Box
                    key={item.name}
                    margin={1}
                    flexDirection={'row'}
                    justifyContent={'space-between'}>
                    <Box width={'50%'}>
                      <Text size={14}>{item.name}</Text>
                    </Box>
                    <Box width={'50%'}>
                      <Text size={14}>{item.value}</Text>
                    </Box>
                  </Box>
                ))}
              </Box>
              <TouchableOpacity onPress={toggleModal}>
                <Text size={14} color='blue'>Back Detail Product</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    borderWidth: 1,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#f2f7f4',
    padding: 10,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: '85%',
  },
});

export default ProductDetail;
