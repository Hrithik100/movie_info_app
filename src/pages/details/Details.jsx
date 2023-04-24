import React, { useEffect } from 'react'
import "./style.scss"
import useFetch from './../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import DetailsBanner from '../../components/details/detailsBanner/DetailsBanner';
import Cast from '../../components/details/cast/Cast';
import VideoSection from '../../components/details/videoSection/VideoSection';
import Similar from '../../components/details/carousels/similar/Similar';
import Recommend from '../../components/details/carousels/recommend/Recommend';
import { useSelector } from 'react-redux';

const Details = () => {

  const {mediaType, id} = useParams()
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`)
  const { data: credits, loading: creditsLoading } = useFetch(`/${mediaType}/${id}/credits`)
  const isLightMode = useSelector((state) => state.lightMode.value);

    useEffect(() => {
      if (isLightMode) {
        document.body.classList.add('light');
      } else {
        document.body.classList.remove('light');
      }
    }, [isLightMode]); 

  return (
    <div>
      <DetailsBanner video={data?.results[0]} crew={credits?.crew}/>
      <Cast data={credits?.cast} loading={creditsLoading}/>
      <VideoSection data={data} loading={loading}/>
      <Similar mediaType={mediaType} id={id}/>
      <Recommend mediaType={mediaType} id={id}/>
    </div>
  )
}

export default Details