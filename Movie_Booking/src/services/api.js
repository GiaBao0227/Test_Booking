import axios from "axios";

const api = axios.create({
  baseURL: "https://movienew.cybersoft.edu.vn/api",
});

api.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    TokenCybersoft:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA3OCIsIkhldEhhblN0cmluZyI6IjIwLzA3LzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc1Mjk2OTYwMDAwMCIsIm5iZiI6MTcyNjA3NDAwMCwiZXhwIjoxNzUzMTE3MjAwfQ.Qh5EKISAVqlhbNkgh1gtzDLUv1TXC7WpqNdNpAS2274",
  };

  // const data = JSON.parse(localStorage.getItem("userInfo"));
  // console.log("data", JSON.parse(data));
  
//Lấy token từ local storage lên sau khi đăng nhập thành công
  const accessToken = JSON.parse(localStorage.getItem("userInfo"))?.accessToken;
 //Nếu accessToken côó tạo 
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

export default api;
