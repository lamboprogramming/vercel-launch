import Image from 'next/image'
import img from '../public/images/ludj.jpeg'

const Imgbanner = () => {
  return (
   
    <div className="sm:hidden">
      <Image src={img} alt="/" className="w-full h-full overflow-hidden " />
    </div>
  );
}

export default Imgbanner;
