import React from 'react'
import HeroComp from './pages/HeroComp'
import ProgramsComp from './pages/ProgramsComp'
import CardSlider from './CardSlider'
import VideoComp from './pages/VideoComp'
import GaleryComp from './pages/GaleryComp'
import AboutComp from './pages/AboutComp'
import Footer from './pages/Footer'

function Home() {
  return (
    <>
      <HeroComp />
      <ProgramsComp />
      <CardSlider />
      <VideoComp />
      <GaleryComp />
      <AboutComp />
    </>
  )
}

export default Home