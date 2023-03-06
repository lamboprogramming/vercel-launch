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
  <div className='p-4 bg-white lg:p-0'>
  <div className="container px-6 mx-auto my-8 md:my-24">

    <section className="mb-20 text-center md:mb-32">
      {/* Bio */}
      <div className="self-center font-[Abel]">

      {/* Twin photo */}
        <div className="grid justify-center">
          <Image className="hidden max-w-sm rounded-md lg:block max-h-[98%] " priority src={twin} alt="/" />
        </div>

        <div className='grid grid-cols-1'>
                <p className="italic text-xl leading-10 tracking-widest text-black uppercase shadow-md md:text-3xl font-[Abel] text-center w-full "> Weddings, Baby Showers, Birthdays, Gaming, Corporate, Karaoke, Silent Parties, Sport Events, Holidays, Collaborations & more </p>
                </div>

       {/* Biography */}
        <p className="p-4 mt-4 leading-10 tracking-wider text-black md:text-xl lg:text-2xl lg:m-20">
            Growing up in New York City exposed me to a melting pot of culture and music. Being a DJ means that I get to provide the energy and life of an event! Theres something about seeing dance and laughter !
        <br />
        <br />
            Even after a decade on the turntables, I am still just as passionate about my craft as ever and I am excited to make excited moments with you. 
        </p>

        <p>
        Where can I get some?
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
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
