import React from "react";
import "./brand.css";
import { atlassian, dropbox, google, shopify, slack } from "./imports";

function Brand() {
  return (
    <div className="gpt3__brand section__padding">
      <div>
        <img src={atlassian} alt="atlassian" />
      </div>
      <img src={google} alt="google" />
      <div>
        <img src={dropbox} alt="dropbox" />
      </div>
      <div>
        <img src={shopify} alt="shopify" />
      </div>
      <div>
        <img src={slack} alt="slack" />
      </div>
    </div>
  );
}

export default Brand;
