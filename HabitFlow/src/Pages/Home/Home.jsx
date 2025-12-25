import React from 'react'
import HomeHeading from '../../components/HomeComponents/HomeHeading'
import HeroSection from '../../components/HomeComponents/HeroSection'

const Home = () => {
  return (
    <div className='w-full lg:max-w-6xl lg:mx-auto py-2'>
     <HomeHeading/>
     <HeroSection/>

    </div>
  )
}

export default Home
