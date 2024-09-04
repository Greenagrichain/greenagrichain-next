"use client";
import React, { useState } from "react";

import LoginForm from "./LoginForm";

import { useRouter } from "next/navigation";

import useAuthContext from "@/lib/hooks/useAuthContext";
import axiosInstance from "@/lib/axiosInstance";
import UserFoundCard from "./UserFoundCard";
import AdminFoundCard from "./AdminFoundCard";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const router = useRouter();
  const authContext = useAuthContext();

  async function handleFormSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axiosInstance.post("/api/auth/login", formData);

      localStorage.setItem("_greenagrichain", JSON.stringify(response.data));
      authContext.dispatch({ type: "LOGIN", payload: response.data });
      defineSuccess(response.data.message + ". Redirecting to dashboard...");

      if (response.data.user.role === "ADMIN") {
        setIsAdmin(true);
      } else {
        router.push("/dashboard");
      }
    } catch (error) {
      defineError(error.response ? error.response.data.message : error.message);
      console.log(error);
    }

    setIsLoading(false);
  }

  function defineError(msg) {
    setError(msg);
    setTimeout(() => setError(""), 3000);
  }
  function defineSuccess(msg) {
    setSuccess(msg);
    setTimeout(() => setSuccess(""), 5000);
  }

  if (authContext.authData?.userFound) {
    return (
      <>
        {authContext.authData.user.role === "ADMIN" ? (
          <AdminFoundCard authContext={authContext} />
        ) : (
          <UserFoundCard authContext={authContext} />
        )}
      </>
    );
  }

  if (isAdmin) {
    return <AdminFoundCard authContext={authContext} />;
  }

  return (
    <div>
      <LoginForm
        handleFormSubmit={handleFormSubmit}
        formData={formData}
        setFormData={setFormData}
        waiting={isLoading}
        success={success}
        error={error}
      />
    </div>
  );
}
