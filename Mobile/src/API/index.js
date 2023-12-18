import axios from 'axios';
const URL = 'https://8d4871dae7b3b0735f6506b516023f89.serveo.net'
const axiosClient = axios.create({
    baseURL: 'http://10.0.2.2:8000/',
    //baseURL: 'https://1e0c4f902497ad4f231621f2b110957e.serveo.net',
    headers: {
        'Cache-Control': 'no-cache',
        Pragma: 'no-cache',
        Expires: 0,
        Accept: 'application/json',
        'Content-Type': 'application/json',    
    },
});

export default axiosClient;

