"use client";
import axiosInstance from "@/lib/axiosInstance";
import RegisterForm from "./SignupForm";
import { useState } from "react";
import { flushSync } from "react-dom";

export default function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function handleFormSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (Object.values(formData).some((field) => field === "")) {
        throw Error("All fields are required");
      }
      if (formData.password.length < 6) {
        throw Error("Password must be longer than 6 characters");
      }

      if (formData.password !== formData.confirmPassword) {
        throw Error("Password does not match");
      }

      const response = await axiosInstance.post("/api/auth/register", {
        firstname: formData.firstName,
        lastname: formData.lastName,
        number: formData.phone,
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
      });

      defineSuccess("Check your email for verification link");
    } catch (error) {
      defineError(error.response ? error.response.data.message : error.message);
    }
    setIsLoading(false);
  }

  function defineError(msg) {
    setError(msg);
    setTimeout(() => setError(""), 2000);
  }
  function defineSuccess(msg) {
    setSuccess(msg);
    setTimeout(() => setSuccess(""), 2000);
  }

  return (
    <>
      <RegisterForm
        formData={formData}
        setFormData={setFormData}
        handleFormSubmit={handleFormSubmit}
        error={error}
        success={success}
        isLoading={isLoading}
      />
    </>
  );
}
