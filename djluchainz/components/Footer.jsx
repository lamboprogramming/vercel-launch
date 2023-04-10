import React from 'react';
import logo from '../public/images/logo1.png'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div>
    <footer className="items-center p-4 shadow bg-slate-100 ">
    <div className="text-xl sm:flex sm:items-center sm:justify-between">
        <Link href="/" className="flex items-center mb-4 sm:mb-0"> </Link> 
        
            <Image src={logo} priority className="w-[150px] ml-3 mb-5 sm:hidden" alt="DJ Logo"  />
            {/* text next to logo */}
           
        <ul className="flex flex-wrap items-center text-sm text-black sm:mb-0 ">
            <li>
                <Link href="/" className="mr-4 hover:underline md:mr-6 ">About</Link>
            </li>
            <li>
                <Link href="/" className="mr-4 hover:underline md:mr-6">Privacy Policy</Link>
            </li>
            <li>
                <Link href="/" className="mr-4 hover:underline md:mr-6 ">Licensing</Link>
            </li>
            <li>
                <Link href="/" className="hover:underline">Contact</Link>
            </li>
        </ul>
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <span className="block text-sm text-black sm:text-center ">© <a className="" href={logo} >Gillespie Holding Group™</a> All Rights Reserved.
    </span>
</footer>
    </div>
  );
}

export default Footer;