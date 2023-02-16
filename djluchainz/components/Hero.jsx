import Image from 'next/image'
import bg from '../public/assets/hero/nighttime.jpg'
import twin from '../public/assets/hero/twindj.png'
import Link from 'next/link'
import Social from '../components/Social'

const Heropage = () => {
    const backgroundImageStyle = {
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
      }
  return (
        <div className=" min-h-fit hero" style={backgroundImageStyle}> 
            <div className="flex-col hero-content lg:flex-row-reverse">
                <Image src={twin} className="max-w-sm shadow-3xl rounded-xl lg:hidden" alt="#"/>
                <div className="mt-4 text-center">
 
                    <h1 className="text-5xl font-bold font-[Abel] tracking-wider text-yellow-400 md:text-7xl text-center mt-4 mb-4 shadow-2xl hidden lg:block ">DJ LUCHAINZ</h1>

       

                    <p className="py-6 text-xl italic font-semibold leading-10 tracking-widest text-white uppercase shadow-md md:text-2xl lg:text-3xl md:mt-12 font-[Abel] p-4 lg:text-yellow-300  backdrop-blur-md"> Weddings, Baby Showers, Birthdays, Game Night, Corporate Events, Karaoke, Silent Parties, Sport Events, Holidays, Collaborations & more </p>

                     {/* Contact Button */}
                    <Link href="/contact">
                         <button className="lg:w-44 px-4 py-[.5%] md:text-2xl font-bold text-white lg:text-yellow-400  border-2 border-white lg:border-yellow-400 rounded-md bg-gradient-to-r from-fuchsia-700 to-indigo-500 hover:from-indigo-500 hover:to-fuchsia-500 sm:w-[20] mr-1  nav-links tracking-widest mt-2 md:mt-4 lg:mt-30 font-[Abel]">CONTACT
                         </button>
                    </Link> 

                </div>  
                
            </div>
            <div>
                
                </div>
            
      </div>
      
  );
}
export default Heropage;
