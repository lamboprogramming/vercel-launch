import React from 'react';
import Image from 'next/image'
import dassa from '../public/images/dassa3.jpeg'

const Bio = () => {
  return (
    <div className='bg-slate-100 '>
  <div className="mx-auto ">
  
      {/* Twin photo */}
      <div className='flex justify-center w-full h-full'>
      <div className='overflow-hidden'>
        <Image src={dassa} alt="/" priority className=''/>
      </div>
     </div>
 
    <section className="p-4 text-center">
    
     {/* Col 1 Bio */}
      <div className='grid grid-cols-1 font-sans tracking-wider text-center text-black '>

      <div className="font-[500] text-2xl leading-10">
      <p className='mb-4'>LuChainz is a highly experienced and sought-after DJ with over a decade of experience in the music industry traveling the country and playing at some of the most exclusive venues.</p>
      </div> 
      </div>
      
   </section>
   
  </div>
  {/* Testimonials */}
 

  

  
  </div>
  );
}

export default Bio;
