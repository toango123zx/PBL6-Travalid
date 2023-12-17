import axiosClient from './axiosClient';
const discountAPI = {
  getDiscountTraveller: () => axiosClient.get('discount/all'),
  getDiscountDetail: (id) => axiosClient.get(`discount/${id}`),
};

export default discountAPI;
