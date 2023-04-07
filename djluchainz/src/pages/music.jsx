import Musicbanner from '../../components/Musicbanner'
import Cards from '../../components/Cards'
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar'
import Social from '../../components/Social'


const Music = () => {
   
    return (
      <div className="overflow-scroll ">
      <div className="bg-gradient-to-r from-fuchsia-700 to-indigo-500 hover:from-indigo-500 hover:to-fuchsia-500">
      <Navbar />
      <Musicbanner  />
        {/* Social */}
        <div className=' lg:hidden'>
        <Social />
        </div>
      <div className="h-screen bg-gradient-to-r from-fuchsia-700 to-indigo-500 hover:from-indigo-500 hover:to-fuchsia-500">
      <div className=" bg-gradient-to-r from-fuchsia-700 to-indigo-500 hover:from-indigo-500 hover:to-fuchsia-500">
      
      <Cards />
      
      <div>
        
      </div>
      
      <Footer />
  </div>
    </div>
    </div>
    </div>
    );
   
}

export default Music;
