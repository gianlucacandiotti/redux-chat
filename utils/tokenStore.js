const tokenStore = (token = '') => {
  let _token = token;

  return {
    get() {
      return _token;
    },
    set(token) {
      _token = token;
    },
  }
};

const appToken = tokenStore();

export default appToken;
