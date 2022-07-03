// import fs from "fs";
import Router from "next/router";

export const AUTHENTICATION_TOKEN = "authenticationToken";

export const getToken = () => {
  return localStorage.getItem(AUTHENTICATION_TOKEN);
};

export const setToken = (token: any) => {
  localStorage.setItem(AUTHENTICATION_TOKEN, token);
};

export const clearToken = () => {
  localStorage.removeItem(AUTHENTICATION_TOKEN);
};

export const PageReload = () => {
  Router.replace(Router.asPath);
};

export const currencyFormat = (num: any) => {
  return parseFloat(num)
    .toFixed(2)
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};

// export const readJsonFile = (pathFile) => {
//   const jsonString = fs.readFileSync(pathFile);
//   return Json.parse(jsonString);
// };

// export const writeJsonFile = (pathFile, newData) => {
//   fs.writeFile(pathFile, JSON.stringify(newData), (err) => {
//     if (err) {
//       console.log("Error writing file:", err);
//       return err;
//     } else {
//       console.log("Error writing file:", err);
//       return false;
//     }
//   });
// };
