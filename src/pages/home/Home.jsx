import React, { useEffect } from 'react'
import "./style.scss"
import HeroSection from '../../components/heroSection/HeroSection'
import Trending from '../../components/trending/Trending'
import Popular from '../../components/popular/Popular'
import TopRated from '../../components/topRated/TopRated'
import { useSelector } from 'react-redux'

const Home = () => {

  const isLightMode = useSelector((state) => state.lightMode.value);

    useEffect(() => {
      if (isLightMode) {
        document.body.classList.add('light');
      } else {
        document.body.classList.remove('light');
      }
    }, [isLightMode]); 
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