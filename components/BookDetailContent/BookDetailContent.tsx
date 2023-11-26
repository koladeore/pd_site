"use client"
import { BookData } from "@/app/lib/interface";
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import { FaCartArrowDown, FaShoppingBasket } from "react-icons/fa";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useRouter } from "next/navigation";

interface BookDetailsContentProps {
    bookData: BookData;
}
const BookDetailContent = ({ bookData }: BookDetailsContentProps) => { 
  const { qty, decQty, incQty, onAdd, setShowCart } = useAppContext();
  const router = useRouter();
  const handleAddToCart = () => {
    onAdd(bookData, qty);
  };
  const handleBuyNow = () => {
    onAdd(bookData, qty);
    setShowCart(true);
    router.push('/cart');
  };
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
            <div className="flex gap-4 mt-4 items-center ">
              <h3>Quantity:</h3>
              <p className="border border-gray-500 p-2 flex">
                <span
                  className="cursor-pointer pr-2 pl-2 border-r border-gray-500 py-2"
                  onClick={decQty}
                >
                  <AiOutlineMinus className="text-red-500" />
                </span>
                <span className="pl-4 pr-4 border-r border-gray-500 py-1">
                  {qty}
                </span>
                <span
                  className="cursor-pointer pl-4 pr-2 py-2"
                  onClick={incQty}
                >
                  <AiOutlinePlus className="text-green-500" />
                </span>
              </p>
            </div>
            <div className="flex md:gap-10 gap-4">
              <div
                className="flex mt-4 justify-center items-center gap-8 bg-red-500 text-white hover:bg-red-400 rounded-lg md:w-64 w-52 h-14 cursor-pointer"
                onClick={handleAddToCart}
              >
                <FaCartArrowDown className="text-white" fontSize="2em" />
                <button className="md:text-xl tex-lg font-bold">
                  ADD TO CART
                </button>
              </div>
              <div
                className="flex mt-4 justify-center items-center gap-8 bg-transparent border-red-500  border text-red hover:bg-red-100 rounded-lg md:w-64 w-52 h-14 cursor-pointer"
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
