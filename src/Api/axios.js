import axios from "axios";

const axiosInstance = axios.create({
// local instance of firebase instance
    // baseURL:"http://127.0.0.1:5001/clone-acedc/us-central1/api"
 // deployed version of firebase function
    baseURL:"https://api-5fub7s42ka-uc.a.run.app",
// deployed version of amazon server on render.com
// baseURL:"https://api-5fub7s42ka-uc.a.run.app/",
})

export {axiosInstance}