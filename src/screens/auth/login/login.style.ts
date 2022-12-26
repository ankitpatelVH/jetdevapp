import { StyleSheet } from 'react-native';
import { color, fontFamily } from '../../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.primary
  },
  contentContainer: {
    flex: 1,
    backgroundColor: color.white,
    marginHorizontal: 20,
    marginTop: 30,
    marginBottom: 50,
    borderRadius: 10
  },
  appLogo: {
    height: 60,
    width: 60,
  },
  logoContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.white,
    bottom: 60 / 2,
    height: 80,
    width: 80,
    borderRadius: 80 / 2
  },
  loginLabel: {
    fontSize: 24,
    color: color.black,
    textAlign: 'center',
    marginTop: 20
    // fontFamily: fontFamily.robotMedium
  },
  buttonContainer: {
    marginHorizontal: 20,
    marginTop: 60
  },
  formContainer: {
    marginTop: 50
  }
})