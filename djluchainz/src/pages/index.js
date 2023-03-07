import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Footer from '../../components/Footer'
import Link from 'next/link'
import { useState } from 'react'
import Navbar from '../../components/Navbar'
import Hero from '../../components/Hero'
import bg from '../../public/images/nighttime.jpg'
import twin from '../../public/images/twindj.png'




const inter = Inter({ subsets: ['latin'] })



export default function Home() {
    const [navbar, setNavbar] = useState(false);

    const backgroundImageStyle = {
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
      }

    const bgImage = {
        src: '/../public/images/nighttime.jpg',
        alt: 'Background image'
    };
  return (
    
    <>
      <Navbar />

      {/* Hero */}
      
      
      <div className="relative grid w-[100%] h-screen grid-cols-1 hero"> 
      <Image
          src={bgImage.src}
          alt={bgImage.alt}
          fill
          cover
          quality={100}
      />
      <div className="flex-col h-screen pb-20 lg:block hero-content lg:flex-row-reverse">
              <Image src={twin} className="max-w-sm p-2 md:p-0" alt="#"/>
          <div className="mt-4 text-center">

        {/* Contact Button */}
              <Link href="/contact">
                  <button className="px-6 py-[10%]  text-2xl  text-white   border-2 border-white rounded-md bg-gradient-to-r from-transparent to-indigo-900 hover:from-indigo-900 hover:to-fuchsia-900 sm:w-[20] mr-1  nav-links tracking-widest mt-2 md:mt-4 lg:mt-10 font-sans md:min-w-[450px] min-w-[350px] w-full ">Request a Quote
                  </button>
              </Link> 
          </div>     
      </div>
  </div>
        
    
      {/* Hero End */}
      
      <Footer />
    </>
  )
}
