import Musicbanner from '../../components/Musicbanner'
import Cards from '../../components/Cards'
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar'


const Music = () => {
   
    return (
      <>
      <Navbar />
      <div className="h-screen bg-gradient-to-r from-fuchsia-700 to-indigo-500 hover:from-indigo-500 hover:to-fuchsia-500">
      <div className=" bg-gradient-to-r from-fuchsia-700 to-indigo-500 hover:from-indigo-500 hover:to-fuchsia-500">
      <Musicbanner  />
      <Cards />
      <Footer />
  </div>
    </div>
    </>
    );
   
}

export default Music;
