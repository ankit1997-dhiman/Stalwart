import React from 'react'
import HeroSection from './components/HeroSection'
import OurPhilosophyAbout from './components/OurPhilosophyAbout'
import MeetOurTeam from './components/MeetOurTeam'
import WorkWithUs from './components/WorkWithUs'
import InstagramPosts from '../home/components/InstagramPosts'
import Footer from '@/components/footer/Footer'

export const About = () => {
  return (
    <div>
      <HeroSection/>
      <OurPhilosophyAbout/>
      <MeetOurTeam/>
      <WorkWithUs/>
      <InstagramPosts/>
      <Footer/>
      

    </div>
  )
}
