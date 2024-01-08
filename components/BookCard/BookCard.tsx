"use client"
import { BookData } from '@/app/lib/interface'
import { urlFor } from '@/app/lib/sanityImageUrl';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { motion } from 'framer-motion';

interface bookDataProps {
    book: BookData;
}
const BookCard = ({ book: { name, image, slug, price } }: bookDataProps) => {
    return (
        <div className="flex flex-col items-center">
            <Link href={`/bookDetails/${slug.current}`}>
                <motion.div
                    whileInView={{ opacity: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2, type: "tween" }}
                    className="cursor-pointer text-blue-800 hover:text-blue-600 pt-10">
                    <Image
                        src={urlFor(image).url()}
                        width={200}
                        height={200}
                        className="rounded-lg bg-gray-300 transform scale-100 transition-transform duration-500 ease-in"
                        alt="book-card"
                    />
                    <p className='text-xl font-bold text-pink-500 pt-4'>{name}</p>
                    <p className='font-extrabold mt-2 text-black'>₦{price}</p>
                </motion.div>
            </Link>
        </div>
    )
}

export default BookCard