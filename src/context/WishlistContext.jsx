import {
  createContext,
  useState,
  useEffect,
} from "react";

export const WishlistContext =
  createContext();

export function WishlistProvider({
  children,
}) {
  const [wishlist, setWishlist] =
    useState([]);

  useEffect(() => {
    const savedWishlist =
      localStorage.getItem(
        "wishlist"
      );

    if (savedWishlist) {
      setWishlist(
        JSON.parse(
          savedWishlist
        )
      );
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "wishlist",
      JSON.stringify(
        wishlist
      )
    );
  }, [wishlist]);

  const addToWishlist = (
    product
  ) => {
    const exists =
      wishlist.find(
        (item) =>
          item.id ===
          product.id
      );

    if (!exists) {
      setWishlist([
        ...wishlist,
        product,
      ]);
    }
  };

  const removeFromWishlist =
    (id) => {
      setWishlist(
        wishlist.filter(
          (item) =>
            item.id !== id
        )
      );
    };

  const clearWishlist =
    () => {
      setWishlist([]);
    };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        clearWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}