import axios from "axios";
// import { auth } from "../../firebase/fb_config";

const authApi = (token) => {
  return axios.create({
    baseURL: `http://localhost:3000/`,
    headers: {
      "Content-Type": "Application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export { authApi };
