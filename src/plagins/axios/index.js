import axios from "axios";

console.log(process.env.VUE_APP_LOCAL_SERVER_URL);


const instance = axios.create({
   baseURL: 'http://localhost:3000',
})
export default instance;