import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import HeroPage from '../../components/Heropage'
import Footer from '../../components/Footer'
import Link from 'next/link'
import logo from '../../public/images/logo1.png'
import { useState } from 'react'
import Navbar from '../../components/Navbar'


const inter = Inter({ subsets: ['latin'] })



export default function Home() {
    const [navbar, setNavbar] = useState(false);
  return (
    
    <>
      <Navbar />
      <HeroPage />
      <Footer />
    </>
  )
}
