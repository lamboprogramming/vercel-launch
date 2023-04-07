
import Cards from '../../components/Cards'
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar'
import Social from '../../components/Social'


const Music = () => {
   
    return (
        <div className="w-full h-full overflow-hidden bg-gradient-to-r from-fuchsia-700 to-indigo-500 hover:from-indigo-500 hover:to-fuchsia-500">
          <Navbar />
          
          {/* Social */}
          <div className=' lg:hidden'>
            <Social />
          </div>
         <div className="bg-gradient-to-r from-fuchsia-700 to-indigo-500 hover:from-indigo-500 hover:to-fuchsia-500">
            <Cards />
            <Footer />
          </div>
        </div>
    );
   
}

export default Music;
