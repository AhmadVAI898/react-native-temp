import axios from "axios";
import * as SecureStore from "expo-secure-store";

export function generateApiClient({
  baseUrl = "",
  timeout = 5000,
  authorizationHeader = "Authorization",
  authorizationPrefix = "Bearer ",
  tokenKey = "token",
  acceptLanguage = "en-en",
}) {
  const apiClient = axios.create({
    baseURL: baseUrl,
    timeout: timeout,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Accept-Language": acceptLanguage,
    },
  });

  apiClient.interceptors.request.use(
    function (config) {
      config.headers = config.headers || {};
      const token = SecureStore.getItemAsync(tokenKey);
      if (token) {
        config.headers[authorizationHeader] = `${authorizationPrefix}${token}`;
      }
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  apiClient.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  return apiClient;
}
