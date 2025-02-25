import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { Typography } from "@/shared/components/Typography";
import { EyeIcon } from "@/shared/icons/EyeIcon";
import { ClearIcon } from "@/shared/icons/ClearIcon";
import { theme } from "@/shared/theme";

interface CustomTextInputProps {
    state?: 'default' | 'disabled';
    label?: string;
    rightIcon?: boolean;
    leftIcon?: boolean;
    title?: string;
    helperText?: string;
    clearIcon?: boolean;
}

export const CustomTextInput: React.FC<CustomTextInputProps> = ({
                                                                    state = "default",
                                                                    label,
                                                                    helperText,
                                                                    rightIcon,
                                                                    leftIcon,
                                                                    title,
                                                                    clearIcon = false
                                                                }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [value, setValue] = useState('');
    const [isNumber, setIsNumber] = useState(false);

    const iconColor = state === "disabled" ? theme.palette.text.buttonDisabled : theme.palette.text.tetriary;
    const placeholderColor = state === "disabled" ? theme.palette.text.buttonDisabled : theme.palette.text.tetriary;

    const handleChangeText = (text: string) => {
        setIsNumber(/\d/.test(text));
        setValue(text);
    };

    const handleClearText = () => {
        setValue("");
    };

    const animatedStyle = useAnimatedStyle(() => {
        return {
            borderColor: withTiming(
                isNumber ? theme.palette.text.danger : isFocused ? theme.palette.input.strokeFocused : theme.palette.input.stroke,
                { duration: 500 }
            ),
            backgroundColor: withTiming(
                isNumber ? theme.palette.input.filled : isFocused ? theme.palette.input.focused : theme.palette.input.primary,
                { duration: 500 }
            )
        };
    });

    const renderIcon = () => {
        if (!isFocused && rightIcon) {
            return <EyeIcon color={iconColor} />;
        }
        if (isFocused && value.length <= 0 && !clearIcon && !leftIcon || rightIcon && leftIcon && isFocused) {
            return <EyeIcon color={iconColor} />;
        }
        if (isFocused && value.length > 0 && clearIcon) {
            return (
                <TouchableOpacity onPress={handleClearText}>
                    <ClearIcon color={iconColor} />
                </TouchableOpacity>
            );
        }
        if (!isFocused && value.length > 0 && rightIcon || isFocused && value.length < 0 && rightIcon) {
            return <EyeIcon color={iconColor} />;
        }
        return null;
    };

    return (
        <View style={styles.wrapper}>
            {title && <Typography style={styles.title} variant="body2Reg">{title}</Typography>}
            <Animated.View style={[styles.inputContainer, animatedStyle]}>
                {leftIcon && <EyeIcon color={iconColor} />}
                <TextInput
                    style={[styles.input, state === "disabled" && styles.disabledText]}
                    placeholder={label}
                    value={value}
                    onChangeText={handleChangeText}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    editable={state !== "disabled"}
                    placeholderTextColor={placeholderColor}
                />
                {renderIcon()}
            </Animated.View>
            {helperText && (
                <Typography
                    variant="captionReg"
                    style={[styles.helperText, isNumber && styles.helperTextError]}
                >
                    {helperText}
                </Typography>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        marginVertical: 10,
    },
    title: {
        color: theme.palette.text.tetriary
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        paddingHorizontal: 5,
        borderRadius: 12,
        marginVertical: 5,
    },
    input: {
        flex: 1,
        height: 50,
        paddingLeft: 5,
        alignItems: 'center',
        color: theme.palette.text.primary,
    },
    disabledText: {
        color: theme.palette.input.strokeFilledError,
    },
    helperText: {
        color: theme.palette.text.tetriary,
    },
    helperTextError: {
        color: theme.palette.text.danger,
    }
});
