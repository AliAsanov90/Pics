import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 215871253c82716b2a983cee82d31ab7d11acdcbd85bedd073b2726d49526c81'
  }
});