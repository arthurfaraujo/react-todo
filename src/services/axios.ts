import axios from 'axios'

const URL = 'http://localhost:3000/api/'

const token = localStorage.getItem('@react-todo:token')

const authReq = axios.create({
  baseURL: URL,
  headers: token ? {
    Authorization: `Bearer ${token}`
  } : undefined
})

const req = axios.create({
  baseURL: URL
})

export default {authReq, req}