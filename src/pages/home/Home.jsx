import React from 'react'
import "./style.scss"
import HeroSection from '../../components/heroSection/HeroSection'
import Trending from '../../components/trending/Trending'
import Popular from '../../components/popular/Popular'
import TopRated from '../../components/topRated/TopRated'

const Home = () => {
  return (
    <div  className='homePage'>
      <HeroSection/>
      <Trending/>
      <Popular/>
      <TopRated/>
    </div>
  )
}

export default Home