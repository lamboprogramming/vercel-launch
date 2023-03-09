import { useState } from "react";
import Image from 'next/image'
import logo from "../public/images/logo1.png"
import Link from 'next/link'


const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
  return (
    <nav className="w-full font-sans font-[300] bg-gray-900 shadow">
    <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
        
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
           
                <Link href="/">
                    <Image className="hover:scale-125" src={logo} alt="logo" width="150"/>
                </Link>
                
                <div className=" md:hidden">
                    <button
                        className="p-2 text-white rounded-md outline-none focus:border-gray-400 focus:border"
                        onClick={() => setNavbar(!navbar)}
                    >
                        {navbar ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-8 h-8 mt-4 text-white"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                               
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-8 h-8 mt-4 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                               
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </div>
        </div>
        <div>
            <div
                className={`flex-1 text-center justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 nav-links capitalize text-md  ${
                    navbar ? "block" : "hidden"
                }`}
            >
                <ul className="items-center justify-center px-4 pt-1 pb-2 mt-2 space-y-10 text-white text-md md:flex md:space-x-10 md:space-y-0 ">
                    <Link href="/">
                    <p className="py-4 tracking-widest hover:scale-150 ">Home
                    </p>
                    </Link>
               
                    <Link href="/about">
                    <p className="py-4 tracking-widest hover:scale-150 ">About
                    </p>
                    </Link>
                    
                    <Link href="/music">
                    <p className="py-4 tracking-widest hover:scale-150 ">Music
                    </p>
                    </Link>
                    
                    <Link href="/media" >
                    <p className="py-4 tracking-widest hover:scale-150 ">Gallery
                    </p>
                    </Link>
                    
                    <Link href="/contact">
                    <p className="py-4 tracking-widest hover:scale-150">Contact
                    </p>
                    </Link>
                </ul>
            </div>
        </div> 
    </div>
    </nav>
  );
}

export default Navbar;