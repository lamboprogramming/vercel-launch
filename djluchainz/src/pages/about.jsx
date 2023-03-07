import React from 'react';
import Image from 'next/image'
import dassa from '../../public/images/dassa3.jpeg'
import Navbar from '../../components/Navbar'

const about = () => {
  return (
    <>
    <Navbar />
   
        {/* Col 1 Bio & Social*/}
  <div className='p-4 bg-white md:p-2'>
  <div className="container mx-auto my-8 md:my-24">

    <section className="mb-20 text-center md:mb-32">
      {/* Bio */}
      <div className="self-center ">

      {/* Twin photo */}
        <div className="grid justify-center">
       
        </div>

        <div className='grid grid-cols-1'>
                <h1 className="w-full font-sans text-3xl font-bold leading-10 tracking-wider text-center text-black uppercase shadow-md "> Restuants, Bars, Clubs, Lounges, Corporate, Schools, Collaborations & more </h1>
        </div>
        <div className='grid grid-cols-1 mt-4 md:grid-cols-5'>
          <div className='md:col-span-5 md:col-start-2'>
            <Image src={dassa} alt="/" className='shadow-2xl rounded-2xl'/>
          </div>
         
        </div>
       {/* Biography */}
       <div className="grid grid-cols-4">

        <div className="p-4 mt-4 leading-10  tracking-wider text-black  lg:text-2xl lg:m-20 font-[200] col-start-1 col-span-4 text-left">
        <p>Growing up in New York City exposed me to a melting pot of culture and music. Being a DJ means that I get to provide the energy and life of an event! Theres something about seeing dancing and laughter that makes me feel the energy.</p>
            
       <br/>
           <p> Even after a decade on the turntables, I am still just as passionate about my craft as ever and I am excited to make excited moments with you. </p>
        </div>


        </div>
       
  
      </div>
   </section>
   
  </div>
  
</div>

    
    </>
  );
}

export default about;
