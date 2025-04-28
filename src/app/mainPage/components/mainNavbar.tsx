import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function MainNavbar() {
  return (
    <div className="flex items-center justify-between p-4 bg-gradient-to-b from-black to-transparent">
      <div className="flex items-center gap-3">
        <Image
          src="/meme_this_is_fine_dog.png"
          width={40}
          height={40}
          alt="Icon"
        />
        <h1 className="text-white text-2xl font-bold">Memes Tinder</h1>
      </div>

      <ul className="flex items-center gap-6">
        <li>
          <button className="transform hover:scale-110 active:scale-90 transition">
            <Link href="/mainPage">
              <Image src="/doge_meme.png" alt="Liked" width={40} height={40} />
            </Link>
          </button>
        </li>
        <li>
          <button className="transform hover:scale-110 active:scale-90 transition">
            <Link href="/likedPage">
              <Image src="/star_icon.png" alt="Liked" width={40} height={40} />
            </Link>
          </button>
        </li>
        <li>
          <button className="transform hover:scale-110 active:scale-90 transition">
            <Link href="/profilePage">
              <Image src="/user_icon.png" alt="User" width={40} height={40} />
            </Link>
          </button>
        </li>
      </ul>
    </div>
  );
}
