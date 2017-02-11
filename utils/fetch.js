import axios from './axios';
import tokenStore from './tokenStore';
import getAuthToken  from './getToken';

const fetch = {
  get(url, params) {
    return this.getToken()
      .then(() => {
        this.setAuth(tokenStore.get());

        return axios({
          method: 'get',
          url,
          params,
        });
      })
  },
  post(url, data) {
    return this.getToken()
      .then(() => {
        this.setAuth(tokenStore.get());

        return axios({
          method: 'post',
          url,
          data,
        });
      })
  },
  setAuth(token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  },
  getToken() {
    const token = tokenStore.get();

    if (!token) {
      const tokenPromise = getAuthToken()
        .then((response) => {
          tokenStore.set(response.data.access_token);
        })

      return Promise.resolve(tokenPromise);
    } else {
      return Promise.resolve(token);
    }
  },
}

export default fetch;
