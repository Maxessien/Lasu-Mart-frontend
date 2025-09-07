import axios from "axios";

const regApi = axios.create({
  baseURL: "http://localhost:3000",
});

const productsApi = axios.create({
  baseURL: "http://localhost:3000/products",
})

export { regApi, productsApi };
