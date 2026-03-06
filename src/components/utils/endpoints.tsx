/**
 * API endpoint functions — one function per endpoint.
 *
 * Uses the custom axios instance (with auth interceptors) instead of plain axios.
 * All functions return the axios promise directly.
 *
 * How to add a new endpoint:
 *   export const getProducts = async () => axios.get(`${API_URL}/products`);
 *   export const createProduct = async (data: ProductPayload) => axios.post(`${API_URL}/products`, data);
 */
import axios from "./axios.config";

export const API_URL = process.env.NEXT_PUBLIC_FRONT_URL;

/** Fetch the authenticated user's profile */
export const getProfile = async () => axios.get(`${API_URL}/users/me`);

/** Login with email and password */
export const loginUser = async (data: { email: string; password: string }) =>
  axios.post(`${API_URL}/user/login`, data);
