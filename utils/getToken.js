import axios from './axios';

const getToken = () => {
   const tokenPromise = axios.post('oauth/token', {
    grant_type: 'client_credentials',
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
  })

  return tokenPromise;
}

export default getToken;
