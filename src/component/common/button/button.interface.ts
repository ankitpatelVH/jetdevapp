import { GestureResponderEvent } from 'react-native';
import { ReactElement } from 'react';
import {
  StyleProp,
  TextStyle,
  ViewStyle,
  ActivityIndicatorProps,
  TouchableOpacityProps,
} from 'react-native';

export interface ButttonProps {
  name: string | undefined;
  containerStyle?: StyleProp<ViewStyle> | undefined;
  showLoader?: boolean;
  activityProps?: ActivityIndicatorProps;
  nameTextStyle?: StyleProp<TextStyle> | undefined;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  buttonProps?: TouchableOpacityProps;
  color?: string;
  icon?: ReactElement | undefined;
  disabled?: boolean
}
