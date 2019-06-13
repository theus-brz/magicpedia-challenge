import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.magicthegathering.io/v1/cards',
});

export default api;
