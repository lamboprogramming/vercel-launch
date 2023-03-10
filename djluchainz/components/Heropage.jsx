import Image from 'next/image'
import Link from 'next/link'
import bg from '../public/images/bg1.jpeg'
import twin from '../public/images/twindj.png'

import Social from './Social'
import hall12 from '../public/images/hall12.jpg'
import Animate from './Animate'


const Heropage = () => {


      const message = `Request a Quote`;
    
  return (
    <>
    
    {/* Section 1 */}
    <div className="grid grid-cols-4 gap-4 mt-8">
    {/* Grid 1 */}
      <div className='grid col-span-4 col-start-1 p-4 text-center'>
        <p className='text-black mb-6 font-bold  text-[32px] md:text-[40px]  tracking-wider '>Select Event. Get Quote. Secure Date.</p>
      </div>
      {/* Grid 2 */}
      <div className='hidden'>
  
      </div>
    </div>

    <div>
      <Animate />
    </div>

    
    <div className='grid grid-cols-1 gap-4 p-4 mt-2'>
    
      <div className='grid items-center justify-center text-[18px]  text-black tracking-wider leading-10  '>
      <p className='font-[600] text-[14px]'>
      Management will respond to all inquiries within 24 hours.
     </p>
      </div> 
    </div>
    </>
      
  );
}
export default Heropage;
