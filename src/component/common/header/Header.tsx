import React, { memo } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { image } from '../../../assets';
import { HeaderProps } from './header.interface';
import style from './header.style';
import CustomStatusbar from '../customStatusbar/CustomStatusbar';

const Header: React.FC<HeaderProps> = (
  { icon, containerStyle },
  props,
) => {
  return (
    <View style={[style.containerStyle, containerStyle]}>
      <View style={style.rowView}>
        <Image source={image.appLogo} style={style.logoStyle} />
      </View>
    </View>
  );
};

export default memo(Header);
