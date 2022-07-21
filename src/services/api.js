import axios from 'axios';

const api = axios.create({
    baseURL: 'https://my-json-server.typicode.com/higorpo/trilha-dev-json-server/'
})

export default api;

import axios from "axios";