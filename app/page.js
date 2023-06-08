import Image from 'next/image'
import UploadImage from '../components/uplode/uploadImage'
import Hero from '@/components/sections/hero'
import Header from '../components/navigation/header'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 bg-white">
      <Header />
      <Hero />
      <UploadImage />
    </main>
  )
}
