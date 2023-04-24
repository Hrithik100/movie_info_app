import React, { useState } from "react";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import "./style.scss"
import Tabs from "../tabs/Tabs";
import useFetch from "../../hooks/useFetch";
import Carousel from "../carousel/Carousel";
import { useSelector } from "react-redux";

const Trending = () => {

    const [endpoint, setEndpoint] = useState("day")
    const {data, loading} = useFetch(`/trending/all/${endpoint}`)

    const onTabChange = (tab) =>{
        setEndpoint(tab === "Day" ? "day" : "week")
    }

    const isLightMode = useSelector((state) => state.lightMode.value);

  return (
    <div className={!isLightMode ? "carouselSection" : "carouselSectionLight"}>
      <ContentWrapper>
        <span className="carouselTitle">Trending</span>
        <Tabs data={["Day", "Week"]} onTabChange={onTabChange}/>
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading}/>
    </div>
  );
};

export default Trending;
