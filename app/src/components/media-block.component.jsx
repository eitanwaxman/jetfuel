import React from "react";

import { ReactComponent as LinkIcon } from "../icons/link.svg";
import { ReactComponent as DownloadIcon } from "../icons/download.svg";
import MediaImage from "./media-image.component";

const MediaBlock = ({ media, campaignName, index }) => {
  const handleLinkCopy = (media) => {
    const url = media.tracking_link;
    navigator.clipboard.writeText(url);
    alert(`copied ${url} to clipboard`);
  };

  const handleDownload = (media) => {
    const url = media.download_url;
    const link = document.createElement("a");
    link.setAttribute("download", "video.mp4");
    link.href = url;
    document.body.appendChild(link);
    link.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="media">
        <MediaImage media={media} campaignName={campaignName} index={index} />

        <div className="media-controls">
          <button onClick={() => handleLinkCopy(media)}>
            <LinkIcon className="control-icon" />
          </button>
          <button onClick={() => handleDownload(media)}>
            <DownloadIcon className="control-icon" />
          </button>
        </div>
      </div>
    </>
  );
};

export default MediaBlock;
