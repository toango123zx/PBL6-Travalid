const { default: axiosClient } = require(".");

const authApi = {
    login: (params) => axiosClient.post('sign-in',params),
    signup: (params) => axiosClient.post('sign-up/traveller', params),
    getAllDiscount: () => axiosClient.get('discount/all'),
    getProduct:(page) => axiosClient.get('product?page='+page),
    getDetailProduct: (id) => axiosClient.get('product/'+ id),
    getProfileUser: (headers) => axiosClient.get('user/me', {headers}),
    getProductBySupplier: (page, headers) => axiosClient.get('product/supplier?page='+page, {headers}),
    getPurchaseBill: (page,headers) => axiosClient.get('bill/purchase?page='+page, {headers}),
    getSellBill: (headers) => axiosClient.get('bill/sell', {headers}),
    getDetailBill: (id,headers) => axiosClient.get('bill/'+ id, {headers}),
    getDiscountSupplier: (headers) => axiosClient.get('discount',{headers}),
    getDiscountTraveller: (page) => axiosClient.get('discount/all?page='+page),
    getScheduleSupplier: (page, headers) => axiosClient.get('schedule_product?page='+page, {headers}),
    createSchedule: (id_product, headers, params) => axiosClient.post('schedule_product/'+id_product, params, {headers}),
    getDiscountByProduct: (id_product, headers) => axiosClient.get('discount/product/'+id_product, {headers})
}
export default authApi