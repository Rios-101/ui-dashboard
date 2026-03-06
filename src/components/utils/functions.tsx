/**
 * APICall — wraps any endpoint function with toast notifications.
 *
 * Usage:
 *   import { getProfile } from "./endpoints";
 *   const data = await APICall(getProfile);
 *
 * With arguments:
 *   import { createProduct } from "./endpoints";
 *   const data = await APICall(createProduct, [productData]);
 *
 * Without toast:
 *   const data = await APICall(getProfile, [], false);
 */
import { toast } from "react-toastify";
import { AxiosError, type AxiosResponse } from "axios";

export async function APICall<T>(
  fn: (...args: never[]) => Promise<AxiosResponse<T>>,
  args: unknown[] = [],
  showToast = true
): Promise<T> {
  try {
    const response = await fn(...(args as never[]));

    if (showToast) {
      const message =
        (response.data as Record<string, unknown>)?.message ?? "Success";
      toast.success(String(message));
    }

    return response.data;
  } catch (error: unknown) {
    if (showToast) {
      let message = "Something went wrong";

      if (error instanceof AxiosError) {
        const data = error.response?.data as Record<string, unknown> | undefined;
        if (data?.message) {
          message = Array.isArray(data.message)
            ? (data.message as string[]).join(", ")
            : String(data.message);
        }
      }

      toast.error(message);
    }

    throw error;
  }
}
