function LoginService() {
  return {
    login(request) {
      console.log(request);
      return request.email === 'code@codeit.com' && request.password === '123456789';
    }
  };
};