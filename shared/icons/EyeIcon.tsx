import * as React from "react";
import Svg, {Path} from "react-native-svg";
import {ISvgIconProps} from "./types";

export const EyeIcon = ({
                            color,
                            size = 24,
                            ...restProps
                        }: ISvgIconProps) => (
    <Svg viewBox="0 0 24 24" width={size} height={size} {...restProps}>
        <Path
            fill={color}
            d="M11.0003 0C16.3924 0 20.8784 3.87976 21.8189 9C20.8784 14.1202 16.3924 18 11.0003 18C5.60812 18 1.12215 14.1202 0.181641 9C1.12215 3.87976 5.60812 0 11.0003 0ZM11.0003 16C15.2359 16 18.8603 13.052 19.7777 9C18.8603 4.94803 15.2359 2 11.0003 2C6.7646 2 3.14022 4.94803 2.22278 9C3.14022 13.052 6.7646 16 11.0003 16ZM11.0003 13.5C8.51498 13.5 6.50026 11.4853 6.50026 9C6.50026 6.51472 8.51498 4.5 11.0003 4.5C13.4855 4.5 15.5003 6.51472 15.5003 9C15.5003 11.4853 13.4855 13.5 11.0003 13.5ZM11.0003 11.5C12.381 11.5 13.5003 10.3807 13.5003 9C13.5003 7.6193 12.381 6.5 11.0003 6.5C9.6196 6.5 8.50026 7.6193 8.50026 9C8.50026 10.3807 9.6196 11.5 11.0003 11.5Z"
        />
    </Svg>
);
