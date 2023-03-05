import { useState } from 'react'
import Image from 'next/image'
import twin from '../../public/images/twindj.png'
import Footer from '../../components/Footer'
import Social from '../../components/Social'
import emailjs from '@emailjs/browser'
import Navbar from '../../components/Navbar'
import Contactbanner from '../../components/Contactbanner'
import Testimonials from '../../components/Testimonials';

const Contact = () => {

 
  const [from_name, setFrom_Name] = useState('')
  const [from_email, setFrom_Email] = useState('')
  const [message, set_Message] = useState('')

  const submitInfo = () => {
    console.log(from_name + from_email + message)

    const emailContent = {
      from_name: from_name,
      from_email: from_email,
      message: message
  };

    emailjs
    .send('service_lmkiics',
      'template_rj5iyjm',
      emailContent,
      '8AerpHUhekMqelG24')
    .then((response) => {
      console.log('Success!', response.text, response.status);
    }, (error) => {
      console.log('Failed...', error.text)
    })
  }


  
    return (
      <>
      <Navbar />
      <Contactbanner />
  <div className="grid grid-cols-1 bg-gradient-to-r from-fuchsia-700 to-indigo-500 hover:from-indigo-500 hover:to-fuchsia-500 font-[Abel]">
  
  {/* Col 1 Bio & Social*/}
  <div className='p-4 lg:p-0'>
      <div className="container px-6 mx-auto my-8 md:my-24">

        <section className="mb-20 text-center md:mb-32">
          {/* Bio */}
          <div className="self-center font-[Abel]">

          {/* Twin photo */}
            <div className="grid justify-center">
              <Image className="hidden max-w-sm rounded-md lg:block max-h-[98%] " priority src={twin} alt="/" />
            </div>

           {/* Biography */}
            <p className="p-4 mt-4 leading-10 tracking-wider text-white border-t-4 border-l-4 border-yellow-400 shadow-xl md:text-xl lg:text-2xl rounded-xl lg:m-20">
                Growing up in New York City exposed me to a melting pot of culture and music. Being a DJ means that I get to provide the energy and life of an event! Theres something about seeing dance and laughter !
            <br />
            <br />
                Even after a decade on the turntables, I am still just as passionate about my craft as ever and I am excited to make excited moments with you. 
            </p>
           
      
          </div>
       </section>
       <Testimonials />
      </div>
        {/* Social */}
      <div className=' lg:hidden'>
      <Social />
      </div>
  </div>



  {/* Col 2 contact form */}
  <div className="container px-8 mx-auto rounded-xl">
  <section className="mb-6 text-center text-white ">
    <div className="max-w-[700px] mx-auto px-3 lg:px-6 py-6 shadow-2xl border-b-yellow-400 border-r-yellow-400 border-r-4 border-b-4 rounded-3xl  font-[Abel] ">
      <h2 className="mb-12 text-lg tracking-widest md:text-2xl ">CONTACT</h2>
      <div id="contact" action="" method="post">
        <div className="mb-2 form-group">
          <input type="text" className="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-violet-600 focus:outline-none" id="Input7"
            placeholder="Name"
            onChange={(event) => (setFrom_Name(event.target.value))}
            />
        </div>
        <div className="mb-6 form-group">
          <input type="email" className="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
            placeholder="Email address"
            onChange={(event) => (setFrom_Email(event.target.value))} />
        </div>
        <div className="mb-6 form-group">
          <textarea className="
            form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-violet-600 focus:outline-none
          " id="area" rows="3" placeholder="Message" onChange={(event) => (set_Message(event.target.value))}></textarea>
        </div>
 
        <button onClick={submitInfo} type="submit" className="lg:w-44 px-4 py-[.7%] text-xl md:text-2xl font-bold text-white lg:text-yellow-400  border-2 border-white lg:border-yellow-400 rounded-md bg-gradient-to-r from-fuchsia-700 to-indigo-500 hover:from-indigo-500 hover:to-fuchsia-500 sm:w-[20] mr-1 hover:rounded-3xl duration-500 nav-links tracking-widest mt-12 mb-4 font-[Abel] ">SEND</button>
      </div>
    </div>
  </section>
  </div>

  {/* policy */}
  <h3 className='p-4 text-sm leading-8 tracking-wider text-center text-white md:text-lg'>
  Questions regarding rates or collaboration email
  djluchainz@gmail.com or use the form above and our team will get back to shortly.
</h3>

  {/* Footer */}
  <Footer />
  
  </div>
  </>
    );
  }
  
  export default Contact;
