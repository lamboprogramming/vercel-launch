import Image from 'next/image'
import img from '../public/images/ludj.jpeg'

const Imgbanner = () => {
  return (
   <>
    <div className="flex justify-center sm:hidden">
      <Image src={img} alt="/" className="" />
    </div>
    
    </>
  );
}

export default Imgbanner;
