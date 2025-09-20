import axios from "axios";

const regApi = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

const productsApi = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}products`,
})

export { regApi, productsApi };
