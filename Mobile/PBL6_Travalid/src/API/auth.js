const { default: axiosClient } = require(".");

const authApi = {
    login: (params) => axiosClient.post('sign-in',params)
}
export default authApi