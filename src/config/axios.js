import axios from "axios";
const dev = "http://localhost:8000/"
const prod = "https://api.smartmetatec.com/"
export default axios.create({
    baseURL: prod,
    // headers: {"Access-Control-Allow-Origin": "https://account.smartmetatec.com"},
    withCredentials: true
})