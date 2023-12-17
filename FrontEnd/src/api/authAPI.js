import axiosClient from './axiosClient';

const authAPI = {
  login: (params) => axiosClient.post('sign-in', params),
  register: (params) => axiosClient.post('register/', params),
  me: () => axiosClient.post('decode-jwt'),
  getInformationByToken: (token) => axiosClient.post('me/', token),
};

export default authAPI;
