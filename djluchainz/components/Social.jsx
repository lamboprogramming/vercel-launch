import { FaSoundcloud, FaMixcloud }from 'react-icons/fa'
import { GrInstagram } from 'react-icons/gr'

const Social = () => {
  return (
  <div className='flex items-center justify-between px-6 py-2 m-8 mt-4 md:justify-evenly md:m-28 rounded-3xl bg-gradient-to-r from-fuchsia-700 to-indigo-500 hover:from-indigo-500 hover:to-fuchsia-500 font-[Abel] min-w-lg'>
       {/* SOUNDCLOUD */}
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
  );
}

export default Social;