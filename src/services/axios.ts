import axios from 'axios'

const URL = 'http://localhost:3000/api/'

const token = localStorage.getItem('@react-todo:token')

const instance = axios.create({
  baseURL: URL,
  headers: token ? {
    Authorization: `Bearer ${token}`
  } : undefined
})

export default instance