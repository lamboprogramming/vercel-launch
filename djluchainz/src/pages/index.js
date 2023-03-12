import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Footer from '../../components/Footer'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Heropage from '../../components/Heropage'
import Banner from '../../components/Banner'






const inter = Inter({ subsets: ['latin'] })



export default function Home() {

  return (
   
    <div className="bg-slate-200">
        <Navbar />
        <Banner />
        <Heropage />
        <Footer />
    </div>
  )
}
