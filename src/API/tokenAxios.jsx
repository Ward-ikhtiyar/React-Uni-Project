import axios from "axios";


 export const TokenAxios=axios.create({
    baseURL:'http://127.0.0.1:3000/',
headers:{
    'Content-Type':'application/json',
    'Authorization':`Bearer ${localStorage.getItem('token')}`
}
});
export default TokenAxios;