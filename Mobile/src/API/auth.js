const { default: axiosClient } = require(".");

const authApi = {
    login: (params) => axiosClient.post('sign-in',params),
    signup: (params) => axiosClient.post('sign-up/traveller', params),
    getAllDiscount: () => axiosClient.get('discount/all'),
    getProduct:() => axiosClient.get('product'),
    getDetailProduct: (id) => axiosClient.get('product/'+ id)

}
export default authApi