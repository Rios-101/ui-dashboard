/**
 * Axios instance with cookie-based auth interceptors.
 *
 * - REQUEST interceptor: reads the `accessToken` cookie and attaches it as
 *   a Bearer token on every outgoing request.
 * - RESPONSE interceptor: on a 401 response, deletes the cookie and redirects
 *   the user to `/login`.
 */
import axios from "axios";
import { getCookie, deleteCookie } from "cookies-next/client";

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use((config) => {
  const token = getCookie("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      deleteCookie("accessToken");
      if (typeof window !== "undefined") {
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
