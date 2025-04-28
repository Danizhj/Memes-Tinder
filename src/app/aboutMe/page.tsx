import React from "react";
import AuthHeader from "../components/authHeader";

export default function AboutMe() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-white px-4">
      <AuthHeader />
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent text-center">
          Daniyar Zhakypbay
        </h1>
      </div>

      <div className="max-w-md text-center text-lg text-gray-300">
        <p>
          I am a 16 year old who started programming months ago, at first I've
          been learning frontend development with react, but then as I started
          learning with NFactorial I learned basics of Java. After Java course I
          stated learning Data Science. Because of this, when I first started
          this project my react skills became a bit rusty, so I had to revise it
          and it took quite a while. I hope I can get an approval to
          NFactorial's incubator!
        </p>
      </div>
    </main>
  );
}
