import React from 'react';
import { View } from 'react-native';

interface DividerProps {
    thickness?: number;
    orientation?: 'horizontal' | 'vertical';
    color?: string;
    style?: any;
}

const Component: React.FC<DividerProps> = ({
    thickness = 1,
    orientation = 'horizontal',
    color = '#DFE4EA',
    style,
}) => {
    const dividerStyles = [
        { width: orientation === 'horizontal' ? '100%' : thickness },
        { height: orientation === 'vertical' ? '100%' : thickness },
        { backgroundColor: color },
        style,
    ];

    return <View style={dividerStyles} />;
};

export default Component;
