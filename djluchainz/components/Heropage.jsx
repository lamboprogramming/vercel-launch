import Image from 'next/image'
import Link from 'next/link'
import bg from '../public/images/bg1.jpeg'
import img from '../public/images/ludj.jpeg'

import Social from './Social'
import hall12 from '../public/images/hall12.jpg'
import Animate from './Animate'
import Testimonials from './Testimonials'


const Heropage = () => {


      const message = `Request a Quote`;
    
  return (
    <>
    
    {/* Section 1 */}
    <div>
      <Animate />
      <Image src={img} alt="/" />
      <Testimonials />
    </div>

 
    </>
      
  );
}
export default Heropage;
