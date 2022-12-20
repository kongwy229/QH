import axios from 'axios'
const baseUrl = 'http://150.158.166.87:8000/api/'
export const baseImgUrl = 'http://150.158.166.87:8000'

axios.interceptors.request.use(function (config) {
  return config
}, function (err) {
  return Promise.reject(err)
})

axios.interceptors.response.use(reply => {
  if (reply === undefined) {
    return {}
  } else {
    return reply.data
  }
})

// 获取首页数据
export const getHomePage = async (params) => {
  return await axios.get(`${baseUrl}web/homepage`, { withCredentials: true, params: params })
}

// 获取研究院概括数据
export const getOverview = async (params) => {
  return await axios.get(`${baseUrl}web/institute/overview`, { withCredentials: true, params: params })
}

// 获取研究院概括发展历程
export const getDevelop = async (params) => {
  return await axios.get(`${baseUrl}web/institute/history`, { withCredentials: true, params: params })
}

// 获取研究院人员列表
export const getPeopleList = async (params) => {
  return await axios.get(`${baseUrl}web/expert`, { withCredentials: true, params: params })
}

// 获取研究院人员详情
export const getPeopleDetail = async (params) => {
  return await axios.get(`${baseUrl}web/expert?id=${params}`, { withCredentials: true })
}

// 获取新闻列表
export const getNewsList = async (params) => {
  return await axios.get(`${baseUrl}web/news`, { withCredentials: true, params: params })
}

// 提交联系方式
export const postContact = async (data) => {
  return await axios.post(`${baseUrl}web/addContact`, { withCredentials: true, data })
}

// 获取公告数据
export const getMessage = async (params) => {
  return await axios.get(`${baseUrl}web/notice`, { withCredentials: true, params: params })
}
