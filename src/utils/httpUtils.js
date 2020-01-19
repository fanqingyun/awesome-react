import axios from 'axios'
// 全局默认(这样子设置传参可以不是json)
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.get['Content-Type'] = 'application/json'
// 添加请求拦截器
axios.interceptors.request.use(
  config => {
    // 对响应数据做点什么
    // 暂时这么设置
    config.headers['Authorization'] = sessionStorage.getItem('token')
    // console.log(config)
    return config;
  },
  error => {
    // 对响应错误做点什么
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(
  response => {
    // 对响应数据做点什么
    // console.log(response)
    return response;
  },
  error => {
    // 对响应错误做点什么
    return Promise.reject(error);
  });
export default {
  get: (url, params, successHandle, errorHandle) => {
    axios.get(url, params)
      .then(successHandle)
      .catch(errorHandle)
  },
  post: (url, params, successHandle, errorHandle) => {
    axios.post(url, params)
      .then(successHandle)
      .catch(errorHandle)
  },
  all: (methodArr, callback) => {
    axios.all(methodArr)
      .then(axios.spread(callback));
  }
}
