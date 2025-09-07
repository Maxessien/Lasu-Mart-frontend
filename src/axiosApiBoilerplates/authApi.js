import axios from "axios";

const authApi = (token) => {
  return axios.create({
    baseURL: `http://localhost:3000/${token.role}`,
    headers: {
      "Content-Type": "Application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export { authApi };
