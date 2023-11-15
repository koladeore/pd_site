import Link from 'next/link'
import React from 'react'
import { AiFillInstagram, AiFillFacebook, AiFillYoutube, AiOutlineMail, AiFillPhone } from 'react-icons/ai'

const Footer = () => {
  return (
    <div>
          <footer className="bg-gray-800 text-white p-10">
              <div className="container mx-auto flex flex-wrap justify-between">
                  <div className="md:w-1/2 lg:w-1/4 mb-10">
                      <h2 className="text-xl font-bold mb-4">Quick Links</h2>
                      <ul>
                          <li className="mb-2 hover:text-pink-700"><Link href="/">Home</Link></li>
                          <li className="mb-2 hover:text-pink-700"><Link href="/">About</Link></li>
                          <li className="mb-2 hover:text-pink-700"><Link href="/">Messages</Link></li>
                          <li className="mb-2 hover:text-pink-700"><Link href="/">Get in Touch</Link></li>
                      </ul>
                  </div>

                  <div className="w-full md:w-1/2 lg:w-1/4 mb-10">
                      <h2 className="text-xl font-bold mb-4">Social Media</h2>
                      <ul className="flex space-x-4">
                          <li><a href="https://www.instagram.com/davidmakanjuola_pd/" target="_blank" rel="noopener noreferrer"><AiFillInstagram className="text-white hover:text-pink-400" fontSize="2em" /></a></li>
                          <li><a href="https://web.facebook.com/damola001" target="_blank" rel="noopener noreferrer"><AiFillFacebook className="text-white hover:text-pink-400" fontSize="2.5em" /></a></li>
                          <li><a href="https://www.youtube.com/@officialdavidmakanjuolapd3858" target="_blank" rel="noopener noreferrer"><AiFillYoutube className="text-white hover:text-pink-400" fontSize="2.1em" /></a></li>
                      </ul>
                  </div>

                  <div className="w-full md:w-1/2 lg:w-1/4 mb-10">
                      <h2 className="text-xl font-bold mb-4">Contact Us</h2>
                      <div className="flex pb-4">
                          <AiOutlineMail className="text-white" fontSize="1.5em" />
                          <a href="mailto:makanjuoladamola527@gmail.com" className="pl-2 hover:text-pink-400">makanjuoladamola527@gmail.com</a>
                      </div>
                      <div className="flex">
                          <AiFillPhone className="text-white" fontSize="1.5em" />
                          <a href="tel:+(234)7064346811" className="pl-2 hover:text-pink-400">+(234)7064346811</a>
                      </div>
                  </div>

                  <div className="w-full md:w-1/2 lg:w-1/4 mb-4">
                      <h2 className="text-xl font-bold mb-4">About</h2>
                      <p>David Makanjuola is a strategic leadership trainer, a charismatic pastor, a theologian, and an author.</p>
                      <div className="pt-10">
                          <Link href="/" className=" bg-pink-500 text-white hover:bg-transparent border-pink-500  border py-2 px-4 rounded">Read More</Link>
                      </div>
                  </div>
              </div>
          </footer>
    </div>
  )
}

export default Footer

