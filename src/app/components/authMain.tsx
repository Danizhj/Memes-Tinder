"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function AuthMain() {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errorMessage, setErrorMessage] = React.useState("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormData((prevFormData) => {
      return { ...prevFormData, [event.target.name]: event.target.value };
    });
  }

  function handleRegister(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords are different");
    } else {
      console.log(formData);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center text-center min-h-screen pt-40 px-4">
      <h1 className="text-white text-5xl md:text-7xl font-extrabold mb-8">
        Start Swiping
      </h1>
      <form className="flex flex-col gap-4" onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="Email"
          className="p-3 rounded-lg bg-white shadow-lg text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
          required
          onChange={handleChange}
          name="email"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 rounded-lg bg-white shadow-lg text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
          required
          onChange={handleChange}
          name="password"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="p-3 rounded-lg bg-white shadow-lg text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
          required
          onChange={handleChange}
          name="confirmPassword"
        />
        {errorMessage && (
          <p
            className={
              errorMessage === "Passwords Confirmed"
                ? "text-green-700 font-semibold"
                : "text-red-700 font-semibold"
            }
          >
            {errorMessage}
          </p>
        )}
        <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-3 px-6 rounded-full text-lg transition">
          <Link href="/mainPage">Sign up</Link>
        </button>
      </form>
    </div>
  );
}
