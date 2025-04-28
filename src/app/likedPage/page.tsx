"use client";

import React, { useEffect, useState } from "react";
import { getLikedMemes } from "../mainPage/components/likedMemes";
import Image from "next/image";
import MainNavbar from "../mainPage/components/mainNavbar";

export default function LikedPage() {
  const [likedMemes, setLikedMemes] = useState<string[]>([]);

  useEffect(() => {
    const memes = getLikedMemes();
    setLikedMemes(memes); // Получаем лайкнутые мемы при монтировании компонента
  }, []);

  return (
    <main>
      <MainNavbar />
      <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600 text-4xl font-extrabold text-center mb-8">
        Your Liked Memes
      </h1>
      <div className="flex flex-col items-center justify-center">
        {likedMemes.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {likedMemes.map((url, index) => (
              <div key={index} className="meme">
                <Image
                  src={url}
                  alt={`Liked Meme ${index}`}
                  width={200}
                  height={200}
                  className="rounded-xl shadow-md"
                />
              </div>
            ))}
          </div>
        ) : (
          <p>У вас нет лайкнутых мемов.</p>
        )}
      </div>
    </main>
  );
}
