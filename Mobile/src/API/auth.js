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
    getSellBill: (page,headers) => axiosClient.get('bill/sell?page='+page, {headers}),
    getDetailBill: (id,headers) => axiosClient.get('bill/'+ id, {headers}),
    getDiscountSupplier: (headers) => axiosClient.get('discount',{headers}),
    getDiscountTraveller: (page) => axiosClient.get('discount/all?page='+page),
    getScheduleSupplier: (page, headers) => axiosClient.get('schedule_product?page='+page, {headers}),
    createSchedule: (id_product, headers, params) => axiosClient.post('schedule_product/'+id_product, params, {headers}),
    getDiscountByProduct: (params) => axiosClient.get('discount/product',params),
    createRate: (id_product, headers, params) => axiosClient.post('rate/'+id_product, params,{headers}),
    getRate: (id_product)=> axiosClient.get('rate/'+id_product),
    createBill: (params, headers) => axiosClient.post('bill', params, {headers}),
    addScheduleToCart: (params, headers) => axiosClient.post('cart', params,{headers}),
    viewCart: (headers) => axiosClient.get('cart', {headers}),
    deleteScheduleInCart: (id_cart, headers) => axiosClient.delete('cart/'+id_cart, {headers}),
    getLocation: () => axiosClient.get('location'),
    createProduct: (params,headers) => axiosClient.post('product',params,{headers}),
    deleteDiscount: (id_discount, headers) => axiosClient.delete('discount/'+id_discount, {headers}),
    deleteSchedule: (id_discount, headers) => axiosClient.delete('schedule_product/'+id_discount, {headers})
}
export default authApi