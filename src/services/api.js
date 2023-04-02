import axios from "axios";
import { store } from "../redux";

const API = axios.create({
  baseURL: "https://skhole.onrender.com/api/v1", // altere de acordo com sua configuração
});

API.interceptors.request.use(
  (config) => {
    const { auth } = store.getState(); // obter o estado do Redux
    const token = auth?.user?.token; // obter o token do estado
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // adicionar o cabeçalho de autorização
    }

    return config;
  },
  (error) => Promise.reject(error),
);

export { API };
