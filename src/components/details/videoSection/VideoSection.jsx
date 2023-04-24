import React, { useState } from "react";
import "./style.scss";
import ContentWrapper from "../../contentWrapper/ContentWrapper";
import LazyLoadImg from "../../lazyLoadImage/LazyLoadImg";
import { Playbtn } from "../playbtn/Playbtn";
import VideoPopup from "../../videoPopup/VideoPopup";
import { useSelector } from "react-redux";

const VideoSection = ({ data, loading }) => {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);
  const isLightMode = useSelector((state) => state.lightMode.value);

  const loadingSkeleton = () => {
    return (
      <div className="skItem">
        <div className="thumb skeleton"></div>
        <div className="row skeleton"></div>
        <div className="row2 skeleton"></div>
      </div>
    );
  };

  return (
    <div className={!isLightMode ? "videosSection" : "videosSectionLight"}>
      <ContentWrapper>
        <div className="sectionHeading">Official Videos</div>
        {!loading ? (
          <div className="videos">
            {data?.results?.map((video) => (
              <div
                key={video.id}
                className="videoItem"
                onClick={() => {
                  setVideoId(video.key);
                  setShow(true);
                }}
              >
                <div className="videoThumbnail">
                  <LazyLoadImg
                    src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`}
                  />
                  <Playbtn />
                </div>
                <div className="videoTitle">{video.name}</div>
              </div>
            ))}
          </div>
        ) : (
          <div className="videoSkeleton">
            {loadingSkeleton()}
            {loadingSkeleton()}
            {loadingSkeleton()}
            {loadingSkeleton()}
          </div>
        )}
      </ContentWrapper>
      <VideoPopup
        show={show}
        setShow={setShow}
        videoId={videoId}
        setVideoId={setVideoId}
      />
    </div>
  );
};

export default VideoSection;
