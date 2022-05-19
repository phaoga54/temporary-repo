import axios from 'axios'
import qs from 'qs'
const AxiosInstance = axios.create({
    baseURL: 'https://sandbox.101digital.io',
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    }
})

export const fetchAccessToken = async () => {
    try {
        const data = qs.stringify({
            'client_id': 'oO8BMTesSg9Vl3_jAyKpbOd2fIEa',
            'client_secret': '0Exp4dwqmpON_ezyhfm0o_Xkowka',
            'grant_type': 'password',
            'scope': 'openid',
            'username': 'dung+octopus4@101digital.io',
            'password': 'Abc@123456'
        });
        const config = {
            method: "post",
            url: "/token",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            data
        }
        let res = await AxiosInstance.request(config)
        return res.data
        console.log('response: ',res);
    } catch (error) {
        // console.log(error);
    }
}
export const fetchUserInfo = async (token) => {
    try { 
        const config = {
            method: "get",
            url: "/membership-service/1.2.0/users/me",
            headers: { "Authorization": `Bearer ${token}`}, 
        }
        let res = await AxiosInstance.request(config)
        console.log('response fetchUserInfo: ',res);
        return res.data
    } catch (error) {
        console.log(error);
    }
}
export const fetchInvoices = async (token,access_token) => {
    try { 
        const config = {
            method: "get",
            url: "/invoice-service/1.0.0/invoices?pageNum=1&pageSize=10&dateType=INVOICE_DATE&sortBy=CREATED_DATE&ordering=ASCENDING",
            headers: {
                "Authorization": `Bearer ${token}`,
                "org-token": access_token
            },
        }
        let res = await AxiosInstance.request(config)
        console.log('response fetchInvoices: ',res);
        return res.data
    } catch (error) {
        console.log('response fetchInvoices:',error);
    }
}