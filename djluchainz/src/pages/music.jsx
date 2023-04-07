
import Cards from '../../components/Cards'
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar'
import Social from '../../components/Social'


const Music = () => {
   
    return (
        <div className="overflow-hidden bg-gradient-to-r from-fuchsia-700 to-indigo-500 hover:from-indigo-500 hover:to-fuchsia-500">
          <Navbar />
             {/* Party Banner */}
        <div className='p-4 bg-slate-100'>
        <div className="w-full mx-auto font-sans text-center">
        <div className='p-2 bg-slate-100'>
        <div className="w-full mx-auto font-sans text-center ">
        <p className="text-2xl italic tracking-wider text-black capitalize lg:text-5xl font-[400]">PartyWithUs Entertainment</p>
        </div> 
        </div>
        </div> 
        </div>
        {/* Party Banne End */}
          
          {/* Social */}
          <div className=' lg:hidden'>
            <Social />
          </div>
         <div className="">
            <Cards />
            <Footer />
          </div>
        </div>
    );
   
}

export default Music;
