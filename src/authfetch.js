import axios from "axios";

const authFetch = axios.create({
  baseURL: "http://127.0.0.1:5001/api"
});

let token = JSON.parse(localStorage.getItem("token"))?.token;

authFetch.interceptors.request.use(
  (request) => {
    request.headers["Accept"] = "application/json";
    request.headers["authorization"] = token;
    console.log(request);
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

authFetch.interceptors.response.use(
  (response) => {
    console.log(response);
    return response;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

export default authFetch;
