import axiosClient from './axiosClient';
const productAPI = {
  getAllProduct: () => axiosClient.get('product'),
  getProductDetail: (id) => axiosClient.get(`product/${id}`),
  getSupplierManageProduct: () => axiosClient.get(`product/supplier/products`),
};

export default productAPI;
