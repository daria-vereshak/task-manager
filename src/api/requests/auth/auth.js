import axiosConfig from '../../axios.config';

class AuthRequests {
  authorization(login, password) {
    return axiosConfig.post('auth/signin',{login, password})
  }
  registration(login, password) {
    return axiosConfig.post('auth/signup',{login, password})
  }
  refreshToken(refreshToken) {
    return axiosConfig.post('refresh',{refreshToken})
  }
}

export default new AuthRequests();