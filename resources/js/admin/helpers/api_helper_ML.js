import axios from "axios"

//apply base url for axios
const API_URL_ML = "https://yrbl6a35qg.execute-api.us-east-2.amazonaws.com/dev"

const axiosApi = axios.create({
  baseURL: API_URL,
})

axiosApi.interceptors.response.use(
  response => response,
  error => Promise.reject(error)
)

export async function get(url, config = {}) {
  return await axiosApi.get(url, { ...config }).then(response => response.data)
}

export async function post(url, data, config = {}) {
  return await axiosApi.post(url, { ...data }, { ...config }).then(response => {
    return response.data
  })
}

export async function put(url, data, config = {}) {
  return axiosApi
    .put(url, { ...data }, { ...config })
    .then(response => response.data)
}

export async function del(url, config = {}) {
  return await axiosApi
    .delete(url, { ...config })
    .then(response => response.data)
}
