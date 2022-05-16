import axios from "axios";
import { getToken } from "./helper";

const api = axios.create({
  baseURL: "http://localhost:3000/server",
  timeout: 1000,
});

const makeApi =
  (methodName) =>
  async (path, ...args) => {
    return await api[methodName](`/${path}`, ...args).then((res) => res.data);
  };

const server = {
  get: makeApi("get"),
  post: makeApi("post"),
  put: makeApi("put"),
  delete: makeApi("delete"),
};
``;
export const login = async ({ username, password }) => {
  await axios.post("login", { username, password });
};

export const fetchProduct = async () => await server.get("product/fetch");

export const createProduct = async () => await server.post("product/create");

export const uploadImage = async (imageFile) => {
  await server.post("product/upload-image", imageFile, {
    headers: {
      "content-type": "multipart/form-data",
    },
  });
};

export const getGoldPrice = async () => {
  return await axios
    .get("https://thai-gold-api.herokuapp.com/latest")
    .then((res) => res.data);
};

export const deleteProduct = async (item) => {
  const product = await server.get("product/fetch");
  console.log("item", product, item);
  return product.filter((p) => p.id !== item.id);
};
