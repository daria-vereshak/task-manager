import axios from "axios";
import configServer from './server.config.json';

export const axiosConfig= axios.create({
  baseURL:configServer.serviceURL,
  headers:{
      "Content-Type":"application/json"
  }
})
axiosConfig.interceptors.request.use((req)=>{
  if (localStorage.getItem('access_token')){
      const token = localStorage.getItem('access_token')
      req.headers['Authorization']=`Bearer ${JSON.parse(token||'')}`
      return req
  }
  return req
})