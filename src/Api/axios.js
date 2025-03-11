import axios from "axios";


const axiosInstance = axios.create({
  //local instance of firebase functions
  // baseURL: "http://127.0.0.1:5001/clone-2c6a8/us-central1/api",
  
  //deployed version of firebase function
  baseURL: "https://api-fxatoytyya-uc.a.run.app",

  //deployed version of amazon server on render.com
  // baseURL: "https://amazon-api-deploy-xvdr.onrender.com/",
});


export {axiosInstance}