const tokenStore = (token = '') => {
  const _token = token;

  return {
    getToken() {
      return _token;
    },
    setToken(token) {
      _token = token;
    },
  }
};

appToken = tokenStore();

export default appToken;
