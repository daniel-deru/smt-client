import axios from "axios";

export default axios.create({
    baseURL: "https://api.smartmetatec.com/",
    headers: {"Access-Control-Allow-Origin": "https://account.smartmetatec.com"},
    withCredentials: true
})