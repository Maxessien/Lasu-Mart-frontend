import axios from "axios";
// import { auth } from "../../firebase/fb_config";

const authApi = (token) => {
  return axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_BACKEND_URL}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export { authApi };
