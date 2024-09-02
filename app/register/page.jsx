"use client";
import RegisterForm from "./SignupForm";
import { useState } from "react";

export default function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [waiting, setWaiting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function handleFormSubmit(e) {
    e.preventDefault();

    if (formData.password.length < 6) {
      return defineError("Password must be longer than 6 characters");
    }

    if (formData.password !== formData.confirmPassword) {
      return defineError("Password does not match");
    }

    try {
      const res = await fetch(
        `${`https://greenagrichain-backend.onrender.com`}/api/auth/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstname: formData.firstName,
            lastname: formData.lastName,
            number: formData.phone,
            email: formData.email,
            password: formData.password,
            confirmPassword: formData.confirmPassword,
          }),
        }
      );

      const data = await res.json();
      if (!res.ok) throw Error(data.message || "A server error occured");

      defineSuccess("Check your email for verification link");
    } catch (err) {
      defineError(err.message || "An unkown error occurred");
    }
  }

  function defineError(msg) {
    setError(msg);
    setTimeout(() => setError(""), 5000);
  }
  function defineSuccess(msg) {
    setSuccess(msg);
    setTimeout(() => setSuccess(""), 5000);
  }

  return (
    <>
      <RegisterForm
        formData={formData}
        setFormData={setFormData}
        handleFormSubmit={(e) => {
          setWaiting(true);
          handleFormSubmit(e);
          setWaiting(false);
        }}
        error={error}
        success={success}
        waiting={waiting}
      />
    </>
  );
}
