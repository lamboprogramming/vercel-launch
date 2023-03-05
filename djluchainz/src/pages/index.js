import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Navbar from 'components/Navbar'
import HeroPage from '../../components/Heropage'
import Footer from '../../components/Footer'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Navbar />
    <HeroPage />
    <Footer />
  
    </>
  )
}
