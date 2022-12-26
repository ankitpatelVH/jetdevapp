import { StyleSheet } from 'react-native';
import { color, fontFamily } from '../../../theme';

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputViewStyle: {
    flex: 1,
    paddingVertical: 0,
    height: 40,
    backgroundColor: color.white,
    paddingHorizontal: 10,
    color: color.black
  },
  labelStyle: {
    fontSize: 14,
    lineHeight: 25,
    color: color.black
  },
  errorStyle: {
    fontSize: 14,
    lineHeight: 25,
    color: color.red
  },
  eyeIcon: {
    height: 20,
    width: 20,
  },
});
export default styles;
