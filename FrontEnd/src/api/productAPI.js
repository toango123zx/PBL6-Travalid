import axiosClient from './axiosClient';
const productAPI = {
  getAllProduct: () => axiosClient.get('product'),
};

export default productAPI;
