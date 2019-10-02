import axios from 'axios';

const api = axios.create({
    baseURL: 'https://gsomnistack-backend.herokuapp.com/'
});

export default api;