import React from 'react';
import Image from 'next/image'
import twin from '../../public/images/twindj.png'
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
          <Image className="hidden max-w-sm rounded-md lg:block max-h-[98%] " priority src={twin} alt="/" />
        </div>

        <div className='grid grid-cols-1'>
                <h1 className="w-full font-sans text-3xl font-bold leading-10 tracking-wider text-center text-black uppercase shadow-md "> Restuants, Bars, Clubs, Lounges, Corporate, Schools, Collaborations & more </h1>
        </div>

       {/* Biography */}
       <div className="grid grid-cols-2">
       
       
        <div className="p-4 mt-4 leading-10 tracking-wider text-black md:text-xl lg:text-2xl lg:m-20">
            Growing up in New York City exposed me to a melting pot of culture and music. Being a DJ means that I get to provide the energy and life of an event! Theres something about seeing dance and laughter !
       
            Even after a decade on the turntables, I am still just as passionate about my craft as ever and I am excited to make excited moments with you. 
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
