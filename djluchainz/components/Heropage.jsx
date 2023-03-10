import Image from 'next/image'
import Link from 'next/link'
import bg from '../public/images/nighttime.jpg'
import twin from '../public/images/twindj.png'

import Social from './Social'
import hall12 from '../public/images/hall12.jpg'
import Animate from './Animate'


const Heropage = () => {


      const message = `Request a Quote`;
    
  return (
    <>
    {/* Banner and Images */}
    <div className="relative grid w-full h-full grid-cols-1 pb-10 bg-contain md:h-full hero" as={bg}> 
      <Image
        src={bg}
        as="preload"
        priority
        alt="/"
        fill
        sizes="(max-width: 768px) 100vw, (min-width: 768px) 50vw"
        cover="true"
        quality={100}
      />

      
      <div className="">
      <Image src={twin} className="relative mt-4 w-60" as="preload" alt="#"/>
      </div>
      
    </div>
    
    
  
    {/* Section 1 */}
    <div className="grid grid-cols-4 gap-4 mt-8">
    {/* Grid 1 */}
      <div className='grid col-span-4 col-start-1 p-4 text-center'>
        <p className='text-black mb-6 font-bold  text-[32px] md:text-[40px]  tracking-wider '>Select Event. Get Quote. Secure Date.</p>
      </div>
      {/* Grid 2 */}
      <div className='hidden'>
  
      </div>
    </div>

    <div>
      <Animate />
    </div>

    

   

     

    {/* Section 3 */}
    <div className="grid items-center grid-cols-1 p-8 mt-4 overflow-hidden justify-items-center">
    {/* Col 1 */}
      
        <div className='grid text-[18px]  text-black tracking-wider leading-10  '>

        

        {/* Paragraph 1 */}
        <p className='font-bold text-[24px]'>Dj LuChainz & PartyWithUsEntertainment is a business located in the <span className="text-red-800">New York City Metropolitan</span> area. </p>
        
    
       
        
       
        <br />
        {/* Paragraph 2 */}
        <p className='font-[200] text-[22px]'>
        With <span className="text-red-800 text-[24px]">over a decade</span> of experience planning and executing parties, we make sure to  prioritize professionalism & are very excited to make your next event special for you and your guests.
        </p>

        <br />
        
        {/* Paragraph 3 */}
        <p className='font-[200] text-[22px]'>
        <span className='italic '>We</span>  provides affordable pricing and services to accommodate our client and collaborative inquiries.
        </p>
        </div>
      </div>
      
  

    </>
      
  );
}
export default Heropage;
