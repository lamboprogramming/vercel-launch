import { useRef } from 'react';

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
      <div className="grid grid-cols-1 pt-8 font-sans bg-white">
  {/* Col 2 contact form */}
  <div className="container px-8 mx-auto rounded-xl">
  <section className="mb-6 text-center ">
    <div className="max-w-md px-3 py-6 mx-auto shadow-xl lg:px-6 ">
      {/* Form Details Start */}
      <form ref={form} className='id="contact" action="" method="post" ' onSubmit={sendEmail}>
      <div  >
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
          <input type="date" className="w-full px-3 py-2 leading-tight text-gray-400 uppercase bg-white border rounded shadow appearance-none focus:outline-none focus:bg-white focus:border-blue-600" name="date" />
        </div>
      {/* Category */}
        <div className="mb-6 ">
          <select type="category" className="w-full px-3 py-2 leading-tight text-gray-400 bg-white border rounded shadow appearance-none focus:outline-none focus:bg-white focus:border-blue-600" id="category" name="category placeholder='Event Type'">
          <option>Private Event</option>
          <option>Corporate Event</option>
          <option>Wedding</option>
          <option>Collaboration</option>
          <option>Other</option>
          
          </select>
          
            
        </div>
   
        {/* Text */}
        <div >
          <textarea className="w-full px-3 py-2 leading-tight text-gray-700 bg-white border rounded shadow appearance-none focus:outline-none focus:bg-white focus:border-blue-600" id="area" rows="3" placeholder="Message" name="message" ></textarea>
        </div>
        <div className="flex justify-center">
        <button type="submit" className="items-center block px-16 py-4 mt-8 text-sm font-semibold leading-4 text-center text-white rounded-lg shadow-md bg-cyan-500 hover:bg-cyan-600">Submit</button>
        </div>
        
      </div>
      </form>
      {/* Form Details End */}
    </div>
    
  </section>
  </div>


  

  {/* policy */}
  <h3 className='p-4 text-lg leading-8 tracking-wider text-center text-black md:text-lg font-[800]'>
  Questions regarding rates or collaboration email
  djluchainz@gmail.com or use the form above and our team will get back to shortly.
</h3>
  
  </div>
  );
}

export default ContactForm;
