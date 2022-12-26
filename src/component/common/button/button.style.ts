import { StyleSheet } from 'react-native';
import { color, fontFamily } from '../../../theme';

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: color.secondary,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameStyle: {
    fontSize: 16,
    color: color.white,
    lineHeight: 21,
  },

  indicatorStyle: {
    marginRight: 10,
  },
});
export default style;
