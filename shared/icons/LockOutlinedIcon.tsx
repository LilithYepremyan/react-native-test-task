import * as React from "react";
import Svg, {Path} from "react-native-svg";
import {ISvgIconProps} from "./types";

export const LockOutlinedIcon = ({
                                     color,
                                     size = 24,
                                     ...restProps
                                 }: ISvgIconProps) => (
    <Svg viewBox="0 0 24 24" width={size} height={size} {...restProps}>
        <Path
            fill={color}
            d="M19 10H20C20.5523 10 21 10.4477 21 11V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V11C3 10.4477 3.44772 10 4 10H5V9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V10ZM5 12V20H19V12H5ZM11 14H13V18H11V14ZM17 10V9C17 6.23858 14.7614 4 12 4C9.23858 4 7 6.23858 7 9V10H17Z"
        />
    </Svg>
);
