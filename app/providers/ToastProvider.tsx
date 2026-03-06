/**
 * ToastProvider — client component rendering the react-toastify container.
 *
 * Positioned top-right with a 3-second auto-close. Import this once in the
 * root layout — then use `toast.success()` / `toast.error()` anywhere.
 */
"use client";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ToastProvider() {
  return <ToastContainer position="top-right" autoClose={3000} />;
}
