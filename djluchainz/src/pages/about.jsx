import React from 'react';
import Image from 'next/image'
import twin from '../../public/images/twindj.png'
import Navbar from '../../components/Navbar'

const about = () => {
  return (
    <>
    <Navbar />
    <div>
        {/* Col 1 Bio & Social*/}
  <div className='p-4 lg:p-0'>
  <div className="container px-6 mx-auto my-8 md:my-24">

    <section className="mb-20 text-center md:mb-32">
      {/* Bio */}
      <div className="self-center font-[Abel]">

      {/* Twin photo */}
        <div className="grid justify-center">
          <Image className="hidden max-w-sm rounded-md lg:block max-h-[98%] " priority src={twin} alt="/" />
        </div>

       {/* Biography */}
        <p className="p-4 mt-4 leading-10 tracking-wider text-white border-t-4 border-l-4 border-yellow-400 shadow-xl md:text-xl lg:text-2xl rounded-xl lg:m-20">
            Growing up in New York City exposed me to a melting pot of culture and music. Being a DJ means that I get to provide the energy and life of an event! Theres something about seeing dance and laughter !
        <br />
        <br />
            Even after a decade on the turntables, I am still just as passionate about my craft as ever and I am excited to make excited moments with you. 
        </p>
       
  
      </div>
   </section>
   
  </div>
  
</div>

    </div>
    </>
  );
}

export default about;
