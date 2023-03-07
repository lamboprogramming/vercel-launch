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
    <div className="relative grid h-screen grid-cols-1 pb-10 hero" style={backgroundImageStyle}> 
      <Image
        src={bg}
        alt="/"
        fill
        cover
        quality={100}
      />
      <Image src={twin} className="relative grid w-full max-w-sm pb-20 hero-content md:mb-20 md:justify-center md:max-w-md lg:mt-20 mb:20" alt="#"/>
    </div>
    
    {/* Contact Button */}      
    <div className="flex-col w-full pb-10 mt-4 overflow-hidden text-center hero-content md:justify-center">

      
        <Link href="/contact">
            <button className="px-20 py-6  text-2xl  text-black  border-2 border-black rounded-full bg-gradient-to-r bg-transparent hover:bg-indigo-300  sm:w-[20] mr-1 tracking-widest mt-2  lg:mt-4 font-san font-semibold w-full  ">Request a Quote
            </button>
        </Link>  
    </div>

    {/* Section 1 */}
    <div className="grid grid-cols-4 gap-4">
    {/* Grid 1 */}
      <div className='grid col-span-2 col-start-1 p-4'>
        <p className='text-black mb-6 font-bold  text-[24px] md:text-[40px]  tracking-wider '>Music is food for the soul and medicine for the spirit</p>
      </div>
      {/* Grid 2 */}
      <div className='hidden'>
  
      </div>
    </div>

    

     {/* Section 2  */}
     <div className='grid grid-cols-1 pr-8 tracking-widest md:gap-3 md:grid-cols-4 rounded-2xl'>
     {/* Col 1 */}
     <div className="w-full h-30 pt-1 m-4 text-center bg-[#feeeac]">
       <p className=' text-[48px] font-[900] text-black'>5.4K</p>
       <p className='text-[24px] font-[500] text-black font-sans p-1'>Bookings </p>
     </div>
 
 
     {/* Col 2 */}
     <div className="w-full h-30 pt-1 m-4 text-center bg-[#a4add5]">
     <p className='text-[48px] font-[900] text-black '>3.5K</p>
     <p className='text-[24px] font-[500] text-black font-sans p-1'>Clients</p>
   </div>
     {/* Col 3 */}
     <div className="w-full h-30 pt-1 m-4 text-center bg-[#A3B9A6]">
       <p className='text-[48px] font-[900] text-black '>20</p>
       <p className='text-[24px] font-[500] text-black font-sans p-1'>Countries Worldwide</p>
     </div>
     
     {/* Col 4 */}
     <div className="w-full h-30 pt-1 m-4 text-center bg-[#ffffff]">
     <p className='text-[48px] font-[900] text-black '>1</p>
     <p className='text-[24px] font-[500] text-black font-sans p-1'>Mission </p>
   </div>
    
     
     </div>

     

    {/* Section 3 */}
    <div className="grid grid-cols-4 grid-rows-3 pt-4">
    {/* Col 1 */}
      <div className='col-span-4 col-start-1 md:col-start-2 md:col-span-4'>
        <p className='text-[20px] md:text-[24px] text-black tracking-wider leading-10 mb-6 text-lg  p-6 m-2 '>
        <span className='font-bold text-[44px]'>F</span>or over a Decade, <span className='font-bold'>DJ LuChainz</span> has been amplifying events, energizing audiences, and creating buzz all over the United States. Thousands of events and clients later, our incredible service will make you feel confident and at ease. This highly curated DJ delivers amazing event experiences - 100% guaranteed.
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
