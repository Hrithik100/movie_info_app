import React, { useState } from "react";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import "./style.scss"
import Tabs from "../tabs/Tabs";
import useFetch from "../../hooks/useFetch";
import Carousel from "../carousel/Carousel";
import { useSelector } from "react-redux";

const Popular = () => {

    const [endpoint, setEndpoint] = useState("movie")
    const {data, loading} = useFetch(`/${endpoint}/popular`)

    const onTabChange = (tab) =>{
        setEndpoint(tab === "Movies" ? "movie" : "tv")
    }

    const isLightMode = useSelector((state) => state.lightMode.value);

  return (
    <div className={!isLightMode ? "carouselSection" : "carouselSectionLight"}>
      <ContentWrapper>
        <span className="carouselTitle">What's Popular</span>
        <Tabs data={["Movies", "TV Shows"]} onTabChange={onTabChange}/>
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} endpoint={endpoint}/>
    </div>
  );
};

export default Popular;