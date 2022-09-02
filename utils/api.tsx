import axios from "axios";

const WPApi = axios.create({
  baseURL: "http://165.22.96.125:8000/wp-json/chaicharlerm/v1",
  timeout: 5000,
});

export const getGoldPrice = async () => {
  return await axios
    .get("https://thai-gold-api.herokuapp.com/latest")
    .then((res) => res.data);
};

export const fetchProduct = async () => {
  return await WPApi.get("/products").then((res) => {
    return res.data;
  });
};

export const getProduct = async (id: any) => {
  return await WPApi.get(`/products/${id}`).then((res) => {
    return res.data;
  });
};

export const getCategories = async () => {
  return await WPApi.get(`/products/categories`).then((res) => {
    return res.data;
  });
};

export const fetchPromotions = async () => {
  return await WPApi.get(`/promotions`).then((res) => {
    return res.data;
  });
};

export const fetchContent = async () => {
  return await WPApi.get(`/contents`).then((res) => {
    return res.data;
  });
};

export const getPost = async (id: any) => {
  return await WPApi.get(`/posts/${id}`).then((res) => {
    return res.data;
  });
};
