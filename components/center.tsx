import React, { type ReactNode } from 'react';
import { View, StyleSheet, type ViewStyle } from 'react-native';

interface CenteredContainerProps {
    children: ReactNode;
    style?: ViewStyle;
}

const Component: React.FC<CenteredContainerProps> = ({ children, style }) => {
    return <View style={[styles.container, style]}>{children}</View>;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Component;
