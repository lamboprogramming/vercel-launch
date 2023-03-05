import Image from 'next/image'
import hall1 from '../../public/images/hall10.jpg'
import hall2 from '../../public/images/hall2.jpg'
import hall3 from '../../public/images/hall3.jpg'
import hall4 from '../../public/images/hall4.jpg'
import hall5 from '../../public/images/hall5.jpg'
import hall6 from '../../public/images/hall6.jpg'
import hall7 from '../../public/images/hall7.jpg'
import hall8 from '../../public/images/hall8.jpg'
import hall9 from '../../public/images/hall9.jpg'
import hall10 from '../../public/images/hall10.jpg'
import hall11 from '../../public/images/hall11.jpg'
import hall12 from '../../public/images/hall12.jpg'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Mediasounds from '../../components/Mediasounds'


const Media = () => {
  return (
    <div>
      <Navbar />
      <Mediasounds />
    <div className='bg-gradient-to-r from-fuchsia-700 to-indigo-500 hover:from-indigo-500 hover:to-fuchsia-500 font-[Abel] grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3 pt-8 p-20'>
    {/* Bella 
    <div className='self-center text-center bg-black '>
      <Image className='border-4 border-black rounded-md ' src={b5} alt="/" />
    </div>

    <div className='self-center text-center bg-black'>
    <Image className='border-4 border-black rounded-md' src={b2} alt="/" />
    </div>

    <div className='self-center text-center'>
    <Image className='border-4 border-black rounded-md' src={b3} alt="/" />
    </div>
    
    <div className='self-center text-center'>
    <Image className='border-4 border-black rounded-md' src={b4} alt="/" />
    </div>
    */}
    
    <div className='self-center text-center bg-black'>
    <Image className='border-4 border-black rounded-md' src={hall10} alt="/" />
    </div>
    
    <div className='self-center text-center bg-black'>
    <Image className='border-4 border-black rounded-md' src={hall2} alt="/" />
    </div>
    
    <div className='self-center text-center'>
    <Image className='border-4 border-black rounded-md' src={hall3} alt="/" />
    </div>
    
    <div className='self-center text-center'>
    <Image className='border-4 border-black rounded-md' src={hall4} alt="/" />
    </div>
    
    <div className='self-center text-center'>
    <Image className='border-4 border-black rounded-md' src={hall5} alt="/" />
    </div>
    
    <div className='self-center text-center'>
    <Image className='border-4 border-black rounded-md' src={hall6} alt="/" />
    </div>
    
    <div className='self-center text-center'>
    <Image className='border-4 border-black rounded-md' src={hall7} alt="/" />
    </div>
    
    <div className='self-center text-center'>
    <Image className='border-4 border-black rounded-md' src={hall8} alt="/" />
    </div>
    
    <div className='self-center text-center'>
    <Image className='border-4 border-black rounded-md' src={hall9} alt="/" />
    </div>
    
    <div className='self-center text-center'>
    <Image  className='border-4 border-black rounded-md'  src={hall10} alt="/" />
    </div>
    
    <div className='self-center text-center'>
    <Image className='border-4 border-black rounded-md' src={hall11} alt="/" />
    </div>
    <div className='self-center text-center'>
    <Image className='border-4 border-black rounded-md' src={hall12} alt="/" />
    </div>

    </div>
      <Footer />
    
    
 
 </div>
  );
}

export default Media;
