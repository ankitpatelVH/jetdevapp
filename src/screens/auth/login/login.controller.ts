import { useNavigation } from '@react-navigation/native';
import { AuthNavigationProps } from '../../../navigation/stack/authStack';
import { errorProps, loginHookProps } from './login.interface';
import { useState } from 'react';
import errorMessages from '../../../utils/errorMessages';
import { checkEmail, checkPassword } from '../../../utils/stringValidation';
import Snackbar from 'react-native-snackbar';
import { Keyboard } from 'react-native';

const loginController = (): loginHookProps => {
  const [showLoader, setShowLoader] = useState<boolean>(false)
  const [userEmail, setUserEmail] = useState<string>('')
  const [userPassword, setUserPassword] = useState<string>('')
  const [error, setError] = useState<errorProps>({
    userEmailError: null,
    userPasswordError: null,
  })

  const loginFormValidation = () => {
    /**
     * check loginFormValidation with
     * @param {userEmail , userPassword}
     */

    let isValueValid = true
    if (!userEmail) {
      isValueValid = false
      error.userEmailError = errorMessages.emptyEmail
    } else if (!checkEmail(userEmail)) {
      isValueValid = false
      error.userEmailError = errorMessages.invalidEmail
    } else {
      error.userEmailError = null
    }

    if (!userPassword) {
      isValueValid = false
      error.userPasswordError = errorMessages.emptyPassword
    } else if (!checkPassword(userPassword)) {
      isValueValid = false
      error.userPasswordError = errorMessages.invalidPassword
    } else {
      error.userPasswordError = null
    }
    setError({ ...error })
    if (isValueValid) {
      setShowLoader(true)
      checkLoginFormDetails()
      Keyboard.dismiss()
    }
  }

  const checkLoginFormDetails = () => {
    let emailId = 'reactnative@jetdevs.com'
    let Password = "jetdevs@123"

    setTimeout(() => {
      if (emailId == userEmail.toLowerCase() && Password == userPassword) {
        setShowLoader(false)
        Snackbar.show({
          text: errorMessages.loginSuccess
        })
        navigation.navigate('homeNavigator')
      } else {
        setShowLoader(false)
        Snackbar.show({
          text: errorMessages.invalidDetails
        })
      }
    }, 1000);
  }

  const navigation = useNavigation<AuthNavigationProps>();

  const onLoginButton = (): void => { };

  return { showLoader, onLoginButton, goBack: navigation.goBack, userEmail, setUserEmail, setUserPassword, userPassword, error, loginFormValidation };
};

export default loginController;
