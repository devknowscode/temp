import React from 'react';
import {StyleSheet} from 'react-native';
import theme from '../styles/theme';
import LinearGradient from 'react-native-linear-gradient';

const Render = ({children}: {children?: React.ReactNode}) => (
  <LinearGradient
    start={{x: 0.8, y: 0.05}}
    end={{x: 0.5, y: 1.0}}
    colors={[theme.colors.white, theme.colors.white]}
    style={styles.container}>
    {children}
  </LinearGradient>
);

export default Render;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
