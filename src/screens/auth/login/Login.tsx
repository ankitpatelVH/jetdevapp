import React, { FC, useState } from 'react'
import { View, Text, Image } from 'react-native'
import { Button, CustomStatusbar, Input } from '../../../component'
import loginStyle from './login.style'
import { loginInterface } from './login.interface'
import { image, Svg } from '../../../assets'
import { color } from '../../../theme'
import loginController from './login.controller'

const Login: FC<loginInterface> = () => {
  const { onLoginButton, setUserEmail, userEmail, goBack, setUserPassword, userPassword, error,
    showLoader,
    loginFormValidation } = loginController()
  return (
    <View style={loginStyle.container}>
      <CustomStatusbar />
      <View style={loginStyle.contentContainer}>
        <View style={loginStyle.logoContainer}>
          <Image source={image.appLogo}
            style={loginStyle.appLogo}
            resizeMode='center'
          />
        </View>
        <Text style={loginStyle.loginLabel}>Login</Text>
        <View style={loginStyle.formContainer}>
          <Input
            placeholder='Email'
            keyboardType='email-address'
            inputIcon='email'
            onChangeText={(text: string) => setUserEmail(text)}
            value={userEmail}
            error={error.userEmailError}
          />
          <Input
            secureTextEntry={true}
            placeholder='Password'
            inputIcon='password'
            onChangeText={(text: string) => setUserPassword(text)}
            value={userPassword}
            error={error.userPasswordError}
          />
          <View style={loginStyle.buttonContainer}>
            <Button
              onPress={() => loginFormValidation()}
              disabled={!userEmail || !userPassword}
              name='Login'
              showLoader={showLoader}
              containerStyle={{ backgroundColor: userEmail && userPassword ? color.secondary : color.neutralGray }}
            />
          </View>
        </View>
      </View>
    </View >
  )
}

export default Login