import React from "react";
import MediaBlock from "./media-block.component";

const Medias = ({ campaignName, medias }) => {
  return (
    <>
      <div className="campaign-medias">
        {medias &&
          medias.map((media, index) => (
            <MediaBlock
              key={index}
              media={media}
              campaignName={campaignName}
              index={index}
            />
          ))}
      </div>
    </>
  );
};

export default Medias;
