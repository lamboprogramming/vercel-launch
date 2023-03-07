import Image from 'next/image'
import twin from '../public/images/twindj.png'
import Link from 'next/link'
import Social from './Social'


const Heropage = () => {

  const bgImage = {
    src: '/../public/images/nighttime.jpg',
    alt: 'Background image'
};
    const backgroundImageStyle = {
        backgroundImage: `url(${bgImage.src})`,
        backgroundSize: "cover",
      }


    
  return (
    
    <div className="relative grid h-screen grid-cols-1 hero" style={backgroundImageStyle}> 
    <Image
        src={bgImage.src}
        alt={bgImage.alt}
        fill
        cover
        quality={100}
    />
    <div className="flex-col w-full h-screen pb-20 lg:block hero-content lg:flex-row-reverse md:mb-20">
            <Image src={twin} className="max-w-sm md:max-w-md lg:mt-20 mb:20 " alt="#"/>
        <div className="mt-4 text-center">

      {/* Contact Button */}
            <Link href="/contact">
                <button className="px-14 py-[10%]  text-2xl  text-white   border-2 border-white rounded-md bg-gradient-to-r from-transparent to-indigo-900 hover:from-indigo-900 hover:to-fuchsia-900 sm:w-[20] mr-1  nav-links tracking-widest mt-2  lg:mt-4 font-sans  w-full ">Request a Quote
                </button>
            </Link> 
        </div>     
    </div>
    </div>
      
      
  );
}
export default Heropage;
