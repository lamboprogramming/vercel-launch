
import Image from 'next/image'
import tems from '../public/images/tems.png'
import hiphop from '../public/images/migos.png'
import pop from '../public/images/pop2.jpg'
import spanish from '../public/images/baabaa.jpg'
import Link from 'next/link'



const Cards = () => {
  return (
    <div className="max-w-full m-10 text-white p-15 md:p-10 md:m-5 h-min rounded-3xl bg-gradient-to-r from-fuchsia-700 to-indigo-500 hover:from-indigo-500 hover:to-fuchsia-500">
    <div className="grid gap-8 font-sans md:grid-cols-2 md:p-10 lg:grid-cols-4 ">

    {/* Card #1 Carribean*/}
      <div className="overflow-hidden rounded-t-full shadow-2xl">
      <Image className="w-full" src={tems} alt="tems"/>
      <div className="px-6 py-4">
        <div className="flex justify-center mb-2 text-xl font-bold ">
        {/* BUTTON TO CARRIBEAN MUSIC */}
        <Link href="https://soundcloud.com/djluchainz">
        <button className="text-white lg:w-36 px-6 py-2 text-sm font-bold border-2 rounded-md bg-gradient-to-r from-fuchsia-700 to-indigo-500 hover:from-indigo-500 hover:to-fuchsia-500 sm:w-[24] mr-1 hover:rounded-3xl duration-500 tracking-widest hover:border-white hidden md:block ">CARIBBEAN</button>
        </Link>
        </div>
      </div>
      {/* HASHTAGS TO CARRBIBEAN MUSIC */}
      <div className="flex flex-wrap items-center justify-center px-6 pt-1 pb-4 font-sans text-xl tracking-widest ">
        <span className="inline-block px-3 py-1 mb-2 mr-2 font-semibold rounded-full text-gray-50 text-md">#afrobeats</span>
        <span className="inline-block px-3 py-1 mb-2 mr-2 font-semibold rounded-full text-gray-50 text-md">#soca</span>
        <span className="inline-block px-3 py-1 mb-2 mr-2 font-semibold rounded-full text-gray-50 text-md">#kompa</span>
        <span className="inline-block px-3 py-1 mb-2 mr-2 font-semibold rounded-full text-gray-50 text-md">#dancehall</span>
        <span className="inline-block px-3 py-1 mb-2 mr-2 font-semibold rounded-full text-gray-50 text-md">#reggae</span>
        <span className="inline-block px-3 py-1 mb-2 mr-2 font-semibold rounded-full text-gray-50 text-md">#calypso</span>
      </div>
      </div>
      

    {/* Card #2 Spanish */}
      <div className="overflow-hidden rounded-t-full shadow-2xl">
      <Image className="w-full" src={spanish} alt="badbunny"/>
      <div className="px-6 py-4">
        <div className="flex justify-center mb-2 text-xl font-bold">
    {/* LINK TO SPANISH MUSIC */}
        <Link href="https://soundcloud.com/djluchainz">
        <button className="lg:w-36 px-6 py-2 text-sm font-bold text-white border-2 rounded-md bg-gradient-to-r from-fuchsia-700 to-indigo-500 hover:from-indigo-500 hover:to-fuchsia-500 sm:w-[24] mr-1 hover:rounded-3xl duration-500 tracking-widest hidden md:block  ">ESPANOL</button>
        </Link>
        </div> 
      </div>
      {/* HASHTAGS TO SPANISH MUSIC */}
      <div className="flex flex-wrap items-center justify-center px-6 pt-1 pb-2 font-sans text-xl tracking-widest">
        <span className="inline-block px-3 py-1 mb-2 mr-2 font-semibold rounded-full text-gray-50 text-md">#reggateton</span>
        <span className="inline-block px-3 py-1 mb-2 mr-2 font-semibold rounded-full text-gray-50 text-md">#denbow</span>
        <span className="inline-block px-3 py-1 mb-2 mr-2 font-semibold rounded-full text-gray-50 text-md">#bachata</span>
        <span className="inline-block px-3 py-1 mb-2 mr-2 font-semibold rounded-full text-gray-50 text-md">#salsa</span>
        <span className="inline-block px-3 py-1 mb-2 mr-2 font-semibold rounded-full text-gray-50 text-md">#latintrap</span>
        <span className="inline-block px-3 py-1 mb-2 mr-2 font-semibold rounded-full text-gray-50 text-md">#meringue</span>
      </div>
      </div>

      
    {/* Card #3 Hip Hop*/}
      <div className="overflow-hidden rounded-t-full shadow-2xl">
      <Image className="w-full" src={hiphop} alt="migos"/>
      <div className="px-6 py-4">
        <div className="flex justify-center mb-2 text-xl font-bold">
    {/* BUTTON TO HIPHOP MUSIC */}
        <Link href="https://soundcloud.com/djluchainz">
        <button className="lg:w-36 px-6 py-2 text-sm font-bold text-white border-2 rounded-md bg-gradient-to-r from-fuchsia-700 to-indigo-500 hover:from-indigo-500 hover:to-fuchsia-500 sm:w-[24] mr-1 hover:rounded-3xl duration-500 tracking-widest hidden md:block  ">HIP HOP</button>
        </Link>
        </div>
      </div>
    {/* HASHTAGS TO HIPHOP MUSIC */}
      <div className="flex flex-wrap items-center justify-center px-6 pt-1 pb-2 font-sans text-xl tracking-widest">
        <span className="inline-block px-3 py-1 mb-2 mr-2 font-semibold rounded-full text-gray-50 text-md">#trap</span>
        <span className="inline-block px-3 py-1 mb-2 mr-2 font-semibold rounded-full text-gray-50 text-md">#r&b</span>
        <span className="inline-block px-3 py-1 mb-2 mr-2 font-semibold rounded-full text-gray-50 text-md">#soul</span>
        <span className="inline-block px-3 py-1 mb-2 mr-2 font-semibold rounded-full text-gray-50 text-md">#rap</span>
        <span className="inline-block px-3 py-1 mb-2 mr-2 font-semibold rounded-full text-gray-50 text-md">#hiphop</span>
        <span className="inline-block px-3 py-1 mb-2 mr-2 font-semibold rounded-full text-gray-50 text-md">#drill</span>
      </div>
      </div>

      
    {/* Card #4 Pop*/}
      <div className="overflow-hidden rounded-t-full shadow-2xl">
      <Image className="w-full" src={pop} alt="Ari" />
      <div className="px-6 py-4">
        <div className="flex justify-center mb-2 text-xl font-bold">
    {/* BUTTON TO POP MUSIC PAGE*/}
        <Link href="https://soundcloud.com/djluchainz">
        <button className="lg:w-36 px-6 py-2 text-sm font-bold text-white border-2 rounded-md bg-gradient-to-r from-fuchsia-700 to-indigo-500 hover:from-indigo-500 hover:to-fuchsia-500 sm:w-[24] mr-1 hover:rounded-3xl duration-500 tracking-widest hidden md:block  ">HOUSE</button>
        </Link>
        </div>
      </div>
      {/* HASHTAGS TO POP MUSIC PAGE*/}
      <div className="flex flex-wrap items-center justify-center px-6 pt-1 pb-2 font-sans text-xl tracking-widest ">
        <span className="inline-block px-3 py-1 mb-2 mr-2 font-semibold text-white rounded-full text-md">#rock</span>
        <span className="inline-block px-3 py-1 mb-2 mr-2 font-semibold rounded-full text-gray-50 text-md">#country</span>
        <span className="inline-block px-3 py-1 mb-2 mr-2 font-semibold rounded-full text-gray-50 text-md">#house</span>
        <span className="inline-block px-3 py-1 mb-2 mr-2 font-semibold rounded-full text-gray-50 text-md">#pop</span>
        <span className="inline-block px-3 py-1 mb-2 mr-2 font-semibold rounded-full text-gray-50 text-md">#dubstep</span>
        <span className="inline-block px-3 py-1 mb-2 mr-2 font-semibold rounded-full text-gray-50 text-md">#techno</span>
      </div>
      </div>
    </div>
    </div>
    
  );
}

export default Cards;
