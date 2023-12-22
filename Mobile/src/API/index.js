import axios from 'axios';
const URL = 'https://800d2a7da47155f2fc4c50e42931d52d.serveo.net/'
const axiosClient = axios.create({
    baseURL: 'http://10.0.2.2:8000/',
    // baseURL: 'https://800d2a7da47155f2fc4c50e42931d52d.serveo.net/',
    headers: {
        'Cache-Control': 'no-cache',
        Pragma: 'no-cache',
        Expires: 0,
        Accept: 'application/json',
        'Content-Type': 'application/json',    
    },
});

export default axiosClient;

