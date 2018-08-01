import axios from 'axios'
import promise from 'es6-promise'
import apiPath from './path.js';
promise.polyfill()


/**
 * @param {请求地址} url 
 * @param {请求参数} data 
 * @param {Post/Get 默认post} method 
 * @param {进度回调} progressCallback 
 */

//axios默认不发送cookie
axios.defaults.withCredentials = false; //设置为true是带cookie请求
axios.defaults.headers.common['Content-Type'] = 'application/json, text/plain'; //设置默认请求头
const http = (url, data = {}, method = "GET", progressCallback) => {
  return new Promise((resolve, reject) => {
    axios({
      method: method,
      url: url,
      params: data,
      data: data,
      responseType: 'json',
    }).then(function (response) {
      resolve(response.data)
      console.log(response.data)
    }).catch(function (error) {
      reject()
      console.log(error)
    })
  })
}


export {
  http,
  apiPath,
  axios
}
