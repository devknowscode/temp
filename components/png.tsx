/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, ImageSourcePropType, StyleSheet, View} from 'react-native';
import {Albedo, Raiden, DefaultUser} from '../assets/images';

import {s} from '../utils/scale';

const PNG: {[key: string]: ImageSourcePropType} = {
  albedo: Albedo,
  raiden: Raiden,
  defaultUser: DefaultUser,
};

const Render = ({
  width,
  height,
  rounded = 0,
  name,
}: {
  width: number;
  height: number;
  rounded: number;
  name: string;
}) => (
  <View
    style={{
      width: s(width),
      height: s(height),
      borderRadius: s(rounded),
      overflow: 'hidden',
    }}>
    <Image style={styles.image} source={PNG[name]} />
  </View>
);

export default Render;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: 'contain',
  },
});
