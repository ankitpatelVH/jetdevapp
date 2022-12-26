import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const pinIcon = (props: SvgProps) => (
    <Svg width={12.25} height={17.5} {...props}>
        <Path
            data-name="Icon material-location-on"
            d="M6.125 0A6.121 6.121 0 0 0 0 6.125C0 10.719 6.125 17.5 6.125 17.5s6.125-6.781 6.125-11.375A6.121 6.121 0 0 0 6.125 0Zm0 8.313a2.188 2.188 0 1 1 2.188-2.188 2.188 2.188 0 0 1-2.188 2.188Z"
            fill="#808080"
        />
    </Svg>
);

export default pinIcon;
