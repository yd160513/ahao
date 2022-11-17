import axios from 'axios'
import type { AxiosRequestConfig } from 'axios'
import Qs from "qs";

export const createAxios = (axiosConfig: AxiosRequestConfig): ApiPromise => {
  let headers = {
    'Content-Type': 'application/json'
  }
  if (axiosConfig.headers) {
    headers = {
      ...headers,
      ...axiosConfig.headers
    }
  }
  const Axios = axios.create({
    baseURL: 'http://127.0.0.1:8888',
    timeout: 1000 * 10,
    headers,
    transformRequest: (data, headers) => {
      const contentType = headers['Content-Type'];
      if (contentType === "application/x-www-form-urlencoded") return Qs.stringify(data);
      return data;
    }
  })

  // 请求拦截
  Axios.interceptors.request.use((config) => {
    console.log(config);
    if (config.headers) {
      // config.headers.token = ''
    }
    return config
  }, (error) => {
    return Promise.reject(error)
  })

  // 响应拦截
  Axios.interceptors.response.use((response) => {
    return response.data
  }, (error) => {
    return Promise.reject(error)
  })

  return Axios(axiosConfig)
}
