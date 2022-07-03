import { getToken } from "./helper";
import axios from "axios";
import datajson from "../server/database/db.json";
import bodyParser from "body-parser";
const data = datajson || [];

const api = axios.create({
  baseURL: "http://localhost:3000/server",
  timeout: 1000,
});

const WPApi = axios.create({
  baseURL: "http://165.22.96.125:8000/wp-json/chaicharlerm/v1",
  timeout: 1000,
});

const makeApi =
  (methodName: string) =>
  async (path: any, ...args: any) => {
    //@ts-ignore
    return await api[methodName](`/${path}`, ...args).then(
      (res: any) => res.data
    );
  };

const server = {
  get: makeApi("get"),
  post: makeApi("post"),
  put: makeApi("put"),
  delete: makeApi("delete"),
};
``;
// export const login = async ({ username, password }) => {
//   await axios.post("login", { username, password });
// };
export const getGoldPrice = async () => {
  return await axios
    .get("https://thai-gold-api.herokuapp.com/latest")
    .then((res) => res.data);
};

// const decodeToString = (object: any) => {
//   object.forEach((element: any) => {
//     console.log("element", decodeURI(element.slug));
//   });

//   // if (object instanceof Object) {

//   // }
//   return object;
// };

export const fetchProductV2 = async () => {
  return await WPApi.get("/products").then((res) => {
    return res.data;
  });
};

export const getProductV2 = async (id: any) => {
  return await WPApi.get(`/products/${id}`).then((res) => {
    return res.data;
  });
};

export const fetchProduct = async () => await server.get("product/fetch");
// export const fetchProduct = async () => {
//   return data?.filter((p: any) => p.type === "product");
// };

export const getProduct = async (id: any) => {
  const products = await server.get("product/fetch");
  return products.find((product: any) => product.id === parseInt(id));
};
export const createProduct = async (values: any) =>
  await server.post("product/create");
export const uploadImage = async (imageFile: any) => {
  await server.post("product/upload-image", imageFile, {
    headers: {
      "content-type": "multipart/form-data",
    },
  });
};

export const deleteProduct = async (item: any) => {
  const product = await server.get("product/fetch");
  return product.filter((p: any) => p.id !== item.id);
};

export const fetchContent = async () => await server.get("contents/fetch");
// export const fetchContent = async () => {
//   return data?.filter((p: any) => p.type === "content");
// };
export const getContent = async (id: any) => {
  const contents = await server.get("contents/fetch");
  return contents.find((content: any) => content.slug === id);
};
