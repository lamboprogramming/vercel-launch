import React from 'react';
import Image from 'next/image'
import bg from '../public/images/bg1.jpeg'
import Link from 'next/link'

const backgroundImage = bg ;

const Banner = () => {
  return (
    <div className="relative flex flex-col-reverse lg:pt-0 lg:flex-col lg:pb-0 sm:hidden">
      <div className="">
        <svg
          className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        <Image
          className=""
          src={bg}
          alt=""
        />
      </div>
   
    </div>

  );
}

export default Banner;
