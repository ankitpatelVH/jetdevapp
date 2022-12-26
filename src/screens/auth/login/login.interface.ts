export interface loginInterface { }

export interface loginHookProps {
  onLoginButton?: () => void;
  goBack?: () => void;
  userEmail?: string;
  setUserEmail: React.Dispatch<React.SetStateAction<string>>;
  setUserPassword: React.Dispatch<React.SetStateAction<string>>;
  userPassword: string,
  error: errorProps
  loginFormValidation: (() => void)
  showLoader?: boolean
}

export interface errorProps {
  userEmailError: null | string,
  userPasswordError: null | string
}
