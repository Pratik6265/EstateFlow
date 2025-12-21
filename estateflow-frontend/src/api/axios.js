import axios from 'axios'

export default axiosInstance = () => {
  return axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    timeout: 15000,
    headers: { "Content-Type":  "application/json" }
  })
}

axiosInstance.interceptors.request.use((config) => {
  token = localStorage.getItem('accessToken');

  if(token) config.headers.Authorization = `Bearer ${token}`;

  return config;
},
(error) => {
  return Promise.reject(error);
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const {response} = error;
    if(!response){
      console.warn("Network error");
      return Promise.reject({
        message: "Network error. Please try again.",
      });
    }
  }
)