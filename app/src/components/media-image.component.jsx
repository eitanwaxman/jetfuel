import React, { useEffect, useRef, useState } from "react";

import { ReactComponent as PlayIcon } from "../icons/play.svg";

const MediaImage = ({ media, campaignName, index }) => {
  const videoRef = useRef(null);
  const [playVideo, setPlayVideo] = useState(false);

  const handleVideoPlay = () => {
    setPlayVideo((prev) => !prev);
  };

  useEffect(() => {
    if (videoRef.current !== null) {
      videoRef.current.play();
    }
  }, [videoRef, playVideo]);

  return (
    <>
      <img
        className="media-img"
        src={media.cover_photo_url}
        alt={`${campaignName}_media_${media.media_type}_${index}`}
      ></img>
      {playVideo ? (
        <video className="media-video" ref={videoRef}>
          <source src={media.download_url}></source>
        </video>
      ) : (
        <div className="media-overlay"></div>
      )}
      {media.media_type === "video" && (
        <PlayIcon onClick={handleVideoPlay} className="play-icon" />
      )}
    </>
  );
};

export default MediaImage;
