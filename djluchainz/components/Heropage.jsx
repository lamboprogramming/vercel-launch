import Image from 'next/image'
import Link from 'next/link'
import Animate from './Animate'
import Imgbanner from './Imgbanner'


const Heropage = () => {


      const message = `Request a Quote`;
    
  return (
    <>
    
    {/* Section 1 */}
    <div>
      <Animate />
      <Imgbanner />
    </div>

 
    </>
      
  );
}
export default Heropage;
