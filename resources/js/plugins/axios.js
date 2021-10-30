import axios from 'axios'
import store from '../store'

axios.interceptors.request.use(request => {
  return request
})

window.axios = axios;

export default axios;
