import React from 'react';
import {View, Text, Image} from 'native-base';
import {Spacer} from '../components';

const ProductShop = ({product, index}) => {
  // Kiểm tra xem product có tồn tại và có thuộc tính 'image' không
  if (!product || !product.image) {
    return null; // Trả về null nếu không có dữ liệu hợp lệ
  }

  return (
    <View key={index}>
      {/* Block for Products */}
      <View style={{marginBottom: 10}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={{uri: product.image}}
            alt={`Product ${index + 1}`}
            size="100"
          />
          <Spacer width={10} />
          <View style={{paddingRight: 97}}>
            <Text>{product.name}</Text>
            <Spacer width={10} />
            <Spacer height={10} />
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{fontSize: 22, fontWeight: 'bold'}}>
                ${product.price}
              </Text>
              <Text>x{product.quantity}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductShop;
