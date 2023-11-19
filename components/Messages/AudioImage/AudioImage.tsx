"use client"
import React from 'react'
import Image from "next/image";
import { urlFor } from "@/app/lib/sanityImageUrl";
import { motion } from 'framer-motion';

const AudioImage = ({audio}: any) => {
  return (
    <motion.div
        whileInView={{ opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        transition= {{ duration: 0.5, type: "tween" }}
    >
        <Image
            src={urlFor(audio.image).url()}
            alt="Image"
            className=""
            width={250}
            height={250}
        />
    </motion.div>
  )
}

export default AudioImage