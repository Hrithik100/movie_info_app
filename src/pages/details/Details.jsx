import React from 'react'
import "./style.scss"
import useFetch from './../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import DetailsBanner from '../../components/details/detailsBanner/DetailsBanner';
import Cast from '../../components/details/cast/Cast';
import VideoSection from '../../components/details/videoSection/VideoSection';
import Similar from '../../components/details/carousels/similar/Similar';
import Recommend from '../../components/details/carousels/recommend/Recommend';

const Details = () => {

  const {mediaType, id} = useParams()
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`)
  const { data: credits, loading: creditsLoading } = useFetch(`/${mediaType}/${id}/credits`)

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