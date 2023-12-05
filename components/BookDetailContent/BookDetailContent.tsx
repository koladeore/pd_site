"use client"
import { useState, useEffect } from "react";
import { BookData } from "@/app/lib/interface";
import { useRouter } from "next/navigation";
import { useCart } from "@/hooks/useCart";
import Image from "next/image";
import { FaCartArrowDown, FaShoppingBasket } from "react-icons/fa";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

interface BookDetailsContentProps {
  bookData: BookData;
}
const BookDetailContent = ({ bookData }: BookDetailsContentProps) => {
  const [qty, setQty] = useState(1);
  const [disable, setDisable] = useState(true);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const bookWithQuantity = {
    ...bookData,
    quantity: qty,
  };
  const {
    handleAddProductToCart,
  } = useCart()
  useEffect(() => {
    const cartItemsString: any = localStorage.getItem("CartItems");
    if (cartItemsString && cartItemsString !== null) {
      try {
        const cartItems: any[] = JSON.parse(cartItemsString);

        if (Array.isArray(cartItems)) {
          const existingProductIndex = cartItems.findIndex(
            (item: any) => item._id === bookWithQuantity._id
          );

          if (existingProductIndex !== -1) {
            // If the product is already in the cart, update its quantity
            setDisable(!disable);
          }
        } else {
          
        }
      } catch (error) {
        console.error("Error parsing cart items:", error);
      }finally {
        setLoading(false);
      }
    }
  }, []);
  const handleAddToCart = () => {
    handleAddProductToCart(bookWithQuantity);
    setDisable(!disable);
  };
  const handleBuyNow = () => {
    setTimeout(() => {
      router.push("/cart");
    }, 0.001);
  };
  if (loading) {
    return <div className="w-full h-full flex justify-center items-center pt-32">
      <div className="animate-spin rounded-full border-t-4 border-gray-300 border-solid h-12 w-12"></div>
    </div>
  }

  return (
    <div>
      <div className="bg-white pt-20 pb-20">
        <div className="flex justify-around items-center flex-col md:flex-row">
          <div className="rounded-lg bg-gray-300 md:w-[500px] w-[400px] h-[450px]">
            <div className="">
              <Image
                src={bookData.image}
                width={500}
                height={500}
                alt="detailImage"
                className=""
              />
            </div>
          </div>
          <div className="md:pt-0 pt-4">
            <h1 className="text-black md:text-7xl text-6xl font-bold">
              {bookData.name}
            </h1>
            <h4 className="pt-4 text-gray-700 text-lg font-normal">
              {bookData.details}
            </h4>
            <p className="pt-4 font-bold">₦{bookData.price}</p>
            {disable ? (
              <div className="flex gap-4 mt-4 items-center ">
                <h3>Quantity:</h3>
                <p className="border border-gray-500 p-2 flex">
                  <span
                    className="cursor-pointer pr-2 pl-2 border-r border-gray-500 py-2"
                    onClick={() =>
                      setQty((prevQty) => {
                        if (prevQty - 1 < 1) return 1;
                        return prevQty - 1;
                      })
                    }
                  >
                    <AiOutlineMinus className="text-red-500" />
                  </span>
                  <span className="pl-4 pr-4 border-r border-gray-500 py-1">
                    {qty}
                  </span>
                  <span
                    className="cursor-pointer pl-4 pr-2 py-2"
                    onClick={() => setQty((prevQty) => prevQty + 1)}
                  >
                    <AiOutlinePlus className="text-green-500" />
                  </span>
                </p>
              </div>
            ) : null}
            <div className="flex md:gap-10 gap-4">
              <div
                className={`flex ${disable ? "block" : "hidden"
                  } mt-4 justify-center items-center gap-8 bg-red-500 text-white hover:bg-red-400 rounded-lg md:w-64 w-52 h-14 cursor-pointer`}
                onClick={handleAddToCart}
              >
                <FaCartArrowDown className="text-white" fontSize="2em" />
                <button className="md:text-xl tex-lg font-bold">
                  ADD TO CART
                </button>
              </div>
              <div
                className={`flex ${disable ? "hidden" : "block"
                  } mt-4 justify-center items-center gap-8 bg-transparent border-red-500  border text-red hover:bg-red-100 rounded-lg md:w-64 w-52 h-14 cursor-pointer`}
                onClick={handleBuyNow}
              >
                <FaShoppingBasket className="text-red-500" fontSize="2em" />
                <button className="md:text-xl text-lg font-bold text-red-500">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailContent;
