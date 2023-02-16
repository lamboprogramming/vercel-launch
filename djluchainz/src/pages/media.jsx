import Image from 'next/image'
import b1 from '../../public/assets/media/bella1.JPG'
import b2 from '../../public/assets/media/bella2.JPG'
import b3 from '../../public/assets/media/bella3.JPG'
import b4 from '../../public/assets/media/bella4.JPG'
import b5 from '../../public/assets/media/bella5.JPG'
import hall1 from '../../public/assets/media/hall1.JPG'
import hall2 from '../../public/assets/media/hall2.JPG'
import hall3 from '../../public/assets/media/hall3.JPG'
import hall4 from '../../public/assets/media/hall4.JPG'
import hall5 from '../../public/assets/media/hall5.JPG'
import hall6 from '../../public/assets/media/hall6.JPG'
import hall7 from '../../public/assets/media/hall7.JPG'
import hall8 from '../../public/assets/media/hall8.JPG'
import hall9 from '../../public/assets/media/hall9.JPG'
import hall10 from '../../public/assets/media/hall10.JPG'
import hall11 from '../../public/assets/media/hall11.JPG'
import hall12 from '../../public/assets/media/hall12.JPG'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Mediasounds from '../../components/Mediasounds'


const Media = () => {
  return (
    <div>
      <Navbar />
      <Mediasounds />
    <div className='bg-gradient-to-r from-fuchsia-700 to-indigo-500 hover:from-indigo-500 hover:to-fuchsia-500 font-[Abel] grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3 pt-8 p-20'>
    {/* Bella */}
    <div className='self-center text-center bg-black '>
      <Image className='border-4 border-black rounded-md ' src={b1} alt="/" />
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
    
    <div className='self-center text-center bg-black'>
    <Image className='border-4 border-black rounded-md' src={hall1} alt="/" />
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
