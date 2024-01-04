import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import { s } from '../utils/scale';
import theme from '../styles/theme';
import Spinner from './spinner';
import Text from './text';

type ButtonProps = {
    onPress: () => void;
    onLongPress?: () => void;
    disabled?: boolean;
    height?: number;
    width?: number;
    backgroundColor?: string;
    text: string;
    textSize?: number;
    textColor?: string;
    bold?: boolean;
    loading?: boolean;
    rounded?: number;
    style?: any;
    iconLeft?: JSX.Element;
    iconRight?: JSX.Element;
    iconSpace?: number;
};

const typeColors: Record<string, string> = {
    primary: theme.light.colors.primary,
    secondary: theme.light.colors.error,
    disabled: theme.light.colors.silver,
};

const Render: React.FC<ButtonProps> = ({
    onPress = () => {},
    onLongPress = () => {},
    disabled = false,
    height = 40,
    width,
    backgroundColor = typeColors.primary,
    text = 'Button',
    textSize = 12,
    textColor = theme.light.font.colors.white,
    bold = false,
    loading = false,
    rounded = 10,
    iconLeft = null,
    iconRight = null,
    iconSpace = 5,
    style = {},
}) => {
    return (
        <Pressable
            disabled={disabled}
            style={({ pressed }) => ({
                backgroundColor,
                opacity: (!disabled && pressed) || disabled ? 0.7 : 1,
                height: s(height),
                width: !width ? 'auto' : s(width),
                borderRadius: s(rounded),
                justifyContent: 'center',
                alignItems: 'center',
                elevation: 5,
                ...style,
            })}
            onPress={() => {
                onPress();
            }}
            onLongPress={() => {
                onLongPress();
            }}
        >
            <View style={styles.buttonContainer}>
                {!loading ? (
                    <View style={[styles.textContainer, { gap: s(iconSpace) }]}>
                        {iconLeft}
                        <Text size={textSize} color={textColor} bold={bold}>
                            {text}
                        </Text>
                        {iconRight}
                    </View>
                ) : (
                    <Spinner size="small" loading={loading} color={theme.light.colors.gray97} />
                )}
            </View>
        </Pressable>
    );
};

export default Render;

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
    },

    textContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
});
