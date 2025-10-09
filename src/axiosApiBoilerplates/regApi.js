import axios from "axios";

const regApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
});

const productsApi = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BACKEND_URL}/products`,
})

export { regApi, productsApi };
