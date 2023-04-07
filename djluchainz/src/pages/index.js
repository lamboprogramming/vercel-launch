import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Footer from '../../components/Footer'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Heropage from '../../components/Heropage'
import Banner from '../../components/Banner'
import Testimonials from 'components/Testimonials'










const inter = Inter({ subsets: ['latin'] })



export default function Home() {

  return (
   
    <div className="overflow-hidden bg-slate-50">
        <Navbar />
        {/* Party Banner */}
        <div className='p-2 bg-slate-100'>
        <div className="w-full mx-auto font-sans text-center ">
        <p className="text-2xl italic tracking-wider text-black capitalize lg:text-5xl font-[400]">PartyWithUs Entertainment</p>
        </div> 
        </div>
        {/* Party Banne End */}
        <Banner />
        <Heropage />
        <Testimonials />
        <Footer />
    </div>
  )
}
