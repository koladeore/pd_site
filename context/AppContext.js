"use client"
import React, { createContext, useState, useContext } from "react";
const AppContext = createContext();
import { toast } from "react-hot-toast";

export const AppProvider = ({ children }) => {
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantities, setTotalQuantities] = useState(0);
    const [qty, setQty] = useState(1);
    const [open, setOpen] = useState(false);
    let foundProduct;
    let index;
    const onAdd = (bookData, quantity) => {
       const checkProductInCart = cartItems.find(
         (item) => item._id === bookData._id
       );

       setTotalPrice(
         (prevTotalPrice) => prevTotalPrice + bookData.price * quantity
       );
       setTotalQuantities(
         (prevTotalQuantities) => prevTotalQuantities + quantity
       );

       if (checkProductInCart) {
         const updatedCartItems = cartItems.map((cartProduct) => {
           if (cartProduct._id === bookData._id)
             return {
               ...cartProduct,
               quantity: cartProduct.quantity + quantity,
             };
         });

         setCartItems(updatedCartItems);
       } else {
         bookData.quantity = quantity;

         setCartItems([...cartItems, { ...bookData }]);
       }

       toast.success(`${qty} ${bookData.name} added to the cart.`);
    };
    const onRemove = (bookData) => {
      foundProduct = cartItems.find((item) => item._id === bookData._id);
      const newCartItems = cartItems.filter(
        (item) => item._id !== bookData._id
      );

      setTotalPrice(
        (prevTotalPrice) =>
          prevTotalPrice - foundProduct.price * foundProduct.quantity
      );
      setTotalQuantities(
        (prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity
      );
      setCartItems(newCartItems);
    };
    const toggleCartItemQuantity = (id, value) => {
      foundProduct = cartItems.find((item) => item._id === id);
      index = cartItems.findIndex((bookData) => bookData._id === id);
      const newCartItems = cartItems.filter((item) => item._id !== id);

      if (value === "inc") {
        setCartItems([
          ...newCartItems,
          { ...foundProduct, quantity: foundProduct.quantity + 1 },
        ]);
        setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price);
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);
      } else if (value === "dec") {
        if (foundProduct.quantity > 1) {
          setCartItems([
            ...newCartItems,
            { ...foundProduct, quantity: foundProduct.quantity - 1 },
          ]);
          setTotalPrice(
            (prevTotalPrice) => prevTotalPrice - foundProduct.price
          );
          setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1);
        }
      }
    };
    const incQty = () => {
      setQty((prevQty) => prevQty + 1);
    };

    const decQty = () => {
      setQty((prevQty) => {
        if (prevQty - 1 < 1) return 1;

        return prevQty - 1;
      });
    };
    return (
      <AppContext.Provider
        value={{
          open,
          setOpen,
          showCart,
          setShowCart,
          cartItems,
          totalPrice,
          totalQuantities,
          qty,
          incQty,
          decQty,
          onAdd,
          toggleCartItemQuantity,
          onRemove,
          setCartItems,
          setTotalPrice,
          setTotalQuantities,
        }}
      >
        {children}
      </AppContext.Provider>
    );
}
export const useAppContext = () => {
    return useContext(AppContext);
};