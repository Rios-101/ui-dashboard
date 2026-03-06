/**
 * Login page — email/password authentication form.
 * Uses Formik + Yup for validation, APICall for submission,
 * and cookies-next to store the access token.
 */
"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next/client";
import { motion } from "framer-motion";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import { APICall } from "@/src/components/utils/functions";
import { loginUser } from "@/src/components/utils/endpoints";
import { useAppDispatch } from "@/app/store/store";
import { setUser } from "@/app/store/slices/authSlice";
import type { LoginResponse } from "@/src/types/user";

const loginSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const result = await APICall(loginUser, [values]) as LoginResponse;
        setCookie("accessToken", result.data.token, { maxAge: 60 * 60 * 24 * 7 });
        dispatch(setUser({ id: result.data.id, email: result.data.email }));
        router.push("/dashboard");
      } catch {
        // Error toast is handled by APICall
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md rounded-2xl bg-brand-surface p-8"
      >
        <div className="mb-8 text-center">
          <Image src="/logo.png" alt="ClarityNet" width={48} height={48} className="mx-auto mb-4" />
          <h1 className="text-3xl font-bold font-(family-name:--font-inter) brand-gradient-text">
            Welcome back
          </h1>
          <p className="mt-2 text-sm text-brand-muted">
            Sign in to your ClarityNet account
          </p>
        </div>

        <form onSubmit={formik.handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-brand-white">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              {...formik.getFieldProps("email")}
              className="w-full rounded-xl border border-brand-surface-light bg-brand-tertiary px-4 py-3 text-sm text-brand-white placeholder:text-brand-muted outline-none transition-colors focus:border-brand-primary"
            />
            {formik.touched.email && formik.errors.email && (
              <p className="mt-1 text-xs text-brand-secondary">{formik.errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="mb-1.5 block text-sm font-medium text-brand-white">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                {...formik.getFieldProps("password")}
                className="w-full rounded-xl border border-brand-surface-light bg-brand-tertiary px-4 py-3 pr-11 text-sm text-brand-white placeholder:text-brand-muted outline-none transition-colors focus:border-brand-primary"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-muted hover:text-brand-white transition-colors"
              >
                {showPassword ? <IoEyeOffOutline size={20} /> : <IoEyeOutline size={20} />}
              </button>
            </div>
            {formik.touched.password && formik.errors.password && (
              <p className="mt-1 text-xs text-brand-secondary">{formik.errors.password}</p>
            )}
          </div>

          {/* Forgot password link */}
          <div className="text-right">
            <Link href="/forgot-password" className="text-xs text-brand-primary hover:underline">
              Forgot password?
            </Link>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="brand-gradient w-full rounded-xl py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-50"
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-brand-muted">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-brand-primary hover:underline">
            Sign up
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
