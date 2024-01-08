import React from "react";
import { client } from "@/app/lib/sanity";
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";
import { EBookData } from "@/app/lib/interface";
import Image from "next/image";
import { urlFor } from "@/app/lib/sanityImageUrl";
import { BsCloudDownload } from 'react-icons/bs';

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
                                <div className="flex md:flex-row flex-col items-center md:items-start justify-center border border-gray p-4 md:mx-24 mx-auto md:mr-24 mr-auto ml-auto md:mt-2 mt-4 mb-10 w-full md:w-auto">
                                    <div className="flex-shrink-0">
                                        <div className="">
                                            <Image
                                                src={urlFor(ebook.image).url()}
                                                width={150}
                                                height={200}
                                                className="rounded-lg"
                                                alt="book-card"
                                            />
                                        </div> 
                                    </div>
                                    <div className="md:pl-10 pl-6 flex-grow">
                                        <div className="md:text-2xl text-lg font-bold mb-2 pt-4 md:pt-0 md:pl-0 pl-6">{ebook.title}</div>
                                        <div className="text-gray-700 md:text-lg text-sm md:leading-9 leading-6 md:w-auto w-72 md:pl-0 pl-6 mb-4 md:mb-0">{ebook.details}</div>
                                    </div>
                                    <div className="md:pt-0 pt-0">
                                        <a href={`${ebook.file}?dl=${ebook.title}.${getFileExtension(ebook.file)}`} className="hover:text-pink-400 text-[16px] md:text-[28px] flex gap-2 items-center">
                                            <BsCloudDownload />
                                            <div className="md:hidden">Download</div>
                                        </a>
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
