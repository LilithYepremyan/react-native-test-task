import * as React from "react";
import Svg, {Path} from "react-native-svg";
import {ISvgIconProps} from "./types";

export const ClearIcon = ({
                              color,
                              size = 24,
                              ...restProps
                          }: ISvgIconProps) => (
    <Svg viewBox="0 0 24 24" width={size} height={size} {...restProps}>
        <Path
            fill={color}
            d="M11.5 11.0556L16.5556 6L18 7.44445L12.9445 12.5L18 17.5556L16.5556 19L11.5 13.9445L6.44445 19L5 17.5556L10.0556 12.5L5 7.44445L6.44445 6L11.5 11.0556Z"

        />
    </Svg>
);
