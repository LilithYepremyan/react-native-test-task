import React, { PropsWithChildren } from "react";
import { Text, TextProps } from "react-native";
import { theme } from "@/shared/theme";
import { TypographyVariant } from "@/shared/theme";
import Animated from "react-native-reanimated";

export type TypographyProps = PropsWithChildren<
  TextProps & {
    variant?: TypographyVariant;
    isAnimated?: boolean;
  }
>;

export const Typography = ({
  style,
  variant = theme.typography.default,
  children,
  isAnimated = false,
  ...textProps
}: TypographyProps) => {
  return isAnimated ? (
    <Animated.Text
      {...textProps}
      style={[
        { color: theme.palette.text.primary },
        theme.typography.defaultStyle,
        theme.typography.variants[variant],
        style,
      ]}
    >
      {children}
    </Animated.Text>
  ) : (
    <Text
      {...textProps}
      style={[
        { color: theme.palette.text.primary },
        theme.typography.defaultStyle,
        theme.typography.variants[variant],
        style,
      ]}
    >
      {children}
    </Text>
  );
};
