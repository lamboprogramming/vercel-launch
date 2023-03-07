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
  return (
        <div className="fixed grid w-full h-screen grid-cols-1 hero " style={backgroundImageStyle}> 
            <div className="flex-col lg:block hero-content lg:flex-row-reverse">
                <Image src={twin} className="max-w-lg p-4 shadow-3xl rounded-xl lg:hidden" alt="#"/>
                <div className="mt-4 text-center">
 
                    <h1 className="hidden mt-4 mb-4 font-sans text-5xl font-bold tracking-wider text-center shadow-2xl md:text-7xl lg:block ">DJ LUCHAINZ</h1>

              {/* Contact Button */}
              <Link href="/contact">
              <button className="px-[8rem] py-[3%]  text-2xl  text-white   border-2 border-white rounded-md bg-gradient-to-r from-transparent to-indigo-900 hover:from-indigo-900 hover:to-fuchsia-900 sm:w-[20] mr-1  nav-links tracking-widest mt-2 md:mt-4 lg:mt-10 font-sans ">Request a Quote
              </button>
         </Link> 
                </div>  

                
                
            </div>
          
            
      </div>
      
  );
}
export default Heropage;
