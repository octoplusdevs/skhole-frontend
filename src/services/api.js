import axios from "axios";
import { store } from "../redux";
import { getAuthToken, setAuthToken,removeAuthToken } from "../utils/auth";
import Cookies from "js-cookie";
import { logoutUser } from "../redux/auth/auth.actions";

const BASE_URL = [
  "https://skhole.onrender.com/api/v1",
  "http://localhost:3001/api/v1"
]


// Variavel para informar se está acontecendo uma requisição de refresh token
let isRefreshing = false;
// Variavel para armazenar a fila de requisições que falharam por token expirado
let failedRequestQueue = [];

// Cria as configurações iniciais do Axios
const API = axios.create({
  baseURL: BASE_URL[0],
  headers: {
    Authorization: `Bearer ${getAuthToken().accessToken}`,
  },
});

// Cria um interceptor para interceptar todas as requisições que forem feitas
API.interceptors.response.use(
  (response) => {
    // Se a requisição der sucesso, retorna a resposta
    return response;
  },
  (error) => {
    // Se a requisição der erro, verifica se o erro é de autenticação
    if (error.response.status === 401) {
      // Se o erro for de autenticação, verifica se o erro foi de token expirado
      if (error.response.data?.code === "token.expired") {
        // Recupera o refresh token do localStorage
        const refreshToken = getAuthToken().refreshToken;
        // Recupera toda a requisição que estava sendo feita e deu erro para ser refeita após o refresh token
        const originalConfig = error.config;

        // Verifica se já existe uma request de refreshToken acontecendo
        if (!isRefreshing) {
          // Se não existir, inicia a requisição de refreshToken
          isRefreshing = true;

          // Faz uma requisição de refreshToken
          API.post("/refresh-token", {
            refreshToken,
          })
            .then((response) => {
              // Recupera os dados do response e cria o newRefreshToken por que já está sendo utilizado a variável refreshToken
              const { accessToken } = response.data;

              // Salva o token nos cookies
              Cookies.set("skhole.token", accessToken)
              // Salva o refreshToken nos cookies
              // Cookies.set("skhole.refresh", newRefreshToken)
              // Define novamente o header de autorização nas requisições
              API.defaults.headers["Authorization"] = `Bearer ${token}`;

              // Faz todas as requisições que estavam na fila e falharam
              failedRequestQueue.forEach((request) => request.onSuccess(token));
              // Limpa a fila de requisições que falharam
              failedRequestQueue = [];
            })
            .catch((err) => {
              // Retorna os erros que estão salvos na fila de requisições que falharam
              failedRequestQueue.forEach((request) => request.onFailure(err));
              // Limpa a fila de requisições que falharam
              failedRequestQueue = [];

              // Caso der erro desloga o usuário
              store.dispatch(logoutUser())
            })
            .finally(() => {
              // Indica que a requisição de refreshToken acabou
              isRefreshing = false;
            });
        }

        // Usando a Promise no lugar do async await, para que a requisição seja feita após o refresh token
        return new Promise((resolve, reject) => {
          // Adiciona a requisição na fila de requisições que falharam com as informações necessárias para refazer a requisição novamente
          failedRequestQueue.push({
            // Se a requisição der sucesso, chama o onSuccess
            onSuccess: (token) => {
              // Adiciona o novo token gerado no refresh token no header de autorização
              originalConfig.headers["Authorization"] = `Bearer ${token}`;

              // Faz a requisição novamente passando as informações originais da requisição que falhou
              resolve(API(originalConfig));
            },
            // Se a requisição der erro, chama o onFailure
            onFailure: (err) => {
              // Se não for possivel refazer a requisição, retorna o erro
              reject(err);
            },
          });
        });
      } else {
        // Caso der erro desloga o usuário
        store.dispatch(logoutUser())
      }
    }

    // Se não cair em nenhum if retorna um error padrão
    return Promise.reject(error);
  },
);

export { API };
