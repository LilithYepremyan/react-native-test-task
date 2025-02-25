import { StyleProp, TextStyle } from "react-native";

export type TypographyVariant =
  | "h1"
  | "h2"
  | "h3Med"
  | "h3Reg"
  | "h4Med"
  | "h4Reg"
  | "body1Med"
  | "body1Reg"
  | "body2Med"
  | "body2Reg"
  | "caption"
  | "captionReg"
  | "small";

export const typographyStyles: Record<TypographyVariant, StyleProp<TextStyle>> = {
  h1: {
    fontFamily: "LatoBold",
    fontSize: 34,
    lineHeight: 38,
    letterSpacing: 0.25,
  },
  h2: {
    fontFamily: "LatoBold",
    fontSize: 24,
    lineHeight: 28,
    letterSpacing: 0,
  },
  h3Med: {
    fontFamily: "LatoSemiBold",
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: 0.15,
  },
  h3Reg: {
    fontFamily: "LatoRegular",
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: 0.15,
  },
  h4Med: {
    fontFamily: "LatoRegular",
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 0,
  },
  h4Reg: {
    fontFamily: "LatoRegular",
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 0.15,
  },
  body1Med: {
    fontFamily: "LatoMedium",
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0,
  },
  body1Reg: {
    fontFamily: "LatoRegular",
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0,
  },
  body2Med: {
    fontFamily: "LatoMedium",
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0,
  },
  body2Reg: {
    fontFamily: "LatoRegular",
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0,
  },
  caption: {
    fontFamily: "LatoBold",
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0,
  },
  captionReg: {
    fontFamily: "LatoRegular",
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0,
  },
  small: {
    fontSize: 10,
    lineHeight: 10,
    letterSpacing: 0,
  },
};
