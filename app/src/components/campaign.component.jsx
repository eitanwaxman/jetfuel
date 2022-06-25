import React from "react";

import Medias from "./medias.component";

const Campaign = ({ campaign }) => {
  return (
    <>
      <div className="campaign-header-wrapper">
        <img
          className="campaign-icon"
          src={campaign.campaign_icon_url}
          alt={campaign.campaign_name}
        ></img>
        <div className="campaign-title">
          <p>{campaign.campaign_name}</p>
          <p>
            <span className="installs-text">{campaign.pay_per_install}</span>{" "}
            per install
          </p>
        </div>
      </div>
      <Medias medias={campaign.medias} campaignName={campaign.campaign_name} />
    </>
  );
};

export default Campaign;
