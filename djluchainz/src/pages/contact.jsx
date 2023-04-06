import Image from 'next/image'
import twin from '../../public/images/twindj.png'
import Navbar from '../../components/Navbar'
import ContactForm from 'components/ContactForm'
import Footer from '../../components/Footer'
import { FaSoundcloud, FaMixcloud }from 'react-icons/fa'
import { GrInstagram } from 'react-icons/gr'



const Contact = () => {
 


    return (
      <>
      <Navbar />
           {/* Socials */}
           <div className='bg-white'>
           <div className='flex pt-8 space-x-10 justify-evenly '>
           <div>
           <a
           href="https://soundcloud.com/djluchainz">
           <FaSoundcloud className="p-2 mt-4 ml-5 text-5xl text-orange-400 transition duration-200 border-4 border-orange-500 border-solid rounded-full shadow-xl hover:scale-125 " />
           </a>
           <h3 className="mt-3 font-extrabold tracking-widest text-black text-md nav-links"></h3>
           </div>
        
          {/* MIXCLOUD */}
           <div>
         <a href="https://www.mixcloud.com/">
         <FaMixcloud className="p-2 mt-5 ml-2 text-5xl text-black transition duration-200 border-4 border-black border-solid rounded-full shadow-xl hover:scale-125"/>
         </a>
         <h3 className="mt-3 font-extrabold tracking-widest text-black text-md nav-links "></h3>
           </div>
       
          {/* INSTAGRAM */}
           <div>
         <a href="https://www.instagram.com/djluchainz/">
         <GrInstagram className="p-2 mt-4 ml-5 text-5xl text-orange-600 transition duration-200 border-4 border-solid rounded-full shadow-xl border-rose-600 hover:scale-125" />
         </a>
         <h3 className="mt-3 font-extrabold tracking-widest text-black text-md nav-links"></h3>
           </div>
           </div>
           </div>
      
      <ContactForm />
      <Footer />
      </>
    );
  }

  
  export default Contact;
