import React, {useState} from 'react';
import {
  Text,
  Image,
  View,
  Divider,
  Input,
  Button,
  ScrollView,
} from 'native-base';
import {Spacer} from '../components';
import ProductShop from './productshop';


const initialPromoCodes = {
  1: 'SHOP1CODE',
  2: 'SHOP2CODE',
};
const Checkout = () => {
  const shops = [
    {
      id: 1,
      name: 'Shop of Fennec',
      image: 'https://intphcm.com/data/upload/logo-dep-cocacola.jpg',
      promoCode: 'FENNEC_PROMO', // Add promoCode for the first shop
      products: [
        {
          name: 'Activo INCIPIO 8 Explorer 1016 Wristwatch Men Automatic from JP Rare',
          image: 'https://intphcm.com/data/upload/logo-dep-toyota.jpg',
          quantity: 2,
          price: 20,
        },
        {
          name: 'TUDOR 74034 PRINCE OSYTERDATE SWISS 2824 AUTOMATIC MEN WATCH',
          image: 'https://intphcm.com/data/upload/logo-dep-fexed.jpg',
          quantity: 1,
          price: 30,
        },
      ],
    },
    {
      id: 2,
      name: 'Shop of Another Fennec',
      image: 'https://intphcm.com/data/upload/logo-dep-lg.jpg',
      promoCode: 'ANOTHER_FENNEC_PROMO',
      products: [
        {
          name: 'Activo INCIPIO 8 Explorer 1016 Wristwatch Men Automatic from JP Rare',
          image: 'https://intphcm.com/data/upload/logo-dep-google.jpg',
          quantity: 2,
          price: 20,
        },
        {
          name: 'TUDOR 74034 PRINCE OSYTERDATE SWISS 2824 AUTOMATIC MEN WATCH',
          image: 'https://intphcm.com/data/upload/logo-dep-mercedes.jpg',
          quantity: 1,
          price: 30,
        },
      ],
    },
  ];

  const [promoCodes, setPromoCodes] = useState(initialPromoCodes);
  const [discounts, setDiscounts] = useState({});


  const calculateTotal = products => {
    const subtotal = products.reduce(
      (total, product) => total + product.quantity * product.price,
      0,
    );
    return subtotal - discounts[shop.id]; // Sử dụng giảm giá tương ứng với id cửa hàng
  };

  const handleApplyPromoCode = shop => {
    const shopPromoCode = promoCodes[shop.id] || ''; // Lấy promo code cho cửa hàng hiện tại

    if (shopPromoCode === promoCode) {
      // Nếu mã khuyến mãi hợp lệ, giảm giá cho cửa hàng đó
      setDiscounts({
        ...discounts,
        [shop.id]: 10, // Giảm giá $10 cho mỗi cửa hàng, bạn có thể thay đổi giá trị này
      });
    } else {
      // Nếu mã khuyến mãi không hợp lệ, bạn có thể xử lý thông báo hoặc thực hiện hành động khác
      alert('Invalid promo code for this shop');
    }
  };

  const handleCheckout = () => {
    // Tính tổng số tiền của tất cả các sản phẩm trong tất cả các cửa hàng
    const total = shops.reduce((acc, shop) => {
      return acc + calculateTotal(shop.products);
    }, 0);

    alert(`Checkout button pressed! Total amount: $${total}`);
    // Thêm logic thanh toán thực tế của bạn ở đây, ví dụ: sử dụng các API thanh toán như Stripe, PayPal, vv.
  };

  return (
    <ScrollView>
      <View style={{padding: 10}}>
        {shops.map((shop, shopIndex) => (
          <View key={shopIndex}>
            {/* Block for Shop */}
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={{uri: shop.image}}
                alt={`Shop ${shopIndex + 1} Image`}
                size="30"
              />
              <Spacer width={10} />
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                {shop.name}
              </Text>
            </View>

            {/* Block for Products */}
            <View style={{padding: 10, marginTop: 10}}>
              {shop.products.map((product, index) => (
                <ProductShop key={index} product={product} index={index} />
              ))}
              <Divider marginY={2} thickness={2} />

              {/* Block for Promo Code Input */}
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginRight: 70,
                }}>
                <Input
                  placeholder="Enter promo code"
                  value={promoCodes[shop.id] || ''} 
                  onChangeText={text => {
                    setPromoCodes({
                      ...promoCodes,
                      [shop.id]: text, 
                    });
                  }}
                  style={{}}
                />
                <Button
                  onPress={() => handleApplyPromoCode(shop)}
                  size="lg"
                  colorScheme="info"
                  marginLeft={2}>
                  Apply
                </Button>
              </View>
              <Spacer height={10} />
            </View>
          </View>
        ))}
        {/* Block for Checkout Button */}
        <Button
          onPress={handleCheckout}
          size="md"
          colorScheme="primary"
          marginTop={2}>
          <Text>Checkout</Text>
        </Button>
      </View>
    </ScrollView>
  );
};

export default Checkout;
