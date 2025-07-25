import axios from 'axios'
import { ElMessage } from 'element-plus'

const apiUrl = import.meta.env.VITE_API_BASE_URL
const httpMessages = {
  
  200: '请求成功',
  201: '资源创建成功',
  202: '请求已接受处理',
  204: '无内容返回',
  301: '资源已永久重定向',
  302: '资源已临时重定向',
  304: '资源未修改',
  400: '请求参数错误',
  401: '未授权，请重新登录',
  403: '拒绝访问，权限不足',
  404: '请求资源不存在',
  500: '服务器内部错误',
  501: '服务未实现',
  502: '网关错误',
  503: '服务不可用',
  504: '网关超时',
  505: 'HTTP版本不受支持'
}

const request = axios.create({
  baseURL: apiUrl,
  timeout: 1000
})

request.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

request.interceptors.response.use(
  function (response) {
    ElMessage({
      message: httpMessages[response.status],
      type: 'success',
      duration: 1000
    })
    return response
  },
  function (error) {
    showMassage(error.status)

    return Promise.reject(error)
  }
)

function showMassage(code) {
  ElMessage({
    message: httpMessages[code],
    type: 'error',
    duration: 1000,
    showClose: true
  })
}
export default request
