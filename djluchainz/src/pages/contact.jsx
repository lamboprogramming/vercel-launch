import Image from 'next/image'
import twin from '../../public/images/twindj.png'
import Navbar from '../../components/Navbar'
import ContactForm from 'components/ContactForm'
import Footer from '../../components/Footer'
import { FaSoundcloud, FaMixcloud }from 'react-icons/fa'
import { GrInstagram } from 'react-icons/gr'
import Bio from 'components/Bio'



const Contact = () => {
 


    return (
      <div className="overflow-hidden">
      <Navbar />
           {/* Party Banner */}
        <div className='p-2 bg-slate-100'>
        <div className="w-full mx-auto font-sans text-center ">
        <p className="text-2xl italic tracking-wider text-black capitalize lg:text-5xl font-[400]">PartyWithUs Entertainment</p>
        </div> 
        </div>
        {/* Party Banne End */}
      <Bio />
           {/* Socials */}
           
           <div className='flex p-2 space-x-10 justify-evenly bg-slate-100'>
           <div>
           <a
           href="https://soundcloud.com/djluchainz">
           <FaSoundcloud className="p-2 mt-4 ml-5 text-orange-400 transition duration-200 border-4 border-orange-500 border-solid rounded-full shadow-xl text-7xl hover:scale-125 " />
           </a>
           <h3 className="mt-3 font-extrabold tracking-widest text-black text-md nav-links"></h3>
           </div>
        
          {/* MIXCLOUD */}
           <div>
         <a href="https://www.mixcloud.com/">
         <FaMixcloud className="p-2 mt-5 ml-2 text-black transition duration-200 border-4 border-black border-solid rounded-full shadow-xl text-7xl hover:scale-125"/>
         </a>
         <h3 className="mt-3 font-extrabold tracking-widest text-black text-md nav-links "></h3>
           </div>
       
          {/* INSTAGRAM */}
           <div>
         <a href="https://www.instagram.com/djluchainz/">
         <GrInstagram className="p-2 mt-4 ml-5 text-orange-600 transition duration-200 border-4 border-solid rounded-full shadow-xl text-7xl border-rose-600 hover:scale-125" />
         </a>
         <h3 className="mt-3 font-extrabold tracking-widest text-black text-md nav-links"></h3>
           </div>
           </div>
           
      
      <ContactForm />
      <Footer />
      </div>
    );
  }

  
  export default Contact;
