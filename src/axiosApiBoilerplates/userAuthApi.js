import axios from "axios";

const createUserAuthApi = (endpoint, token) => {
  return axios.create({
    baseURL: `http://localhost:3000/user/${endpoint}`,
    headers: {
      "Content-Type": "Application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export default createUserAuthApi;
