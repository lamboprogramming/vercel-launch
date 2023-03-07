import { useState } from 'react'
import Image from 'next/image'
import twin from '../../public/images/twindj.png'
import Footer from '../../components/Footer'
import emailjs from '@emailjs/browser'
import Navbar from '../../components/Navbar'
import Contactbanner from '../../components/Contactbanner'


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
  <div className="grid grid-cols-1 font-sans bg-white">
  

  {/* Col 2 contact form */}
  <div className="container px-8 mx-auto rounded-xl">
  <section className="mb-6 text-center text-black ">
    <div className="max-w-[700px] mx-auto px-3 lg:px-6 py-6 shadow-2xl ">
      <h2 className="mb-4 font-sans tracking-widest text-left 12 text-md md:text-2xl">Tell us about your event...</h2>
      {/* Form Details Start */}
      <div id="contact" action="" method="post">
        <div className="mb-6 form-group">
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
          <input type="email" className="block w-full px-3 py-2 m-0 text-base font-normal text-gray-700 transition ease-in-out bg-white border border-gray-300 border-solid rounded form-control bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
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
 
        <button onClick={submitInfo} type="submit" className=" px-16 py-3  text-2xl  text-black  border-2 border-black rounded-full bg-gradient-to-r bg-transparent hover:bg-indigo-300  sm:w-[20] mr-1 tracking-widest mt-2  lg:mt-4 font-san font-semibold  self-center     ">Submit</button>


       

        
      </div>
      {/* Form Details End */}
    </div>
  </section>
  </div>

  

  {/* policy */}
  <h3 className='p-4 text-lg leading-8 tracking-wider text-center text-black md:text-lg font-[800]'>
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
