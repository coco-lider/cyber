import { createContext, useContext, useState, useEffect } from "react";

const LikeContext = createContext();

export const LikeProvider = ({ children }) => {
  const [likedItems, setLikedItems] = useState(() => {
    const stored = localStorage.getItem("likedItems");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("likedItems", JSON.stringify(likedItems));
  }, [likedItems]);

  const addToLikes = (item) => {
    if (!likedItems.some((liked) => liked.id === item.id)) {
      setLikedItems((prev) => [...prev, item]);
    }
  };

  const removeFromLikes = (id) => {
    setLikedItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <LikeContext.Provider value={{ likedItems, addToLikes, removeFromLikes }}>
      {children}
    </LikeContext.Provider>
  );
};

export const useLikes = () => useContext(LikeContext);
