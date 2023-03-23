import Image from 'next/image'
import twin from '../../public/images/twindj.png'
import emailjs from '@emailjs/browser'
import Navbar from '../../components/Navbar'
import ContactForm from 'components/ContactForm'
import Footer from '../../components/Footer'



const Contact = () => {
 


    return (
      <>
      <Navbar />
      <ContactForm />
      <Footer />
      </>
    );
  }

  
  export default Contact;
