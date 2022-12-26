import React from 'react';
import { StatusBar, View } from 'react-native';
import { color } from '../../../theme';
import { CoustomStatusProps } from './customStatusbar.interface';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const CustomStatusbar: React.FC<CoustomStatusProps> = (
  { backgroundColor, containerStyle },
  props,
) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        {
          height: insets.top,
          backgroundColor: backgroundColor || color.primary,
        },
        containerStyle,
      ]}>
      <StatusBar
        animated={true}
        backgroundColor={backgroundColor || color.primary}
        barStyle={'dark-content'}
        {...props}
      />
    </View>
  );
};

export default CustomStatusbar;
