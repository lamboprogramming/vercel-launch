import React from 'react';
import Image from 'next/image'
import dassa from '../../public/images/dassa3.jpeg'
import Navbar from '../../components/Navbar'
import Testimonials from '../../components/Testimonials'
import Footer from 'components/Footer';





const about = () => {
  return (
    <>
    <Navbar />
   
       
  <div className=' bg-slate-200'>
  <div className="mx-auto ">
  
      {/* Twin photo */}
      <div className='flex justify-center w-full h-full'>
      <div className=''>
        <Image src={dassa} alt="/" priority className='pt-4 pl-4 pr-4 '/>
      </div>
     </div>
 
    <section className="p-8 text-center">
    
     {/* Col 1 Bio */}
      <div className='grid grid-cols-1 font-sans tracking-widest text-center text-black '>

      <div className="font-[400] text-2xl leading-10">
      <p className='mb-4 '>LuChainz is a highly experienced and sought-after DJ with over a decade of experience in the music industry traveling the country playing at some of the most exclusive venues.</p>
      </div> 
      </div>
      
       
   </section>
   
  </div>
  {/* Testimonials */}
 

  

  
  </div>
<Footer />
    
    </>
  );
}

export default about;
