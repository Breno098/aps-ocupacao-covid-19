import axios from 'axios'
import store from '../store'

axios.interceptors.request.use(request => {
  const token = store.getters['auth/token'];

  if (token) {
    request.headers.common.Authorization = `Bearer ${token}`;
    request.headers.common['X-Requested-With'] = 'XMLHttpRequest';
  }

  return request
})

window.axios = axios;

export default axios;
