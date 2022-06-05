"use strict";
// import fs from "fs";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearToken = exports.setToken = exports.getToken = exports.AUTHENTICATION_TOKEN = void 0;
exports.AUTHENTICATION_TOKEN = "authenticationToken";
var getToken = function () {
    return localStorage.getItem(exports.AUTHENTICATION_TOKEN);
};
exports.getToken = getToken;
var setToken = function (token) {
    localStorage.setItem(exports.AUTHENTICATION_TOKEN, token);
};
exports.setToken = setToken;
var clearToken = function () {
    localStorage.removeItem(exports.AUTHENTICATION_TOKEN);
};
exports.clearToken = clearToken;
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
