import axios from "axios";
// import { auth } from "../../firebase/fb_config";

const authApi = (token) => {
  return axios.create({
    baseURL: `${import.meta.env.VITE_BACKEND_URL}`,
    headers: {
      "Content-Type": "Application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export { authApi };
