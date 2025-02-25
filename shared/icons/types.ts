import { SharedValue } from "react-native-reanimated";
import { SvgProps } from "react-native-svg";

export interface ISvgIconProps extends SvgProps {
  size?: number;
  secondaryColor?: SvgProps["color"];
  sharedValue?: SharedValue<number>;
}
