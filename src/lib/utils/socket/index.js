//utils to play with socket server

import axios from "redaxios";
const baseUrl = "https://fencedchat.herokuapp.com";
export const createRoom = (roomId, password = "") => {
  return axios.post(`${baseUrl}/createroom`, {
    roomId,
    password,
  });
};

export const validateRoom = (roomId, password) => {
  return axios.post(`${baseUrl}/validateroom`, {
    roomId,
    password,
  });
};
