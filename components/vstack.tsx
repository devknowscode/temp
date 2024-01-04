import { StyleSheet, View } from 'react-native';
import React from 'react';
import { s } from '@/utils/scale';

interface VStackProps {
    space?: number;
    style?: any;
    children?: React.ReactNode;
    alignItems?: 'center' | 'flex-start' | 'flex-end';
    justifyContent?: 'center' | 'flex-start' | 'flex-end';
}

const Component: React.FC<VStackProps> = ({
    children,
    space = 5,
    alignItems = 'flex-start',
    justifyContent = 'flex-start',
    style = {},
}) => {
    return (
        <View style={[styles.vstack, { alignItems, justifyContent, rowGap: s(space) }, style]}>
            {children}
        </View>
    );
};

export default Component;

const styles = StyleSheet.create({
    vstack: {
        flex: 1,
        flexDirection: 'column',
    },
});
