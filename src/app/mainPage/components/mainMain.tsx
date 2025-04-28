import React from "react";
import Image from "next/image";
import { addLikedMeme } from "./likedMemes";
import { addDislikedMeme } from "./likedMemes";

export default function MainMain() {
  const [memeUrl, setMemeUrl] = React.useState<string | null>(null);
  const [memeKey, setMemeKey] = React.useState<number>(
    Math.floor(Math.random() * 1000)
  );
  const [swipeDirection, setSwipeDirection] = React.useState<
    "left" | "right" | null
  >(null);
  const [loadMeme, setLoadMeme] = React.useState(0);
  const [usedMemes, setUsedMemes] = React.useState<Set<string>>(new Set());

  const fetchMeme = async () => {
    const response = await fetch("https://meme-api.com/gimme");
    const data = await response.json();

    if (usedMemes.has(data.url)) {
      fetchMeme();
    } else {
      setUsedMemes((prev) => new Set(prev.add(data.url)));
      setMemeUrl(data.url);
    }
  };

  React.useEffect(() => {
    fetchMeme();
  }, [loadMeme]);

  const handleLike = () => {
    setSwipeDirection("right");
    setLoadMeme((prevLoadMeme) => prevLoadMeme + 1);
    if (memeUrl) {
      addLikedMeme(memeUrl);
    }
    setTimeout(() => {
      setSwipeDirection(null);
      setMemeKey(Math.floor(Math.random()));
    }, 700);
  };

  const handleDislike = () => {
    setSwipeDirection("left");
    setLoadMeme((prevLoadMeme) => prevLoadMeme - 1);
    if (memeUrl) {
      addDislikedMeme(memeUrl);
    }
    setTimeout(() => {
      setSwipeDirection(null);
      setMemeKey(Math.floor(Math.random()));
    }, 700);
  };

  return (
    <div className="flex flex-col items-center justify-center max-h-screen">
      <div className="relative w-[700px] h-[700px] mb-6">
        {memeUrl ? (
          <Image
            key={memeKey}
            src={memeUrl}
            alt="Random Meme"
            layout="fill"
            objectFit="contain"
            className={`rounded-2xl shadow-lg transition-all duration-700 ease-in-out ${
              swipeDirection === "right"
                ? "translate-x-[800px] rotate-12 opacity-0"
                : ""
            } ${
              swipeDirection === "left"
                ? "-translate-x-[800px] -rotate-12 opacity-0"
                : ""
            }`}
          />
        ) : (
          <p>Загрузка мема...</p>
        )}
      </div>

      <div className="flex items-center justify-center gap-20">
        <button
          onClick={handleDislike}
          className="transform hover:scale-110 active:scale-90 transition"
        >
          <Image
            src="/dislike_button.png"
            alt="dislike"
            height={70}
            width={70}
          />
        </button>
        <button
          onClick={handleLike}
          className="transform hover:scale-110 active:scale-90 transition"
        >
          <Image src="/like_button.png" alt="like" height={80} width={80} />
        </button>
      </div>
    </div>
  );
}
