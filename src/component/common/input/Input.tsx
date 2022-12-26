import React, { FC, useEffect, useRef, useState, forwardRef } from 'react';
import {
  Text,
  TextInput,
  View,
} from 'react-native';
import { InputProps } from './input.interface';
import styles from './input.style';
import { color } from '../../../theme';
import { Svg } from '../../../assets';

const Input: FC<InputProps> = ({
  placeholder,
  inputStyle,
  containerStyle,
  label,
  labelStyle,
  onChangeText,
  secureTextEntry,
  value,
  error,
  errorStyle,
  keyboardType,
  returnKeyType,
  multiline,
  maxLength,
  numberOfLines,
  placeholderTextColor,
  inputIcon,
  isFocusedInput,
  marginHorizontal,
}) => {
  const inputRef = useRef<TextInput>(null);
  const [isFocused, setIsFocused] = useState<boolean | undefined>(false);
  const checkIsFocusedHandler = () => {
    let result = inputRef.current?.isFocused();
    setIsFocused(result);
  };

  useEffect(() => {
    isFocusedInput?.(isFocused)
  }, [isFocused])

  return (
    <View style={{ marginHorizontal: !marginHorizontal ? 20 : marginHorizontal, marginVertical: 10 }}>
      {label && <Text style={[styles.labelStyle, labelStyle]}>{label}</Text>}
      <View style={[styles.containerStyle, {
        borderBottomWidth: isFocused ? 1 : 1,
        borderBottomColor: isFocused ? color.secondary : color.neutralGray,
      }, containerStyle]}>
        {inputIcon == 'email' ?
          <Svg.emailSvg fill={isFocused ? color.secondary : color.neutralGray} /> : inputIcon == 'password' ?
            <Svg.passwordSvg fill={isFocused ? color.secondary : color.neutralGray} /> : null}
        <TextInput
          ref={inputRef}
          style={[styles.inputViewStyle, inputStyle]}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          onChangeText={onChangeText}
          value={value}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          returnKeyType={returnKeyType}
          multiline={multiline}
          maxLength={maxLength}
          numberOfLines={numberOfLines}
          onFocus={checkIsFocusedHandler}
          onEndEditing={checkIsFocusedHandler}
        />
      </View>
      {error && <Text style={[styles.errorStyle, errorStyle]}>{error}</Text>}
    </View>
  );
};

Input.defaultProps = {
  placeholderTextColor: color.neutralGray
}
export default Input;
