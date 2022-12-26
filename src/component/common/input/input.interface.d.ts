import { ColorValue, KeyboardTypeOptions, ReturnKeyTypeOptions, TextStyle, ViewStyle } from "react-native";

interface InputProps {
  label?: string | undefined;
  error?: string | undefined | null;
  placeholder?: string | undefined;
  inputStyle?: ViewStyle | TextStyle | undefined;
  containerStyle?: ViewStyle | undefined;
  labelStyle?: TextStyle | undefined;
  errorStyle?: TextStyle | undefined;
  onChangeText?: ((text: string) => void) | undefined;
  value?: string | undefined;
  secureTextEntry?: boolean | undefined;
  keyboardType?: KeyboardTypeOptions | undefined;
  returnKeyType?: ReturnKeyTypeOptions | undefined;
  multiline?: boolean | undefined;
  maxLength?: number | undefined;
  numberOfLines?: number | undefined;
  placeholderTextColor?: ColorValue | undefined;
  inputIcon?: 'email' | 'password'
  isFocusedInput?: ((text: boolean | undefined) => void) | undefined;
  marginHorizontal?: number
}