import Image from 'next/image'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import AboutSection from './components/AboutSection'
import ProjectSection from './components/ProjectSection'
import EmailSection from './components/EmailSection'
import Footer from './components/Footer'
import AchievementsSection from './components/AchievementsSection'
import { ToastContainer } from 'react-toastify'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className='container mt-24 mx-auto px-10 py-5'>
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <ProjectSection />
        <EmailSection />
        <ToastContainer
          position='bottom-right'
          theme='dark'
        />
      </div>
      <Footer />
    </main>
  )
}