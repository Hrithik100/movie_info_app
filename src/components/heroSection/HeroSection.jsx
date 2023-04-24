import React, { useEffect, useState } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import useFetch from "./../../hooks/useFetch";
import { useSelector } from "react-redux";
import LazyLoadImg from "../lazyLoadImage/LazyLoadImg";
import ContentWrapper from "../contentWrapper/ContentWrapper";

const HeroSection = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home);

  const { data, loading } = useFetch("/movie/upcoming");

  const searchHandler = (e) => {
    if (e.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data]);

  const isLightMode = useSelector((state) => state.lightMode.value);

  return (
    <div className={!isLightMode ? "heroBanner" : "heroBannerDark"}>
      {!loading && (
        <div className="backdrop-img">
          <LazyLoadImg src={background} />
        </div>
      )}
      <div className="opacity-layer"></div>
      <ContentWrapper>
          <div className="heroBannerContent">
            <span className="title">Welcome.</span>
            <span className="subTitle">
              Millions of movies and TV shows. Explore now.
            </span>
            <div className="searchInput">
              <input
                onKeyUp={searchHandler}
                onChange={(e) => setQuery(e.target.value)}
                type="text"
                placeholder="Search for a movie or tv show"
              />
              <button>Search</button>
            </div>
          </div>
      </ContentWrapper>
    </div>
  );
};

export default HeroSection;
