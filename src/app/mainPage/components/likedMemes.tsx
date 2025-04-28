function getMemesFromLocalStorage(key: string): string[] {
  if (typeof window !== "undefined") {
    const storedMemes = localStorage.getItem(key);
    return storedMemes ? JSON.parse(storedMemes) : [];
  }
  return [];
}

function setMemesToLocalStorage(key: string, memes: string[]) {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(memes));
  }
}

export function getLikedMemes() {
  return getMemesFromLocalStorage("likedMemes");
}

export function addLikedMeme(url: string) {
  const likedMemes = getLikedMemes();
  if (!likedMemes.includes(url)) {
    likedMemes.push(url);
    setMemesToLocalStorage("likedMemes", likedMemes);
  }
}

export function getDislikedMemes() {
  return getMemesFromLocalStorage("dislikedMemes");
}

export function addDislikedMeme(url: string) {
  const dislikedMemes = getDislikedMemes();
  if (!dislikedMemes.includes(url)) {
    dislikedMemes.push(url);
    setMemesToLocalStorage("dislikedMemes", dislikedMemes);
  }
}
