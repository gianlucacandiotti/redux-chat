import axios from './axios';

const getToken = () => {
  console.log(axios);
  axios.post('oauth/token', {
    grant_type: 'client_credentials',
    client_id: 3,
    client_secret: '8ihAtFHULw5Xl2Iq0sBomXRZnmt1XiWssptY3MJ1',
  })
  .then(function (response) {
    console.log('response: ', response.data);
    return response.data;
  })
  .catch(function (error) {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else {
      console.log('Error', error.message);
    }

    console.log(error.config);

    return error;
  });
}

export default getToken;
