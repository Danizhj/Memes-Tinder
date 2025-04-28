"use client";

import React from "react";
import Image from "next/image";
import MainNavbar from "../mainPage/components/mainNavbar";
import Link from "next/link";
import { getLikedMemes } from "../mainPage/components/likedMemes";
import { getDislikedMemes } from "../mainPage/components/likedMemes";

export default function ProfilePage() {
  let likedMemes = getLikedMemes();
  let dislikedMemes = getDislikedMemes();

  return (
    <main className="min-h-screen text-white">
      <MainNavbar />
      <div className="flex justify-center max-h-screen">
        <div className="bg-gray-900 text-white p-8 rounded-lg shadow-2xl max-w-lg w-full flex flex-col items-center max-h-200">
          <div className="relative w-[150px] h-[150px] mb-4">
            <Image
              src="/user_icon.png"
              alt="user icon"
              layout="fill"
              objectFit="cover"
              className="rounded-full shadow-lg"
            />
          </div>
          <h1 className="text-3xl font-bold mb-2">Danizh</h1>
          <p className="text-xl text-gray-400 mb-4">Memes Enthusiast</p>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full mb-8">
            <ul className="space-y-4 text-lg">
              <li className="flex justify-between">
                <span>Likes</span>
                <span>{likedMemes.length}</span>
              </li>
              <li className="flex justify-between">
                <span>Dislikes</span>
                <span>{dislikedMemes.length}</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 bg-gradient-to-r from-orange-400 to-red-500 text-white py-2 px-6 rounded-full text-lg font-semibold transform transition duration-200 ease-in-out hover:scale-105 hover:shadow-lg hover:opacity-90 active:scale-95 active:shadow-none active:opacity-80">
            <Link href="">Similarities</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
