import axios from 'axios';
const axiosClient = axios.create({
    baseURL: 'https://sendbulker.com/',
    headers: {
        'Cache-Control': 'no-cache',
        Pragma: 'no-cache',
        Expires: 0,
        Accept: 'application/json',
        'Content-Type': 'application/json',
        
    },
});

export default axiosClient;