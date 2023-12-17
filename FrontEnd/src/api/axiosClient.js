import axios from 'axios';
const axiosClient = axios.create({
  //baseURL: 'https://21cc5c37629bcdc8cac694eef7cce288.serveo.net',
  // baseURL: 'https://sendbulker.com/',
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptors
// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const token = localStorage.getItem('TRAVALID_TOKEN');
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token;
    }

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.response?.status === 401) {
      // clear token ...
      localStorage.removeItem('TRAVALID_TOKEN');
    }

    return Promise.reject(error);
  },
);
export default axiosClient;
