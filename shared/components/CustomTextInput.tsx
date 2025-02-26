import React, {useState} from 'react';
import {View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import {useController} from 'react-hook-form';
import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';
import {Typography} from "@/shared/components/Typography";
import {EyeIcon} from "@/shared/icons/EyeIcon";
import {ClearIcon} from "@/shared/icons/ClearIcon";
import {theme} from "@/shared/theme";

interface CustomTextInputProps {
    control: any;
    name: string;
    state?: "default" | "disabled";
    label?: string;
    rightIcon?: boolean;
    leftIcon?: boolean;
    title?: string;
    helperText?: string;
    clearIcon?: boolean;
    type?: "text" | "password" | "email" | "number" | "phone" | "url" | "search" | "date"
}

export const CustomTextInput: React.FC<CustomTextInputProps> = ({
                                                                    control,
                                                                    name,
                                                                    state = "default",
                                                                    label,
                                                                    helperText,
                                                                    rightIcon,
                                                                    leftIcon,
                                                                    title,
                                                                    clearIcon = false,
                                                                    type = "text",
                                                                }) => {
    const {field, fieldState} = useController({control, name});

    const iconColor = state === "disabled" ? theme.palette.text.buttonDisabled : theme.palette.text.tetriary;
    const placeholderColor = state === "disabled" ? theme.palette.text.buttonDisabled : theme.palette.text.tetriary;

    const animatedStyle = useAnimatedStyle(() => {
        return {
            borderColor: withTiming(
                fieldState?.error ? theme.palette.text.danger : theme.palette.input.stroke,
                {duration: 500}
            ),
            backgroundColor: withTiming(
                fieldState?.error ? theme.palette.input.filled : theme.palette.input.primary,
                {duration: 500}
            )
        };
    });

    const handleClearText = () => {
        field.onChange("");
    };

    const renderIcon = () => {
        if (field.value && field.value.length > 0 && !leftIcon) {
            return (
                <TouchableOpacity onPress={handleClearText}>
                    <ClearIcon color={iconColor}/>
                </TouchableOpacity>
            );
        }
        if (type == "password" && rightIcon) {
            return <EyeIcon color={iconColor}/>;
        }
        return null;
    };

    return (
        <View style={styles.wrapper}>
            {title && <Typography style={styles.title} variant="body2Reg">{title}</Typography>}
            <Animated.View style={[styles.inputContainer, animatedStyle]}>
                {type === "password" && leftIcon && <EyeIcon color={iconColor}/>}
                <TextInput
                    style={[styles.input, state === "disabled" && styles.disabledText]}
                    placeholder={label}
                    value={field.value}
                    onChangeText={field.onChange}
                    onBlur={() => {
                        field.onBlur();
                    }}
                    editable={state !== "disabled"}
                    placeholderTextColor={placeholderColor}
                />


                {renderIcon()}
            </Animated.View>
            {(helperText || fieldState?.error?.message) && (
                <Typography
                    variant="captionReg"
                    style={[styles.helperText, fieldState?.error && styles.helperTextError]}
                >
                    {fieldState?.error?.message || helperText}
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
