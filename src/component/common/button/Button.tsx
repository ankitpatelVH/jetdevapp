import React, { memo } from 'react';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
import { ButttonProps } from './button.interface';
import { color } from '../../../theme';
import style from './button.style';

const Button: React.FC<ButttonProps> = ({
  name,
  activityProps,
  buttonProps,
  color,
  containerStyle,
  icon,
  showLoader,
  nameTextStyle,
  onPress,
  disabled
}) => {
  return (
    <TouchableOpacity
      style={[style.container, { backgroundColor: color }, containerStyle]}
      activeOpacity={0.7}
      onPress={onPress}
      disabled={disabled}
      {...buttonProps}>

      {showLoader ? <ActivityIndicator
        size="small"
        color={color}
        style={style.indicatorStyle}
        {...activityProps}
      /> :
        <Text style={[style.nameStyle, nameTextStyle]}>{name}</Text>}


    </TouchableOpacity>
  );
};

export default memo(Button);
Button.defaultProps = {
  showLoader: false,
  color: color.white,
};
