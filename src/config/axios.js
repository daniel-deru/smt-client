import axios from "axios";

const urlRegex = /^https:\/\/account\.smartmetatec\.com\//
const url = urlRegex.test(window.location.href) ? "https://api.smartmetatec.com/" : "http://localhost:8000/"

export default axios.create({
    baseURL: url,
    withCredentials: true
})