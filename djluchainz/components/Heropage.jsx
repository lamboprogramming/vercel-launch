import Image from 'next/image'
import Link from 'next/link'
import bg from '../public/images/nighttime.jpg'
import twin from '../public/images/twindj.png'

import Social from './Social'
import hall12 from '../public/images/hall12.jpg'


const Heropage = () => {


      const message = `Request a Quote`;
    
  return (
    <>
    {/* Banner and Images */}
    <div className="relative grid h-full grid-cols-1 pb-10 hero" > 
      <Image
        src={bg}
        priority
        alt="/"
        fill
        sizes="(max-width: 768px) 100vw, (min-width: 768px) 50vw"
        cover="true"
        quality={100}
      />
      <Image src={twin} className="relative grid w-full max-w-sm pb-20 hero-content md:mb-20 md:justify-center md:max-w-md lg:mt-20 mb:20" alt="#"/>
    </div>
    
    {/* Request Quote Button */}      
    <div className="flex-col pb-10 mt-4 overflow-hidden text-center hero-content md:justify-center lg:pl-10 lg:ml-10 lg:">

      
        <Link href="/contact">
            <button className="px-10 py-6  text-2xl  text-black  border-4 border-gray-900 bg-gradient-to-r bg-transparent hover:bg-slate-50  sm:w-[20] mr-1 tracking-widest mt-2  lg:mt-4  w-full font-[600] ">{message}
            </button>
        </Link>  
    </div>

    {/* Section 1 */}
    <div className="grid grid-cols-4 gap-4">
    {/* Grid 1 */}
      <div className='grid col-span-4 col-start-1 p-4 text-center'>
        <p className='text-black mb-6 font-bold  text-[32px] md:text-[40px]  tracking-wider '>Choose Your Event. Get a Quote. Secure a Date.</p>
      </div>
      {/* Grid 2 */}
      <div className='hidden'>
  
      </div>
    </div>

    

     {/* Section 2  */}
     <div className='grid grid-cols-1 p-2 pr-8 bg-slate-900 md:gap-2 lg:grid-cols-4 md:grid-cols-2'>
     {/* Col 1 */}
     <div className="w-full pt-1 m-4 text-center h-26">
       <p className=' text-[46px] font-[400]  text-gray-200  tracking-wider '>1<span className="text-[28px] mr-1">,</span>200 </p>
       <p className='text-[18px] text-gray-300 tracking-widest'>Events Completed </p>
     </div>
 
 
     {/* Col 2 */}
     <div className="w-full pt-1 m-4 text-center h-26">
     <p className='text-[46px] font-[400]  text-gray-200 tracking-wider  '>12 </p>
     <p className='text-[18px] text-gray-300 tracking-widest'>Years of Experience</p>
   </div>
     {/* Col 3 */}
     <div className="w-full pt-1 m-4 text-center h-26 ">
       <p className='text-[46px] font-[400]  text-gray-200  tracking-wider '>8</p>
       <p className='text-[18px]  text-gray-300 tracking-widest '>Djs Mentored</p>
     </div>
     
     {/* Col 4 */}
     <div className="w-full pt-1 m-4 text-center h-26 ">
     <p className=' text-[46px] font-[400]  text-gray-200 tracking-wider '>1<span className="text-[28px] mr-1">,</span>100 </p>
     <p className='text-[18px] text-gray-300 tracking-widest' >Clients & Referrals</p>
   </div> 
    
     
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
