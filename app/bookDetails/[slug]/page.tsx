import { client } from "@/app/lib/sanity";
import { urlFor } from "@/app/lib/sanityImageUrl";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCartArrowDown, FaShoppingBasket } from "react-icons/fa";
import { AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";

async function getBookData(slug: string) {
  const query = `*[_type == 'books' && slug.current == '${slug}'][0]{
    name,
    details,
    'image': image.asset->url,
    price,
    slug
  }`;
  const data = await client.fetch(query);
  return data;
}
const bookDetails = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const bookData = await getBookData(slug);
  const { image, name, details, price } = bookData;
  return (
    <div>
      <div className="bg-white pt-20 pb-20">
        <div className="flex justify-around items-center flex-col md:flex-row">
          <div className="rounded-lg bg-gray-300 md:w-[500px] w-[400px] h-[450px]">
            <div className="">
              <Image
                src={urlFor(image).url()}
                width={500}
                height={500}
                alt="detailImage"
                className=""
              />
            </div>
          </div>
          <div className="md:pt-0 pt-4">
            <h1 className="text-black md:text-7xl text-6xl font-bold">{name}</h1>
            <h4 className="pt-4 text-gray-700 text-lg font-normal">
              {details}
            </h4>
            <p className="pt-4 font-bold">₦{price}</p>
            <div className="flex gap-4 mt-4 items-center ">
                <h3>Quantity:</h3>
                <p className="border border-gray-500 p-2 flex">
                    <span className="cursor-pointer pr-2 pl-2 border-r border-gray-500 py-2">
                        <AiOutlineMinus className="text-red-500"/>
                    </span>
                    <span className="pl-4 pr-4 border-r border-gray-500 py-1">0</span>
                    <span className="cursor-pointer pl-4 pr-2 py-2">
                        <AiOutlinePlus className="text-green-500"/>
                    </span>
                </p>
            </div>
            <div className="flex md:gap-10 gap-4">
                <div className="flex mt-4 justify-center items-center gap-8 bg-red-500 text-white hover:bg-red-400 rounded-lg md:w-64 w-52 h-14 cursor-pointer">
                <FaCartArrowDown className="text-white" fontSize="2em" />
                <button
                    className="md:text-xl tex-lg font-bold"
                >
                    ADD TO CART
                </button>
              </div>
              <div className="flex mt-4 justify-center items-center gap-8 bg-transparent border-red-500  border text-red hover:bg-red-100 rounded-lg md:w-64 w-52 h-14 cursor-pointer">
                <FaShoppingBasket className="text-red-500" fontSize="2em" />
                <button
                    className="md:text-xl text-lg font-bold text-red-500"
                >
                    Buy Now
                </button>
                {/* bg-pink-500 text-white hover:bg-transparent border-pink-500  border py-2 px-4 rounded */}
              </div>
            </div>  
          </div>
        </div>
      </div>
    </div>
  );
};

export default bookDetails;
