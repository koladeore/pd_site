import React from "react";
import { client } from "@/app/lib/sanity";
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";
import { EBookData } from "@/app/lib/interface";
import Image from "next/image";
import { urlFor } from "@/app/lib/sanityImageUrl";

async function getData() {
    try {
        const query = `*[_type == 'ebooks']{
            title,
            image,
            details,
            'file': bookFile.asset->url ,
        }`
        const data = await client.fetch(query, { cache: "no-cache" });
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}
function getFileExtension(filename: string) {
    return filename.split('.').pop();
}
const Ebooks = async () => {
    try {
        const data = (await getData()) as EBookData[];

        return (
            <div>
                <ScrollAnimation>
                    <div className="bg-white pt-10">
                        <h1 className="flex items-center justify-center text-gray-700 md:text-2xl text-xl font-bold">DOWNLOAD FREE EBOOK</h1>
                        {data.map((ebook) => (
                            <div key={ebook.title}>
                                <div className="flex md:flex-row flex-col border border-gray p-4 md:mx-24 mx-4 md:mr-24 mr-auto ml-auto md:mt-2 mt-4 mb-10  w-80 md:w-auto items-center justify-center">
                                    <div className="md:order-1 order-last">
                                        <div className="h-60 w-60 rounded bg-gray-300">
                                            <Image
                                                src={urlFor(ebook.image).url()}
                                                width={250}
                                                height={250}
                                                className=""
                                                alt="book-card"
                                            />
                                        </div>
                                        <div className="md:pt-4 pt-6">
                                            <a href={`${ebook.file}?dl=${ebook.title}.${getFileExtension(ebook.file)}`} className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 rounded w-[170px]">
                                                DownLoad
                                            </a>
                                        </div>
                                    </div>
                                    <div className="md:pl-10 pl-0 md:order-last">
                                        <div className="md:text-2xl text-lg font-bold mb-2 pt-4 md:pt-0 md:pl-0 pl-6">{ebook.title}</div>
                                        <div className="text-gray-700 md:text-lg text-sm md:leading-9 leading-6 md:w-auto w-72 md:pl-0 pl-6 mb-4 md:mb-0">{ebook.details}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </ScrollAnimation>
            </div>
        );
    } catch (error) {
        console.error("Error in Messages component:", error);
        return <div>Error loading ebooks</div>;
    }
};

export default Ebooks;
