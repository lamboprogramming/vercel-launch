import Image from 'next/image'
import Link from 'next/link'
import bg from '../public/images/nighttime.jpg'
import twin from '../public/images/twindj.png'
import Social from './Social'
import hall12 from '../public/images/hall12.jpg'


const Heropage = () => {


    const backgroundImageStyle = {
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
      }

      const message = `Let's Talk`;
    
  return (
    <>
    {/* Banner and Images */}
    <div className="relative grid h-full grid-cols-1 pb-10 hero" style={backgroundImageStyle}> 
      <Image
        src={bg}
        alt="/"
        fill
        cover
        quality={100}
      />
      <Image src={twin} className="relative grid w-full max-w-sm pb-20 hero-content md:mb-20 md:justify-center md:max-w-md lg:mt-20 mb:20" alt="#"/>
    </div>
    
    {/* Request Quote Button */}      
    <div className="flex-col w-full pb-10 mt-4 overflow-hidden text-center hero-content md:justify-center lg:pl-10 lg:ml-10 lg:">

      
        <Link href="/contact">
            <button className="px-20 py-6  text-2xl  text-black  border-4 border-gray-900 bg-gradient-to-r bg-transparent hover:bg-indigo-300  sm:w-[20] mr-1 tracking-widest mt-2  lg:mt-4  w-full font-[600] ">{message}
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
       <p className=' text-[46px] font-[400]  text-[#FEEEAC] tracking-wider '>1<span className="text-[28px] mr-1">,</span>200 </p>
       <p className='text-[18px] text-gray-300'>Events Completed </p>
     </div>
 
 
     {/* Col 2 */}
     <div className="w-full pt-1 m-4 text-center h-26">
     <p className='text-[46px] font-[400]  text-[#A4D5B7] tracking-wider  '>12 </p>
     <p className='text-[18px] text-gray-300'>Years of Experience</p>
   </div>
     {/* Col 3 */}
     <div className="w-full pt-1 m-4 text-center h-26 ">
       <p className='text-[46px] font-[400]  text-[#43B9A6] tracking-wider '>8</p>
       <p className='text-[18px]  text-gray-300  '>Djs Mentored</p>
     </div>
     
     {/* Col 4 */}
     <div className="w-full pt-1 m-4 text-center h-26 ">
     <p className=' text-[46px] font-[400]  text-[#FEEEAC] tracking-wider '>1<span className="text-[28px] mr-1">,</span>100 </p>
     <p className='text-[18px] text-gray-300 ' >Clients & Referrals</p>
   </div> 
    
     
     </div>

     

    {/* Section 3 */}
    <div className="grid grid-cols-4 pt-4">
    {/* Col 1 */}
      <div className='col-span-4 col-start-1 text-center md:text-left'>
        <p className='text-[20px]  text-black tracking-wider leading-10 mb-6 p-6 m-2 '>

        {/* Paragraph 1 */}
        <p>
        <span className='font-[600] text-[44px] '>Having a Party ?</span>
        <br />
        <br/>
        Well, you are in luck because PartyWithUs Entertainment & <span className='text-red-700 text-[22px]'>Dj LuChainz </span>have a goal  to make sure you and your guests have fun and enjoy your special event as much as possible.
        <br/>
        <br/>
        </p>
        
        {/* Paragraph 2 */}
        <p>
        Our team brings over a decade of experience planning and executing parties all over <span className='text-red-700 text-[22px]'>New York </span> area and throughout the United States. 
        </p>
        <br/>
        
        {/* Paragraph 3 */}
        <p>
         Many of the parties we do are <span className='text-red-700 text-[22px]'>return customers & referrals</span>. You always get the best price for the professional services you want. You can be confident everything will go smoothly and that everyone will have a great time. 
        </p>
        
        </p>
      </div>
      
      {/* Col 2 */}
      <div></div>

      {/* Col 3 */}
      <div></div>
      {/* Col 4 */}
      <div></div>
    </div>

   







    
      {/* Button */}
      <div className="mb-6 ml-4 text-center md:text-left">
      <Link href="/media">
      <button className="px-16 py-6  text-2xl  text-black  border-2 border-black rounded-full bg-gradient-to-r bg-transparent hover:bg-indigo-300  sm:w-[20] mr-1 tracking-widest mt-2  lg:mt-4 font-san font-semibold max-w-[300px] self-center ">Learn More
      </button>
      </Link>
      
      </div>
   
      
    
    
    </>
      
  );
}
export default Heropage;
