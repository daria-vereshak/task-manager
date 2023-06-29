import axios from "axios";

axios.interceptors.request.use((req)=>{
  if (localStorage.getItem('access_token')) {
    const token = localStorage.getItem('access_token');
    req.headers['Authorization'] = `Bearer ${token}`;
  }
  return req;
})