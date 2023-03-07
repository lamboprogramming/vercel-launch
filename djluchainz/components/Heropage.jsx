import Image from 'next/image'
import bg from '../public/images/nighttime.jpg'
import twin from '../public/images/twindj.png'
import Link from 'next/link'
import Social from './Social'


const Heropage = () => {


    const backgroundImageStyle = {
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
      }


    
  return (
    <>
    
    <div className="relative grid h-full grid-cols-1 hero" style={backgroundImageStyle}> 
      <Image
        src={bg}
        alt="/"
        fill
        cover
        quality={100}
      />
      <Image src={twin} className="relative grid w-full max-w-sm pb-20 hero-content md:mb-20 md:justify-center md:max-w-md lg:mt-20 mb:20" alt="#"/>
    </div>
    
            
    <div className="flex-col w-full pb-10 mt-4 overflow-hidden text-center hero-content md:justify-center">

      {/* Contact Button */}
        <Link href="/contact">
            <button className="px-20 py-6  text-3xl  text-black  border-2 border-black rounded-md bg-gradient-to-r bg-transparent hover:bg-indigo-300  sm:w-[20] mr-1  nav-links tracking-widest mt-2  lg:mt-4 font-sans  w-full  ">Request a Quote
            </button>
        </Link>  
      </div>
    
    </>
      
  );
}
export default Heropage;
