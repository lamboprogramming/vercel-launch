import React from 'react';
import Image from 'next/image'
import bg from '../public/images/bg1.jpeg'
import Link from 'next/link'

const backgroundImage = bg ;

const Banner = () => {
  return (
      <div className="flex justify-center w-full bg-gray-900">
        <Image
          priority
          className=""
          src={bg}
          alt=""
        />
        
      </div>
   
   
  );
}

export default Banner;
