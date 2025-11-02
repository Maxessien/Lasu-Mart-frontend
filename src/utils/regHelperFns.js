import { authApi } from "../axiosApiBoilerplates/authApi";
import { io } from "socket.io-client"

const formatFormData = (data) => {
  const formData = new FormData();
  for (let key in data) {
    if (key !== "images") formData.append(key, data[key]);
  }
  for (const image of data.images) formData.append("images", image);
  return formData;
};

const addToCart = async (token, userId, productId) => {
  try {
    const res = await authApi(token).post(`user/${userId}/cart`, {
      productId: productId,
      quantity: 1,
    });
    console.log(res.data);
    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const initSocket = (nameSpace, token)=> io(`${process.env.NEXT_BACKEND_URL}${nameSpace}`, {auth: token})

export { formatFormData, addToCart, initSocket };
