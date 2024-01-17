import axios from 'axios'

const URL = 'http://localhost:3000/api/'


const req = axios.create({
  baseURL: URL
})

console.log(localStorage.getItem('@react-todo:token'))

const authReq = () => axios.create({
  baseURL: URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('@react-todo:token')}`
  }
})

export default { authReq, req }
