import axios from 'axios';
const URL = 'https://8d4871dae7b3b0735f6506b516023f89.serveo.net'
const axiosClient = axios.create({
    // baseURL: 'http://10.0.2.2:8000/',
    baseURL: 'https://17d30f82099b8b982278831e20c9cfb0.serveo.net',
    headers: {
        'Cache-Control': 'no-cache',
        Pragma: 'no-cache',
        Expires: 0,
        Accept: 'application/json',
        'Content-Type': 'application/json',
        
    },
});

export default axiosClient;

