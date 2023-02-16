import React from 'react';
import logo from '../public/assets/logo1.png'
import Image from 'next/image'

const Footer = () => {
  return (
    <div>
    <footer className="p-4 bg-black shadow md:px-6 md:py-8 dark:bg-gray-900">
    <div className="text-xl sm:flex sm:items-center sm:justify-between">
        <a href="/" className="flex items-center mb-4 sm:mb-0">
            <Image src={logo} priority className="w-[130px] ml-3" alt="DJ Logo" />
            {/* text next to logo */}
            <span className="self-center mt-5 font-semibold text-md whitespace-nowrap dark:text-white"></span>
        </a>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-white sm:mb-0 dark:text-gray-400">
            <li>
                <a href="/" className="mr-4 hover:underline md:mr-6 ">About</a>
            </li>
            <li>
                <a href="/" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
            </li>
            <li>
                <a href="/" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
            </li>
            <li>
                <a href="/" className="hover:underline">Contact</a>
            </li>
        </ul>
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <span className="block text-sm text-white sm:text-center dark:text-gray-400">© <a className="" href={logo} >Gillespie Holding Group™</a> All Rights Reserved.
    </span>
</footer>
    </div>
  );
}

export default Footer;