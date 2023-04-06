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
  <div className="mx-auto my-2">
  
      {/* Twin photo */}
      <div className='flex justify-center'>
      <div>
        <Image src={dassa} alt="/" priority className='pt-4 pl-4 pr-4 rounded-full'/>

     
      </div>
     </div>
 
    <section className="p-8 mb-6 text-center md:mb-16">
    
     {/* Col 1 Bio */}
      <div className='grid grid-cols-4 tracking-widest text-black  font-[200] '>

      <div className="col-span-4 col-start-1 text-left ">
      <p className='mb-4 leading-10'>LuChainz is a highly experienced and sought-after DJ with over a decade of experience in the music industry. Based out of New York City, LuChainz has traveled all country, playing at some of the most exclusive events and venues.</p>
      </div> 

      <div className='col-span-4 col-start-1 text-left '>
      <p className='mb-2 leading-10'>Known for his exceptional mixing skills, Chainz has an ear for music that can keep a dance floor packed all night long. His versatility in music genres, from house to hip-hop OR reggae to espanol  - is proof that he can cater to any crowd and keep them entertained. </p>
      </div>
      </div>
      
       
       {/* Col 2 Bio */}
    <div className='grid grid-cols-4 tracking-widest text-black  font-[200] '>
 
    <div className='col-span-4 col-start-1 mt-2 text-left'>
    <p className='mb-4 leading-10'>Adept in reading the crowd and adjusting the music to match their energy, Chainz has ability to create seamless and dynamic flows of music to keep the party going. </p>
    </div>
        
    <div className='col-span-4 col-start-1 text-left'>
    <p className='leading-10'>Apart from his technical skills, He is also an expert in event planning and collaboration. He can work with event planners and organizers to ensure that the music complements the overall vibe and theme of the event, and he is always willing to go above and beyond to make sure everything runs smoothly.
    </p>
    <p className='mt-4 leading-10'> 
    When booking LuChainz, expect a reliable and professional DJ with a passion for music and a commitment to having an unforgettable experience.
    </p>
    </div>
        
        </div>
       


      
       
  
      
   </section>
   
  </div>
  {/* Testimonials */}
 
  <Testimonials />
  

  
</div>
<Footer />
    
    </>
  );
}

export default about;
