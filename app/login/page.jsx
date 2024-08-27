"use client";
import LoginForm from "@/components/LoginForm";
import React, { useState } from "react";

import { useRouter } from "next/navigation";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [waiting, setWaiting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();

  async function handleFormSubmit(e) {
    e.preventDefault();
    setWaiting(true);

    try {
      const res = await fetch(
        `${"https://greenagrichain-backend.onrender.com"}/api/auth/login`,
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await res.json();
      localStorage.setItem("_greenagrichain", JSON.stringify(data));
      defineSuccess(
        data.message + ". You will now be redirected to your dashboard"
      );
      router.push("/dashboard");
    } catch (error) {
      defineError(error);
    }

    setWaiting(false);
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
    <div>
      <LoginForm
        handleFormSubmit={handleFormSubmit}
        formData={formData}
        setFormData={setFormData}
        waiting={waiting}
        success={success}
        error={error}
      />
    </div>
  );
}
