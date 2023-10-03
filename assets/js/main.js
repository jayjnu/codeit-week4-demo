(function(TextInput, SignInForm, LoginService) {
  const emailInput = TextInput({
    $root: document.getElementById('emailTextInput'),
    emptyErrorMessage: '이메일을 입력해주세요',
    invalidErrorMessage: '이메일을 확인해주세요',
    validate: (input) => {
      const emailRegexp = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

      return emailRegexp.test(input);
    }
  });
  const passwordInput = TextInput({
    $root: document.getElementById('passwordTextInput'),
    emptyErrorMessage: '비밀번호를 입력해주세요',
    invalidErrorMessage: '비밀번호를 확인해주세요',
    validate: (input) => {
      return input.length > 6;
    }
  });
  const loginForm = SignInForm({
    $root: document.getElementById('signInForm'),
    inputs: [
      emailInput,
      passwordInput
    ],
    loginService: LoginService()
  })

  emailInput.init();
  passwordInput.init();
  loginForm.init();


  
})(window.TextInput, window.SignInForm, window.LoginService);