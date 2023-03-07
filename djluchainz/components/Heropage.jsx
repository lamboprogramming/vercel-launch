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
            <button className="px-20 py-6  text-2xl  text-black  border-2 border-black rounded-full bg-gradient-to-r bg-transparent hover:bg-indigo-300  sm:w-[20] mr-1 tracking-widest mt-2  lg:mt-4 font-sans font-semibold w-full  ">Request a Quote
            </button>
        </Link>  
    </div>

    {/* Section 1 */}
    <div className="grid grid-cols-4 gap-4">
    {/* Grid 1 */}
      <div className='grid col-span-4 col-start-1 p-4 text-center'>
        <p className='text-black mb-6 font-bold  text-[24px] md:text-[40px]  tracking-wider '>Choose Your Event. Get a Quote. Secure a Date.</p>
      </div>
      {/* Grid 2 */}
      <div className='hidden'>
  
      </div>
    </div>

    

     {/* Section 2  */}
     <div className='grid grid-cols-1 pr-8 tracking-widest md:gap-3 md:grid-cols-4 rounded-2xl'>
     {/* Col 1 */}
     <div className="w-full h-30 pt-1 m-4 text-center bg-[#feeeac]">
       <p className=' text-[48px] font-[900] text-black'>Over 2,000</p>
       <p className='text-[24px] font-[500] text-black font-sans p-1'>Events Done </p>
     </div>
 
 
     {/* Col 2 */}
     <div className="w-full h-30 pt-1 m-4 text-center bg-[#a4add5]">
     <p className='text-[48px] font-[900] text-black '>More than 500</p>
     <p className='text-[24px] font-[500] text-black font-sans p-1'>Satisfied Clients</p>
   </div>
     {/* Col 3 */}
     <div className="w-full h-30 pt-1 m-4 text-center bg-[#A3B9A6]">
       <p className='text-[48px] font-[900] text-black '>Over a Decade</p>
       <p className='text-[24px] font-[500] text-black font-sans p-1'>Of Experience</p>
     </div>
     
     {/* Col 4 */}
     <div className="w-full h-30 pt-1 m-4 text-center bg-[#ffffff]">
     <p className='text-[48px] font-[900] text-black '>5+ Djs</p>
     <p className='text-[24px] font-[500] text-black font-sans p-1'>Mentored</p>
   </div> 
    
     
     </div>

     

    {/* Section 3 */}
    <div className="grid grid-cols-4 pt-4">
    {/* Col 1 */}
      <div className='col-span-6 col-start-1 md:col-start-6 md:col-span-4 text-[Inria] text-left'>
        <p className='text-[30px] font-[300] text-black tracking-wider leading-10 mb-6 p-6 m-2 '>
        <span className='font-bold text-[44px]'>F</span>or over a Decade, <span className='font-bold'>DJ LuChainz</span> has been amplifying events, energizing audiences, and creating buzz all over the United States. Thousands of events and clients later, this highly curated DJ delivers  our incredible services will make you feel confident in booking us. amazing event experiences - 100% guaranteed.
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
      <div className="hidden mb-6 text-center">
      <Link href="/media">
      <button className="px-6 py-6  text-2xl  text-black  border-2 border-black rounded-full bg-gradient-to-r bg-transparent hover:bg-indigo-300  sm:w-[20] mr-1 tracking-widest mt-2  lg:mt-4 font-san font-semibold max-w-[300px] self-center ">Learn More
      </button>
      </Link>
      
      </div>
   
      
    
    
    </>
      
  );
}
export default Heropage;
