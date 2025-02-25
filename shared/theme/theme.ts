import { StyleProp, TextStyle, ViewStyle } from "react-native";
import { typographyStyles } from "./typography";
import { TypographyVariant } from "./typography";

const paletteLight = {
  background: {
    primary: "#F9FAF7",
    secondary: "#F5F6F3",
    tetriary: "#EFF0ED",
    modal: "#17171C66",
    surfacePrimary: "#FCFCFC",
    surfaceSecondary: "#FFFFFF",
    surfaceSkeleton: "#E7E8E7",
    surfacePressed: "##EDFEB7",
    surfaceChosen: "#F6FED9",
    surfaceAccent: "#F4FFCC",
  },
  text: {
    primary: "#17171C",
    secondary: "#46484D",
    tetriary: "#808387",
    darkSurfacePrimary: "#FEFFFC",
    darkSurfaceSecondary: "#F1F2EF",
    lightSurfacePrimary: "#17171C",
    link: "#A2D628",
    linkPressed: "#93C226",
    good: "#00DD66",
    caution: "#F4BA1A",
    danger: "#FF002E",
    media: "#FEFFFC52",
    buttonDisabled: "#CCCCCF",
  },
  button: {
    primary: "#CAFA2D",
    primaryPressed: "#B3ED2B",
    light: "#FEFFFC",
    filter: "#EFF0ED",
    commonPressed: "#E7E8E7",
    commonChosen: "#B3ED2B",
    commonDisabled: "#EFF0ED",
    secondary: "#17171C",
    secondaryPressed: "#46484D",
    media: "#17171C73",
    mediaPressed: "#17171CB2",
    mediaDisabled: "#17171C33",
  },
  input: {
    primary: "#F9FAF7",
    focused: "#FBFCF9",
    filled: "#FEFFFC",
    disabled: "#E7E8E7",
    stroke: "#D5D6D6",
    strokeFocused: "#ACACB0",
    strokeFilled: "#E6E6E6",
    strokeFilledGood: "#00DD66",
    strokeFilledError: "#FF002E",
    strokeFilledCaution: "#F4BA1A",
  },
  tooltip: {
    hint: "#525259",
    primary: "#CAFA2D",
    danger: "#FF002E",
    caution: "#F4BA1A",
    good: "#00DD66",
  },
  decorative: {
    divider: "#17171C1A",
    heart: "#FF006B",
  },
  image: {
    selected: "#EDFEB7",
    load: "#E6E6E6",
    contrast: "#262626",
  },
};

const gradientsLight = {
  primaryDecorative: {
    angle: 314.24,
    stops: [
      { offset: 0, color: "#B3ED2B" },
      { offset: 0.5068, color: "#CAFA2D" },
      { offset: 0.5068, color: "#D4FD50" },
      { offset: 1, color: "#DDFD72" },
    ],
  },
  secondaryDecorative: {
    angle: 314.24,
    stops: [
      { offset: 0, color: "#A2D628" },
      { offset: 0.5068, color: "#B3ED2B" },
      { offset: 0.5068, color: "#CAFA2D" },
      { offset: 1, color: "#D4FD50" },
    ],
  },
  primaryAdditional: {
    angle: 314.24,
    stops: [
      { offset: 0, color: "#B860D5" },
      { offset: 0.5068, color: "#DD84FB" },
      { offset: 0.5068, color: "#E398FB" },
      { offset: 1, color: "#FEFCFF" },
    ],
  },
  secondaryAdditional: {
    angle: 314.24,
    stops: [
      { offset: 0, color: "#9950B1" },
      { offset: 0.5068, color: "#D870FA" },
      { offset: 0.5068, color: "#DD84FB" },
      { offset: 1, color: "#F9E8FE" },
    ],
  },
  symbolPrimary: {
    angle: 124.41,
    stops: [
      { offset: 0.0552, color: "#CAFC27" },
      { offset: 1.0196, color: "#52F704" },
    ],
  },
  symbolSecondary: {
    angle: 129.46,
    stops: [
      { offset: 0.0706, color: "#FF76D6" },
      { offset: 0.8453, color: "#5821FF" },
    ],
  },
};

const shadowsLight = {
  outer1: {
    shadowColor: '#545466',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 3, // android
  },
  outer2: {
    shadowColor: '#17171C',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.14,
    shadowRadius: 6,
    elevation: 6, // android
  },
  outer3: {
    shadowColor: '#17171C',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.24,
    shadowRadius: 8,
    elevation: 8, // android
  },
  outer4: {
    shadowColor: '#17171C',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.24,
    shadowRadius: 8,
    elevation: 8, // android
  },
  inner1: {
    shadowColor: '#17171C',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 3, // android
  },
  inner2: {
    shadowColor: '#17171C',
    shadowOffset: {
      width: 0,
      height: -1
    },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 3, // android
  },
};

export const theme = {
  palette: paletteLight,
  gradients: gradientsLight,
  shadows: shadowsLight,
  spacing: (spaces: number = 1) => spaces * 4,
  typography: {
    default: "body1Reg" as TypographyVariant,
    defaultStyle: {},
    variants: typographyStyles as Record<TypographyVariant, TextStyle>,
  },
  styles: {
    foo: {} as StyleProp<ViewStyle>,
  },
};
