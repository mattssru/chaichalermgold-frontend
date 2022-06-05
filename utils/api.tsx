import { getToken } from "./helper";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/server",
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

export const fetchProduct = async () => await server.get("product/fetch");

export const createProduct = async (values: any) =>
  await server.post("product/create");

export const uploadImage = async (imageFile: any) => {
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

export const deleteProduct = async (item: any) => {
  const product = await server.get("product/fetch");
  console.log("item", product, item);
  return product.filter((p: any) => p.id !== item.id);
};

export const fetchContent = async () => await server.get("contents/fetch");
export const getContent = async (id: any) => {
  const contents = await server.get("contents/fetch");
  return contents.find((content: any) => content.slug === id);
};