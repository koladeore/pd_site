import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className="bg-gray-500 md:h-[448px] h-[400px] pt-12 mb-8">
      <div className="flex items-center justify-center relative">
        <Image
          src="/assets/about.png"
          alt="about"
          height={600}
          width={600}
          className="opacity-70 md:pt-0 pt-6"
        />
        <h1 className="text-white md:text-5xl text-4xl font-bold absolute">
          Pastor David Makanjuola
        </h1>
      </div>
    </div>
  )
}

export default About