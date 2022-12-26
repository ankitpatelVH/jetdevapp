import { StyleSheet } from 'react-native';
import { color, fontFamily } from '../../../theme';

const style = StyleSheet.create({
  containerStyle: {
    height: 45,
    justifyContent: 'center',
    backgroundColor: color.white,
    paddingBottom: 15
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoStyle: {
    height: 40,
    width: 40
  }
});
export default style;
