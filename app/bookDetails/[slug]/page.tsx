import { client } from "@/app/lib/sanity";
import { urlFor } from "@/app/lib/sanityImageUrl";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCartArrowDown } from "react-icons/fa";

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
  console.log("boData", bookData);
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
          <div className="md:ml-[-300px] ml-0 pt-10">
            <h1 className="text-black md:text-7xl text-6xl font-bold">{name}</h1>
            <h4 className="pt-4 text-gray-700 text-lg font-normal">
              {details}
            </h4>
            <p className="pt-4">₦{price}</p>
            <div className="flex mt-4 justify-center items-center gap-8 bg-red-500 text-white hover:bg-red-400 rounded-lg w-64 h-14">
                <FaCartArrowDown className="text-white" fontSize="2em" />
              <Link
                href="/"
                className="text-xl"
              >
                ADD TO CART
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default bookDetails;
