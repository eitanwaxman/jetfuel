import React, { useEffect, useState } from "react";
import "./App.css";
import Campaign from "./components/campaign.component";

const DATA_URL = "https://www.plugco.in/public/take_home_sample_feed";

function App() {
  const [campaignsData, setCampaignsData] = useState();

  useEffect(() => {
    const getCampaignData = async () => {
      const response = await fetch(DATA_URL);
      const { campaigns } = await response.json();
      setCampaignsData(campaigns);
    };

    getCampaignData();
  }, []);

  return (
    <>
      <div className="campaigns-wrapper">
        {campaignsData ? (
          campaignsData.map((campaign) => (
            <Campaign key={campaign.id} campaign={campaign} />
          ))
        ) : (
          <p>
            Sorry we seem to have some trouble loading your campaigns... please
            try again soon
          </p>
        )}
      </div>
    </>
  );
}

export default App;
