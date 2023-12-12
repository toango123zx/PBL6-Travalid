import axios from 'axios';
const URL = 'https://8d4871dae7b3b0735f6506b516023f89.serveo.net/'
const axiosClient = axios.create({
    // baseURL: 'http://10.0.2.2:8000/',
    baseURL: 'https://abb69a4079ce3b0b46eb7e441e66e8c1.serveo.net',
    headers: {
        'Cache-Control': 'no-cache',
        Pragma: 'no-cache',
        Expires: 0,
        Accept: 'application/json',
        'Content-Type': 'application/json',
        
    },
});

export default axiosClient;

