import  axiosInstance  from './axios.js'

const signUp = (data) => {
  return axiosInstance.post("/signup", data)
}

const login = (data) => {
  return axiosInstance.post("/login", data)
}

const logout = () => {
  return axiosInstance.delete("/logout")
}

export {
  signUp,
  login,
  logout
}