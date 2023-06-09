import Image from 'next/image'
import UploadImage from '../components/uplode/uploadImage'
import Hero from '@/components/sections/hero'
import Header from '../components/navigation/header'
import UploadImagePopup from '../components/uplode/UploadImagePopup'
import Tools from '../components/sections/tools'
import { BrowserRouter, Route, Router } from 'react-router-dom'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-2 bg-white">
      <Header />
      <Hero />
      <UploadImagePopup />
      {/* <Tools /> */}
      {/* <UploadImage /> */}
    </main>
  )
}
