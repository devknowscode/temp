import { StyleSheet, View } from 'react-native';
import React from 'react';
import { s } from '@/utils/scale';

interface HStackProps {
    space?: number;
    style?: any;
    children?: React.ReactNode;
    alignItems?: 'center' | 'flex-start' | 'flex-end';
    justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-evenly' | 'space-between';
}

const Component: React.FC<HStackProps> = ({
    children,
    space = 5,
    alignItems = 'flex-start',
    justifyContent = 'flex-start',
    style = {},
}) => {
    return (
        <View style={[styles.hstack, { alignItems, justifyContent, columnGap: s(space) }, style]}>
            {children}
        </View>
    );
};

export default Component;

const styles = StyleSheet.create({
    hstack: {
        flexDirection: 'row',
    },
});
