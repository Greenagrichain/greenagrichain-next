"use client";
import React, { useState } from "react";

import LoginForm from "./LoginForm";

import { useRouter } from "next/navigation";

import { toast } from "sonner";
import axiosInstance from "@/lib/axiosInstance";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const router = useRouter();

  async function handleFormSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axiosInstance.post("/api/auth/login", formData);

      defineSuccess(response.data.message);
      toast.success(response.data.message);

      if (response.data.message.toLowerCase().includes("otp")) {
        router.push("verify-otp?email=" + formData.email);
      }
    } catch (error) {
      defineError(error.response ? error.response.data.message : error.message);
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

  // if (authContext.authData?.userFound) {
  //   return (
  //     <>
  //       {authContext.authData.user.role === "ADMIN" ? (
  //         <AdminFoundCard authContext={authContext} />
  //       ) : (
  //         <UserFoundCard authContext={authContext} />
  //       )}
  //     </>
  //   );
  // }

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
