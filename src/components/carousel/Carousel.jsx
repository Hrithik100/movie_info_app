import React, { useRef } from "react";
import {
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import "./style.scss"
import ContentWrapper from "../contentWrapper/ContentWrapper";
import LazyLoadImg from "../lazyLoadImage/LazyLoadImg";
import noPoster from "../../assets/No_poster.png"
import Rating from "../rating/Rating";
import Genres from "../genres/Genres";

const Carousel = ({data, loading,endpoint, title}) => {

    const carouselContainer = useRef()
    const {url} = useSelector((state) => state.home)
    const navigate = useNavigate()

    const navigation = (dir) =>{
        const container = carouselContainer.current

        const scrollAmount = dir ==="left" ? container.scrollLeft - (container.offsetWidth + 20) : container.scrollLeft + (container.offsetWidth + 20)

        container.scrollTo({
            left: scrollAmount,
            behavior: "smooth"
        })
    }

    const SkeletonItem = () =>{
        return(
            <div className="skeletonItem">
                <div className="posterBlock skeleton"></div>
                <div className="textBlock">
                    <div className="title skeleton"></div>
                    <div className="date skeleton"></div>
                </div>
            </div>
        )
    }

    const isLightMode = useSelector((state) => state.lightMode.value);

  return (
    <div className={!isLightMode ? "carousel" : "carouselLight"}>
        <ContentWrapper>
            {title && <div className="carouselTitle">{title}</div>}
            <BsFillArrowLeftCircleFill className="carouselLeftNav arrow" onClick={() => navigation("left")}/>
            <BsFillArrowRightCircleFill className="carouselRightNav arrow" onClick={() => navigation("right")}/>
            {!loading ? (
                <div className="carouselItems" ref={carouselContainer}>
                    {data?.map((item) => {
                        const posterUrl = item.poster_path ? url.poster + item.poster_path : noPoster;
                        return (
                            <div key={item.id} className="carouselItem" onClick={() => navigate(`/${item.media_type || endpoint}/${item.id}`)}>
                                <div className="posterBlock">
                                    <LazyLoadImg src={posterUrl}/>
                                    <Rating rating={item.vote_average.toFixed(1)}/>
                                    <Genres data={item.genre_ids.slice(0,2)}/>
                                </div>
                                <div className="textBlock">
                                    <span className="title">
                                        {item.title || item.name}
                                    </span>
                                    <span className="date">
                                        {dayjs(item.release_date || item.first_air_date).format("MMM D, YYYY")}
                                    </span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            ) : (
                <div className="loadingSkeleton">
                    {SkeletonItem()}
                    {SkeletonItem()}
                    {SkeletonItem()}
                    {SkeletonItem()}
                    {SkeletonItem()}
                </div>
            )}
        </ContentWrapper>
    </div>
  )
}

export default Carousel