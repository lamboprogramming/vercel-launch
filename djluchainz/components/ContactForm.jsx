import { useRef } from 'react';
import emailjs from '@emailjs/browser'

const ContactForm = () => {

  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault()
    
    emailjs.sendForm('service_lmkiics', 'template_rj5iyjm', form.current, '8AerpHUhekMqelG24')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset()
    
    
  }

  return (
      <div className="grid grid-cols-1 font-sans bg-slate-100">
  {/* Col 2 contact form */}

  <div className="container mx-auto ">
  <section className="text-center ">
    <div className="max-w-md px-3 py-2 mx-auto bg-white shadow-2xl ">
      {/* Form Details Start */}
      <form ref={form} className='id="contact" action="" method="post" ' onSubmit={sendEmail}>
      <div>
      <h1 className='font-sans font-[500] text-3xl text-black text-left pb-2 sm:pb-4 pt-2 tracking-wide'>Contact Us</h1>
      {/* Name */}
        <div className="mb-6 ">
          <input type="text" className="w-full px-3 py-2 leading-tight text-gray-700 bg-white border rounded shadow appearance-none focus:outline-none focus:bg-white focus:border-blue-600 " name="name"
            placeholder="Name"
            />
        </div>
      {/* Email */}
        <div className="mb-6 ">
          <input type="email" className="w-full px-3 py-2 leading-tight text-gray-700 capitalize bg-white border rounded shadow appearance-none focus:outline-none focus:bg-white focus:border-blue-600" name="email"
            placeholder="Email address"
            />
        </div>
      {/* City/State */}
        <div className="mb-6 ">
          <input type="text" className="w-full px-3 py-2 leading-tight text-gray-700 bg-white border rounded shadow appearance-none focus:outline-none focus:bg-white focus:border-blue-600" name="location"
            placeholder="City/State" />
        </div>
      {/* Date */}
        <div className="mb-6 ">
          <input type="text" placeholder='Date of Event' className="w-full px-3 py-4 leading-tight text-gray-400 bg-white border rounded shadow appearance-none md:py-2 focus:outline-none focus:bg-white focus:border-blue-600" name="date" />
        </div>
      {/* Category */}
        <div className="mb-6 ">
          <select type="category" className="w-full px-3 py-2 leading-tight text-gray-400 bg-white border rounded shadow appearance-none focus:outline-none focus:bg-white focus:border-blue-600" id="category" name="category" placeholder="Event Type'">
          <option>Wedding (Up to $250/Hour)</option>
          <option>Corporate Event (Up to $175/Hour)</option>
          <option>Private Event (Up to $100/Hour)</option>
          <option>DJ Lessons (Up to $75/Hour)</option>
          <option>Collaboration</option>
          <option>Other</option>
          
          </select>
          
            
        </div>
   
        {/* Text */}
        <div >
          <textarea className="w-full px-3 py-2 leading-tight text-gray-700 bg-white border rounded shadow appearance-none focus:outline-none focus:bg-white focus:border-blue-600" id="area" rows="3" placeholder="Message" name="message" ></textarea>
        </div>
        <div className="flex justify-center">
        <button type="submit" className="items-center block px-16 py-4 mt-4 text-sm font-semibold leading-4 text-center text-white rounded-lg shadow-md bg-cyan-500 hover:bg-cyan-600">Submit</button>
        </div>
        
      </div>
      </form>
      {/* Form Details End */}
    </div>
    
  </section>
  </div>

  
  </div>
  );
}

export default ContactForm;
