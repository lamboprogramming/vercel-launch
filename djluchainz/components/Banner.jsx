import React from 'react';
import Image from 'next/image'
import bg from '../public/images/bg1.jpeg'

const backgroundImage = bg ;

const Banner = () => {
  return (
    <div
    className='container fixed overflow-hidden bg-no-repeat bg-cove'>
      <Image className='r'
        src={bg}
        alt="dj"
        fill
        cover
      />
    </div>
    
  );
}

export default Banner;
