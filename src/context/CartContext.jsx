import {
  createContext,
  useState,
  useEffect,
} from "react";

export const CartContext =
  createContext();

export function CartProvider({
  children,
}) {
  const [cart, setCart] =
    useState([]);

  useEffect(() => {
    const savedCart =
      localStorage.getItem(
        "cart"
      );

    if (savedCart) {
      setCart(
        JSON.parse(savedCart)
      );
    }
  }, []);


  const addToCart = (
    product
  ) => {
    const existingItem =
      cart.find(
        (item) =>
          item.id ===
          product.id
      );

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id ===
          product.id
            ? {
                ...item,
                quantity:
                  item.quantity + 1,
              }
            : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          ...product,
          quantity: 1,
        },
      ]);
    }
  };

  const removeItem = (
    id
  ) => {
    setCart(
      cart.filter(
        (item) =>
          item.id !== id
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalPrice =
    cart.reduce(
      (total, item) =>
        total +
        item.price *
          item.quantity,
      0
    );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeItem,
        clearCart,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}