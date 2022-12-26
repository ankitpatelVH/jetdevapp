import React, { ReactElement } from 'react';
import {
  ImageSourcePropType,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';

export interface HeaderProps {
  containerStyle?: StyleProp<TextStyle> | undefined;
  icon?: React.ReactNode | ImageSourcePropType | undefined
}
