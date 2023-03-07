import Image from 'next/image'
import bg from '../public/images/nighttime.jpg'
import twin from '../public/images/twindj.png'
import Link from 'next/link'
import Social from './Social'

const Heropage = () => {
    const backgroundImageStyle = {
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
      }

    const bgImage = {
        src: '/../public/images/nighttime.jpg',
        alt: 'Background image'
    };
    
  return (
    
        <div className="grid-cols-1 gridh-auto hero"> 
            <Image
                src={bgImage.src}
                alt={bgImage.alt}
                fill
                cover
                quality={100}
            />
            <div className="flex-col h-screen lg:block hero-content lg:flex-row-reverse ">
                    <Image src={twin} className="max-w-md p-8 md:mx md:p-0" alt="#"/>
                <div className="mt-4 text-center">

              {/* Contact Button */}
                    <Link href="/contact">
                        <button className="px-[5rem] py-[10%]  text-2xl  text-white   border-2 border-white rounded-md bg-gradient-to-r from-transparent to-indigo-900 hover:from-indigo-900 hover:to-fuchsia-900 sm:w-[20] mr-1  nav-links tracking-widest mt-2 md:mt-4 lg:mt-10 font-sans md:min-w-[450px] min-w-[350px] w-full ">Request a Quote
                        </button>
                    </Link> 
                </div>     
            </div>
        </div>
      
      
  );
}
export default Heropage;
