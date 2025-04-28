import React from "react";
import Image from "next/image";
import AuthHeader from "../components/authHeader";

export default function About() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-white px-4">
      <AuthHeader />
      <div className="flex flex-col items-center mb-8">
        <Image
          src="/meme_this_is_fine_dog.png"
          width={150}
          height={150}
          alt="Logo"
          className="mb-4"
        />
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent text-center">
          Memes Tinder
        </h1>
      </div>

      <div className="max-w-md text-center text-lg text-gray-300">
        <p>
          Memes Tinder is a web app made in 3 days without any backend knowledge
          by a 9th class student. Hope you liked it!
        </p>
      </div>
    </main>
  );
}
