import axios from 'axios';
const URL = 'https://8d4871dae7b3b0735f6506b516023f89.serveo.net'
const axiosClient = axios.create({
    baseURL: 'http://192.168.32.92:3000/',
    //baseURL: '192.168.35.20:8000',
    headers: {
        'Cache-Control': 'no-cache',
        Pragma: 'no-cache',
        Expires: 0,
        Accept: 'application/json',
        'Content-Type': 'application/json',    
    },
    data: {}
});

export default axiosClient;

