import Image from "next/image";
import Link from "next/link";

export default function AuthHeader() {
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black/70 to-transparent z-40" />
      <header className="flex items-center justify-between w-full px-8 py-4 absolute top-0 left-0 z-50">
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
            <Link
              href="/about"
              className="text-white text-sm font-semibold hover:text-gray-300 transition"
            >
              About Project
            </Link>
          </li>
          <li>
            <Link
              href="/aboutMe"
              className="text-white text-sm font-semibold hover:text-gray-300 transition"
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              href="/login"
              className="text-white text-sm font-semibold hover:text-gray-300 transition"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="text-white text-sm font-semibold hover:text-gray-300 transition"
            >
              Sign In
            </Link>
          </li>
        </ul>
      </header>
    </>
  );
}
